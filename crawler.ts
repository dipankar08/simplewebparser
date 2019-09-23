import { strict } from "assert";
import { Analytics } from "./analytics";
var _ = require('lodash');

let request = require('async-request'),
    response;
const cheerio = require('cheerio')
var Url = require('url-parse');
export enum Type {
    TEXT,
    IMAGE,
    MULTI_TEXT,
}
export type RootConfig = {
    ignoreUrlRegex?:Array<string>, // Give the regex if a url match with it - it will just ignore.
}

export type PageParseConfig = {
    name: String,
    selector: String;
    type: Type,
    attr?:String,
}

export type ExpandLinkConfig = {
    url: String,
    selectors: Array<String>;
    extra: object,
    limit:number,
}

export interface StringTMap<T> { [key: string]: T; };
export interface NumberTMap<T> { [key: number]: T; };

export interface StringAnyMap extends StringTMap<any> {};
export interface NumberAnyMap extends NumberTMap<any> {};

export interface StringStringMap extends StringTMap<string> {};
export interface NumberStringMap extends NumberTMap<string> {};

export interface StringNumberMap extends StringTMap<number> {};
export interface NumberNumberMap extends NumberTMap<number> {};

export interface StringBooleanMap extends StringTMap<boolean> {};
export interface NumberBooleanMap extends NumberTMap<boolean> {};

export class Crawler {

    config: Array<PageParseConfig>;
    rootConfig:RootConfig;

    constructor(rootConfig:RootConfig, config: Array<PageParseConfig>) {
        this.rootConfig = rootConfig;
        this.config = config;
    }
    public async parse(url: string):Promise<StringAnyMap|null> {
        let result:StringAnyMap ={}
        result['url']= url;
        try {
            console.log(url);
            let url1 = new Url(url);
            console.log(`[DEBUG] TRY Fetching... ${url}`);
            var resp;
            try{
                resp = await request(url);
            } catch(error){
                Analytics.exception(error)
                return {};
            }
            result['hostname'] =url1.hostname
            let $ = cheerio.load(resp.body);
            for (var item of this.config) {
                switch (item.type) {
                    case Type.TEXT:
                        let val = this.cleanHtmlData(url, $(item.selector).text().trim())
                        result[item.name.toString()]=val;
                        break;
                    case Type.IMAGE:
                        if(!item.attr){
                            item.attr = 'src' 
                        }
                        result[item.name.toString()]= this.absUrl(url, $(item.selector).attr(item.attr))
                        break;
                }
            }
        } catch (error) {
            Analytics.exception(error)
            console.log(`[ERROR] article parse failed for URL:${url}, Error is: ${error}`)
            console.log(error);
        }
        return result;
    }

    public async parseMany(config:ExpandLinkConfig):Promise<Array<StringAnyMap>|null> {
        console.log(`[DEBUG] Parse many for : ${config.url}`);
        console.log(`[DEBUG] TRY Fetching... ${config.url}`);

        var resp;
        try{
            resp = await request(config.url);
        } catch(e){
            Analytics.exception(e)
            return null;
        }
        let $ = cheerio.load(resp.body);
        let url_list1:string[] = []
        for(let s of config.selectors){
            for(let n of $(s)){
                url_list1.push(n.attribs.href)
            }
        }

        // Make Abs URL
        let urls_abs = url_list1.map(x=> this.absUrl(config.url.toString(), x));

        // find unique
        urls_abs = Array.from(new Set(urls_abs))
          
        // run filter
        let url_filtered = []
        if(this.rootConfig.ignoreUrlRegex && this.rootConfig.ignoreUrlRegex.length > 0){
            for(let u of urls_abs){
                for (let ic of this.rootConfig.ignoreUrlRegex){
                    if(u.indexOf(ic) != -1){
                        console.log(`[INFO] Ignoring url ${u} as it is getting ignored by rootConfig`)
                        break;
                    }
                    url_filtered.push(u)
                }
            }
        } else{
            url_filtered = urls_abs;
        }

        // put a limit
        let urls_final = url_filtered.slice(0, config.limit);

       
        console.log(`[DEBUG] URL LIST : ${urls_final}`);


        if(urls_final.length == 0){
            Analytics.action('broken_root_url', `Effected URL: ${config.url} for selector ${config.selectors}`)
            console.log(`[DEBUG] PARSE MANY FAILED: not a single child url found for ${config.url}`);
            return []
        }

        let result = []
        for( let u of urls_final){
            let res = await this.parse(u);
            if(res != null){
                result.push(_.assignIn(res, config.extra))
            }
        }
        return result;
    }

    public absUrl(root:string, url:string){
        if(url == null || url.length == 0){
            return null
        }
        if(url[0] == '/' && url[1] == '/'){
            return Url(root).protocol+url;
        }
        if(url[0] != '/'){
            return url;
        }
        return (new Url(root)).origin+url;
    }

    // this function will clean the data.
    public cleanHtmlData(url:string, str:string){
        str = str.replace(/[\t ]+/g, " ");
        str = str.replace(/[\r\n]+/g, '\n'); 
        str = str.replace(/[\n]+/g, '\n'); 
        // somehow replace consecutive replace doesn't work
        str = str.split("\n").filter(x=> x.trim().length > 1).join("\n");
        str = str.trim()
        if(str.length == 0){
            Analytics.action('parse_empty_data', `Effected URL: ${url} for string ${str}`)
            console.log(`\n\n[ERROR] $$$$ Parse returns an empty data . please have a look $$$$`)
        }
        return str;
    }
}


