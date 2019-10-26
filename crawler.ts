import { strict } from "assert";
import { Analytics } from "./analytics";
import { url } from "inspector";
import { StoryListConfig, LIMIT, STREAM, DB_URL } from "./config/CONST";
import {uniqBy, assignIn} from "lodash"
import { SummaryStrategy } from "./config/summary/SummaryManager";
import {StringAnyMap} from "./config/utils/types";

let request = require('async-request'), // TODO: move to const request = require("request-promise");
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
    ignoreLineRegex?:Array<string>, // it will ignone this line in a para while parsing a text.
    networkFetcher?: Function,
    defaultImg?:String, // default image to be shown if img not found.
    title:String, // optinal title
    is_active?:Boolean,
    summary?:SummaryStrategy,
}

export type SourceConfig = {
    isActive: false,
    isActiveMsg: 'Coming soon.',
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
            console.log(`[DEBUG] Try fetching... ${url}`);
            let url1 = new Url(url);
            var body;
            try{
                if(this.rootConfig.networkFetcher){
                    body = await this.rootConfig.networkFetcher(url);
                } else{
                    let resp = await request(url);
                    body = resp.body
                }
            } catch(error){
                Analytics.exception(error)
                return {};
            }
            console.log("[INFO Fetching done!")
            result['hostname'] =url1.hostname
            let $ = cheerio.load(body);
            for (var item of this.config) {
                switch (item.type) {
                    case Type.TEXT:
                        let val = this.cleanHtmlData(url, $(item.selector).toArray().map((x: any)=>$(x).text()).join('\n'))
                        result[item.name.toString()]=val;
                        break;
                    case Type.IMAGE:
                        if(!item.attr){
                            item.attr = 'src' 
                        }
                        result[item.name.toString()]= this.absUrl(url, $(item.selector).attr(item.attr))
                        if(!result[item.name.toString()]){
                            result[item.name.toString()] = this.rootConfig.defaultImg;
                        }
                        break;
                }
            }
        } catch (error) {     
            Analytics.exception(error, result)
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
            Analytics.action('error_broken_root_url', `Effected URL: ${config.url} for selector ${config.selectors}`,{hostname:new Url(config.url).hostname, url:config.url})
            console.log(`[DEBUG] PARSE MANY FAILED: not a single child url found for ${config.url}`);
            return []
        }

        let result = []
        for( let u of urls_final){
            let res = await this.parse(u);
            if(res != null){
                result.push(assignIn(res, config.extra))
            }
        }
        return result;
    }

    // Much Optimized Crawling
    public async parseStoryList(storyConfig: Array<StoryListConfig>): Promise<Array<StringAnyMap>|null> {
        console.log(`[INFO] Total Story List count: ${storyConfig.length}`)
        let urlList:Array<StringAnyMap> =[]
        for( let config of storyConfig){
            console.log(`[INFO] =====================  PROCESSING ${STREAM[config.stream]} =======================`)
            try{
                console.log(`[INFO] Fetching link ${config.url}`)
                let body = null;
                if(this.rootConfig.networkFetcher){
                    body = await this.rootConfig.networkFetcher(config.url);
                } else{
                    let resp = await request(config.url);
                    body = resp.body;
                }

                let $ = cheerio.load(body);
                let url_list1: Array<string>  = []
                for(let n of $(config.selector)){
                    url_list1.push(n.attribs.href)
                }
                let urls_abs = url_list1.map(x=> this.absUrl(config.url.toString(), x));
                console.log(`[INFO] LinkFound/all: ${urls_abs.length}`)
                urls_abs = Array.from(new Set(urls_abs))
                console.log(`[INFO] LinkFound/unique: ${urls_abs.length}`)
                urls_abs = this.getFilteredUrl(config.url, urls_abs)
                console.log(`[INFO] LinkFound/filter: ${urls_abs.length}`)
                urls_abs = urls_abs.slice(0, config.limit ? config.limit: LIMIT);
                console.log(`[INFO] LinkFound/slice: ${urls_abs.length}`)
                // first we will slice and then make a reverse to ensure we cut latest news and then insert in reverse order.
                urls_abs = urls_abs.reverse()
                if(urls_abs.length ==0){
                    Analytics.action("error_parse_root_url", config.url); 
                }
                urlList = urlList.concat(urls_abs.map(x=> {return {'url': x, 'extra':config.extra}}))
            }catch(err){
                Analytics.action("error_parse_root_url", config.url);
                Analytics.exception(err,{"url":config.url})
            }
        }
        console.log(`[INFO] Total count of Story Link: ${urlList.length}`)

        // remove duplicate :
        urlList = uniqBy(urlList,'url')
        //urlList = Array.from(new Set(urlList))
        console.log(`[INFO] Total count of Story Link(After remove duplicate): ${urlList.length}`)

        if(urlList.length == 0){
            return null
        }
        // find duplicate in server
        let resp = await request(`${DB_URL}/exist`,{
            method: 'POST',
            data: JSON.stringify({
                _field: 'url',
                _value:urlList.map(x=>x.url)
            })
        });

        let obj = JSON.parse(resp.body)
        if(obj.status == 'success'){
            Analytics.action('stat_parse_duplicate','dummy',{'unique_count':urlList.length - obj.out.found_count, 'duplicate_count': obj.out.found_count,'domain':Url(url).hostname})
            urlList =  urlList.filter(x=> obj.out.found_list[x.url] == null)
            console.log(`[INFO] Total link which is NOT in DB: ${urlList.length}, DB Found count: ${obj.out.found_count}`)
           if(urlList.length == 0){
                return;
            }
        } else{
            return;
        }
        

        // Now fetch the URL which not in DB and insert.
        let result = []
        for( let u of urlList){
            let res = await this.parse(u.url);
            if(res != null){
                result.push(assignIn(res, u.extra))
            }
        }
        return result
    }


    public absUrl(root:string, url:string){
        if(url == null || url.length == 0){
            return null
        }
        // https or http://
        if(url.startsWith("http")){
            return url;
        }

        if(url.startsWith("www")){
            return url;
        }

        //  starts with //abc.face
        if(url[0] == '/' && url[1] == '/'){
            return Url(root).protocol+url;
        }
        // syarts with /abc/def
        if(url[0] == '/'){
            return (new Url(root)).origin+url;
        }

        // sarts with anything else like "detailsnews?..."
        return Url(root).origin+"/"+url;
    }

    // this function will clean the data.
    public cleanHtmlData(url:string, str:string){
        str = str.trim()
        str = str.replace(/[\t ]+/g, " ");
        str = str.replace(/[\r\n]+/g, '\n'); 
        str = str.replace(/[\n]+/g, '\n'); 
        // somehow replace consecutive replace doesn't work
        str = str.split("\n").filter( x=> {
            if(x.trim().length < 1){
                return false;
            }
            let shouldNotIgnore = true;
            if(this.rootConfig.ignoreLineRegex != null){
                for(let regex of this.rootConfig.ignoreLineRegex ){
                    if(x.indexOf(regex) != -1){
                        shouldNotIgnore = false;
                        break; 
                    }
                }
            }
            return shouldNotIgnore;
        }
        ).join("\n");
        if(str.length == 0){
            console.log(`\n\n[ERROR] $$$$ Parse returns an empty data . please have a look $$$$`)
        }
        return str;
    }

    // cut out url which is invalid.
    private getFilteredUrl(root_url, urls_abs){
        let url_filtered = []
        for(let u of urls_abs){
            if(Url(u).hostname != Url(root_url).hostname){
                console.log(`[INFO] Ignore url ${u} for out of domain fetch`)
                continue;
            }
            if(this.rootConfig.ignoreUrlRegex && this.rootConfig.ignoreUrlRegex.length > 0){
                let flag =0;
                for (let ic of this.rootConfig.ignoreUrlRegex){
                    if(u.indexOf(ic) != -1){
                        console.log(`[INFO] Ignoring url ${u} as it is getting ignored by rootConfig`)
                        flag =1;
                        break;   
                    }
                }
                if (flag ==1) {
                    continue;
                }
            }
            url_filtered.push(u)
        }
        return url_filtered;
    }
}


