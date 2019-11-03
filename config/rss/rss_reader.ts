let Parser = require('rss-parser');
let parser = new Parser();
import {getHostNameFromUrl} from "../utils/db_helper"
import { parse } from 'node-html-parser';
var fastparser = require('fast-xml-parser');
import { Analytics } from "../../analytics";
import { LANG, STREAM, Content } from "../CONST";
const request = require('request-promise');

export enum RSS_TYPE {
    WORD_PRESS,
    YOUTUBE
}

export abstract class BaseReader {
    public abstract getType():RSS_TYPE;
    public abstract async read(url: string, extra: any): Promise<Array<Content>>;
}


export class WordPressRssReader extends BaseReader {
    getType(): RSS_TYPE {
        return RSS_TYPE.WORD_PRESS;
    }

    async read(url: string, extra: any): Promise<Array<Content>> {
        // fetch URL and then read.
        console.log(`[RSS] Start redding RSS ${url}`);
        let feed = await parser.parseURL(url);
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
                    lang:extra.lang,
                    stream: extra.stream
                })
            } catch(e){
                Analytics.action('rss_link_broken',getHostNameFromUrl(item.link),{"url":link})
            }
        }
        return result;
    }
    getImgFromHTML(hostname:string, html):string{
        if(html.querySelector("img")){
            return html.querySelector("img").attributes.src
        } else{
            Analytics.action('rss_image_not_found',hostname);
            return null
        }
    }
}

export class YouTubeRssReader extends BaseReader {
    getType(): RSS_TYPE {
        return RSS_TYPE.YOUTUBE;
    }

    async read(url: string, extra: any): Promise<Array<Content>> {
        // fetch URL and then read.
        console.log(`[RSS] Start redding RSS ${url}`);
        let rawdata= await request.get(url);
        var feed = fastparser.parse(rawdata,{ ignoreAttributes : false});

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
                    stream: extra.stream
                })
            } catch(e){
                Analytics.action('rss_link_broken',getHostNameFromUrl(item.link['@_href']),{"url":item.link['@_href']})
            }
        }
        return result;
    }
}






