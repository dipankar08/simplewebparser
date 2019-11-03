import { LIMIT, DB_URL } from "../CONST";
import { Analytics } from "../../analytics";
import { String } from "lodash";
import { StringAnyMap } from "../utils/types";
let request = require('async-request'), // TODO: move to const request = require("request-promise");
    response;
const cheerio = require('cheerio')
var Url = require('url-parse');

export enum WebElementType {
    TEXT,
    IMAGE,
    MULTI_TEXT,
}

export type WebConfig ={
    list_selector?:string,
    storyParseConfig?:Array<WebElementParseConfig>,
    list_limit?:number,

    // advance config
    ignoreUrlRegex?:Array<string>,
    ignoreLineRegex?:Array<string>,
    networkFetcher?:Function,

    // profile config.
    profileDefaultImg?:string,
}

export type WebElementParseConfig = {
    name: string,
    selector: string;
    type: WebElementType,
    attr?:string,
}

export async function parseStory(url: string, config:WebConfig):Promise<StringAnyMap|null> {
    let result:StringAnyMap ={}
    result['url']= url;
    try {
        console.log(`[DEBUG] Try fetching... ${url}`);
        let url1 = new Url(url);
        var body;
        try{
            if(config.networkFetcher){
                body = await config.networkFetcher(url);
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
        for (var item of config.storyParseConfig) {
            switch (item.type) {
                case WebElementType.TEXT:
                    let val = cleanHtmlData(url, $(item.selector).toArray().map((x: any)=>$(x).text()).join('\n'), config)
                    result[item.name.toString()]=val;
                    break;
                case WebElementType.IMAGE:
                    if(!item.attr){
                        item.attr = 'src' 
                    }
                    result[item.name.toString()]= absUrl(url, $(item.selector).attr(item.attr))
                    if(!result[item.name.toString()]){
                        result[item.name.toString()] = config.profileDefaultImg;
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

export async function parseStoreList(url:string, config:WebConfig): Promise<Array<string>|null> {
    let urlList:Array<string> =[]
    try{
        console.log(`[INFO] Fetching link ${url}`)
        var body;
        try{
            if(config.networkFetcher){
                body = await config.networkFetcher(url);
            } else{
                let resp = await request(url);
                body = resp.body
            }
        } catch(error){
            Analytics.exception(error)
            return []
        }
        let $ = cheerio.load(body);
        
        let url_list: Array<string>  = []
        for(let n of $(config.list_selector)){
            url_list.push(n.attribs.href)
        }

        url_list = url_list.map(x=> absUrl(url.toString(), x));
        console.log(`[INFO] LinkFound/all: ${url_list.length}`)
        
        url_list = Array.from(new Set(url_list))
        console.log(`[INFO] LinkFound/unique: ${url_list.length}`)
            
        url_list = getFilteredUrl(url, url_list, config)
        console.log(`[INFO] LinkFound/filter: ${url_list.length}`)

        url_list = url_list.slice(0, config.list_limit ? config.list_limit: LIMIT);
        console.log(`[INFO] LinkFound/slice: ${url_list.length}`)
           
        // first we will slice and then make a reverse to ensure we cut latest news and then insert in reverse order.
        url_list = url_list.reverse()
        if(url_list.length ==0){
                Analytics.action("error_parse_root_url", url); 
        }
        return url_list;
    }catch(err){
        Analytics.action("error_parse_root_url", url);
        Analytics.exception(err,{"url":url})
    }
}

export function absUrl(root:string, url:string){
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

export function getFilteredUrl(root_url, urls_abs, config:WebConfig){
    let url_filtered = []
    for(let u of urls_abs){
        if(Url(u).hostname != Url(root_url).hostname){
            console.log(`[INFO] Ignore url ${u} for out of domain fetch`)
            continue;
        }
        if(config.ignoreUrlRegex && config.ignoreUrlRegex.length > 0){
            let flag =0;
            for (let ic of config.ignoreUrlRegex){
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

// this function will clean the data.
export function cleanHtmlData(url:string, str:string, config:WebConfig){
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
        if(config.ignoreLineRegex != null){
            for(let regex of config.ignoreLineRegex ){
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
