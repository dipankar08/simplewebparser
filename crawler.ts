import { strict } from "assert";
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
    constructor(config: Array<PageParseConfig>) {
        this.config = config;
    }
    public async parse(url: string):Promise<StringAnyMap> {
        let result:StringAnyMap ={}
        result['url']= url;
        try {
            console.log(url);
            let url1 = new Url(url);
            console.log(`[DEBUG] TRY Fetching... ${url}`);
            let resp = await request(url);
            result['hostname'] =url1.hostname
            let $ = cheerio.load(resp.body);
            for (var item of this.config) {
                switch (item.type) {
                    case Type.TEXT:
                        let val = this.cleanHtmlData($(item.selector).text().trim())
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
            console.log(`[ERROR] article parse failed for URL:${url}, Error is: ${error}`)
            console.log(error);
        }
        return result;
    }
    public async parseMany(config:ExpandLinkConfig):Promise<Array<StringAnyMap>> {
        console.log(`[DEBUG] Parse many for : ${config.url}`);
        console.log(`[DEBUG] TRY Fetching... ${config.url}`);
        let resp = await request(config.url);
        let $ = cheerio.load(resp.body);
        let url_list1:any[] = []
        for(let s of config.selectors){
            for(let n of $(s)){
                url_list1.push(n)
            }
        }
        url_list1 = url_list1.slice(0, config.limit);
        let url_list2 = []
        for(let  u of url_list1){
            url_list2.push(this.absUrl(config.url.toString(), u.attribs.href))
        }
        console.log(`[DEBUG] URL LIST : ${url_list2}`);
        if(url_list2.length == 0){
            console.log(`[DEBUG] PARSE MANY FAILED: not a single child url found for ${config.url}`);
            return []
        }
        let result = []
        for( let u of url_list2){
            let res = await this.parse(u);
            if(res != null){
                result.push(_.assignIn(res, config.extra))
            }
        }
        return result;

    }

    public absUrl(root:string, url:string){
        if(url[0] == '/' && url[1] == '/'){
            return Url(root).protocol+url;
        }
        if(url[0] != '/'){
            return url;
        }
        return (new Url(root)).origin+url;
    }

    // this function will clean the data.
    public cleanHtmlData(str:string){
        str = str.replace(/[\t ]+/g, " ");
        str = str.replace(/[\r\n]+/g, '\n'); 
        str = str.replace(/[\n]+/g, '\n'); 
        // somehow replace consecutive replace doesn't work
        str = str.split("\n").filter(x=> x.trim().length > 1).join("\n");
        str = str.trim()
        if(str.length == 0){
            console.log(`\n\n[ERROR] $$$$ Parse returns an empty data . please have a look $$$$`)
        }
        return str;
    }
}


