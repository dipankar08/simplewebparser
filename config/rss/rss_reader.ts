let Parser = require('rss-parser');
let parser = new Parser();
import {getHostNameFromUrl} from "../utils/helper"
import { parse } from 'node-html-parser';
import { Analytics } from "../../analytics";
import { LANG, STREAM } from "../CONST";
export type Content = {
    title:string,
    img:string,
    details:string ,
    url:string,
    hostname:string,
    lang:LANG,
    stream:STREAM,
}
export function validate(c:Content){
    return c && c.url && c.title && c.img && c.title.length > 10 && c.url.length >10 && c.details.length > 20;
}

export enum RSS_TYPE{
    WORD_PRESS,
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
            try{
                const html = parse(item['content:encoded']);
                result.push({
                    title: item.title,
                    img: this.getImgFromHTML(html),
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

    getImgFromHTML(html):string{
        return 'xxxxx';
    }
}







