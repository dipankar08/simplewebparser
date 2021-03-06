let Parser = require('rss-parser');
let parser = new Parser();
import {getHostNameFromUrl} from "../utils/db_helper"
import { parse } from 'node-html-parser';
var fastparser = require('fast-xml-parser');
import { Analytics } from "../../analytics";
import { LANG, STREAM, Content, TELEMETRY_NETWORK_ERROR, TELEMETRY_RSS_LINK_BROKEN, TELEMETRY_RSS_IMAGE_NOT_FOUND } from "../CONST";
import { d, ex } from "../utils/dlog";
import { StringAnyMap } from "../utils/types";
import {findAllDataList, WebElementType} from "./htmlparser"
const request = require('request-promise');

export abstract class BaseRSSReader {
    public abstract async read(url: string, extra: any): Promise<Array<StringAnyMap>>;
}

export class WordPressRssReader extends BaseRSSReader {

    async read(url: string, extra: any): Promise<Array<StringAnyMap>> {
        // fetch URL and then read.
        d(`[RSS] Start redding RSS ${url}`);
        var feed = null;
        try{
            feed = await parser.parseURL(url);
        } catch(e){
            Analytics.hit_tracker({'action':TELEMETRY_NETWORK_ERROR,url:url});
            return []
        }
        let result = []
        for(var item of feed.items){
            let link = item.link
            let hostname = getHostNameFromUrl(link)
            try{
                const html = parse(item['content:encoded']);
                result.push({
                    title: item.title,
                    img: this.getImgFromHTML(hostname, html),
                    details:html.text,
                    url:item.link,
                    hostname:getHostNameFromUrl(url),
                    stream: extra.stream
                })
            } catch(e){
                ex(e)
                Analytics.hit_tracker({"action":TELEMETRY_RSS_LINK_BROKEN,"url":link})
            }
        }
        return result;
    }
    getImgFromHTML(hostname:string, html):string{
        if(html.querySelector("img")){
            return html.querySelector("img").attributes.src
        } else{
            Analytics.hit_tracker({'action':TELEMETRY_RSS_IMAGE_NOT_FOUND,hostname:hostname});
            return null
        }
    }
}



export class RssTwoSummaryReader extends BaseRSSReader {
    async read(url: string, extra: any): Promise<Array<StringAnyMap>> {
        // fetch URL and then read.
        d(`[RSS] Start redding RSS ${url}`);
        var feed = null;
        try{
            feed = await parser.parseURL(url);
        } catch(e){
            Analytics.hit_tracker({'action':TELEMETRY_NETWORK_ERROR,url:url});
            return []
        }
        let result = []
        for(var item of feed.items){
            let link = item.link
            try{
                const html = parse(item['content']);
                result.push({
                    title: item.title,
                    img: item.enclosure.url,
                    details: item.content,
                    url:item.link,
                    hostname:getHostNameFromUrl(url),
                    stream: extra.stream
                })
            } catch(e){
                ex(e)
                Analytics.hit_tracker({"action":TELEMETRY_RSS_LINK_BROKEN,"url":link})
            }
        }
        return result;
    }
    getImgFromHTML(hostname:string, html):string{
        if(html.querySelector("img")){
            return html.querySelector("img").attributes.src
        } else{
            Analytics.hit_tracker({'action':TELEMETRY_RSS_IMAGE_NOT_FOUND,hostname:hostname});
            return null
        }
    }
}

export class RssTwoReader extends BaseRSSReader {

    async read(url: string, extra: any): Promise<Array<StringAnyMap>> {
        // fetch URL and then read.
        d(`[RSS] Start redding RSS ${url}`);
        var feed = null;
        try{
            feed = await parser.parseURL(url);
        } catch(e){
            Analytics.hit_tracker({'action':TELEMETRY_NETWORK_ERROR,url:url});
            return []
        }
        let result = []
        for(var item of feed.items){
            let link = item.link
            let hostname = getHostNameFromUrl(link)
            try{
                const html = parse(item['content']);
                result.push({
                    title: item.title,
                    img: this.getImgFromHTML(hostname, html),
                    details:html.text,
                    url:item.link,
                    hostname:getHostNameFromUrl(url),
                    stream: extra.stream
                })
            } catch(e){
                ex(e)
                Analytics.hit_tracker({"action":TELEMETRY_RSS_LINK_BROKEN,"url":link})
            }
        }
        return result;
    }
    getImgFromHTML(hostname:string, html):string{
        if(html.querySelector("img")){
            return html.querySelector("img").attributes.src
        } else{
            Analytics.hit_tracker({'action':TELEMETRY_RSS_IMAGE_NOT_FOUND,hostname:hostname});
            return null
        }
    }
}

export class YouTubeRssReader extends BaseRSSReader {
    async read(url: string, extra: any): Promise<Array<Content>> {
        // fetch URL and then read.
        d(`[RSS] Start redding RSS ${url}`);
        var rawdata;
        try{
            rawdata= await request.get(url);
        } catch(e){
            Analytics.hit_tracker({'action':TELEMETRY_NETWORK_ERROR,url:url});
            return []
        }
 
        var feed = null;
        try{
            feed = fastparser.parse(rawdata,{ ignoreAttributes : false});
        } catch(e){
            Analytics.hit_tracker({'action':TELEMETRY_NETWORK_ERROR,url:url});
            return []
        }

        let result = []
        for(var item of feed.feed.entry){
            try{
                result.push({
                    title: item.title,
                    img: item['media:group']['media:thumbnail']['@_url'],
                    details:item.title,
                    url:item.link['@_href'],
                    hostname:item.author,
                    lang:extra.lang,
                })
            } catch(e){
                ex(e)
                Analytics.action(TELEMETRY_RSS_LINK_BROKEN,getHostNameFromUrl(item.link['@_href']),{"url":item.link['@_href']})
            }
        }
        return result;
    }
}
// some of the RSS encoded over HTML like 
// https://www.dinamani.com/%E0%AE%B5%E0%AE%BF%E0%AE%B3%E0%AF%88%E0%AE%AF%E0%AE%BE%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AF%81/%E0%AE%9A%E0%AF%86%E0%AE%AF%E0%AF%8D%E0%AE%A4%E0%AE%BF%E0%AE%95%E0%AE%B3%E0%AF%8D/rssfeed/?id=480
export class HTMLEnCodedRssReader extends BaseRSSReader {
    async read(url: string, extra: any): Promise<Array<StringAnyMap>> {
        // fetch URL and then read.
        d(`[RSS] Start reading RSS ${url}`);
        try{
            var result  = await findAllDataList(url, 'item', [
                { name: 'title', selector: 'title', type: WebElementType.TEXT },
                { name: 'img', selector: 'img', type: WebElementType.IMAGE },
                { name: 'details', selector: 'story p', type: WebElementType.TEXT_MULTI },
                { name: 'url', selector: 'link', type: WebElementType.INNER_TEXT },
            ])
            result = result.map(x=>{
                x['stream'] = extra.stream; 
                return x
            })
            return result;
        } catch(e){
            ex(e)
        }
        return []
    }   
}




