import { d, ex } from "../utils/dlog";
import { WebElementParseConfig } from "./htmlparser";
var Url = require('url-parse');

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

export function getFilteredUrl(root_url, urls_abs, config:WebConfig){
    let url_filtered = []
    for(let u of urls_abs){
        if(Url(u).hostname != Url(root_url).hostname){
            d(`[INFO] Ignore url ${u} for out of domain fetch`)
            continue;
        }
        if(config.ignoreUrlRegex && config.ignoreUrlRegex.length > 0){
            let flag =0;
            for (let ic of config.ignoreUrlRegex){
                if(u.indexOf(ic) != -1){
                    d(`[INFO] Ignoring url ${u} as it is getting ignored by rootConfig`)
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

// We will clean the data again for second time. 
export function superCleanData(url:string, str:string, config:WebConfig){
    if(str.length == 0){
        return str;
    }
    // trim it first
    str = str.trim()

    // Remove portal tag line.
    let indexD = str.indexOf(':')
    if(indexD != -1 && indexD < 50){
        str = str.substring(indexD+1, str.length);
    }


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
        d(`\n\n[ERROR] $$$$ Parse returns an empty data . please have a look $$$$`)
    }
    return str;
}
