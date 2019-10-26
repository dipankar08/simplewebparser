import { RSS_TYPE } from "./rss_reader";
import { LANG, STREAM } from "../CONST";
import {RssCrawler} from "./rss_crawl"
import { Analytics } from "../../analytics";
const cron = require('node-cron');

export type EntryPoint = {
    url:string,
    type:RSS_TYPE,
    extra: any; // LANG and STREAM
}


export var urlList:Array<EntryPoint> = [
    // banglarpran.
    {url:'https://www.banglarpran.com/archives/category/dooars/feed', type:RSS_TYPE.WORD_PRESS, extra:{'lang':LANG.BENGALI, 'stream':STREAM.BANGLADESH}},
    {url:'https://www.banglarpran.com/archives/category/state/feed', type:RSS_TYPE.WORD_PRESS, extra:{'lang':LANG.BENGALI, 'stream':STREAM.STATE}},
    {url:'https://www.banglarpran.com/archives/category/politics/feed', type:RSS_TYPE.WORD_PRESS, extra:{'lang':LANG.BENGALI, 'stream':STREAM.POLITICS}},
    {url:'https://www.banglarpran.com/archives/category/india/feed', type:RSS_TYPE.WORD_PRESS, extra:{'lang':LANG.BENGALI, 'stream':STREAM.COUNTRY}},
    {url:'https://www.banglarpran.com/archives/category/internation/feed', type:RSS_TYPE.WORD_PRESS, extra:{'lang':LANG.BENGALI, 'stream':STREAM.INTERNATIONAL}},
    {url:'https://www.banglarpran.com/archives/category/entertrainment/feed', type:RSS_TYPE.WORD_PRESS, extra:{'lang':LANG.BENGALI, 'stream':STREAM.ENTERTAINMENT}},
    {url:'https://www.banglarpran.com/archives/category/lifestyle/feed', type:RSS_TYPE.WORD_PRESS, extra:{'lang':LANG.BENGALI, 'stream':STREAM.LIFESTYLE}},
    {url:'https://www.banglarpran.com/feed', type:RSS_TYPE.WORD_PRESS, extra:{'lang':LANG.BENGALI, 'stream':STREAM.OTHER}},
]

async function startCrawl(){
    let c = new RssCrawler();
    await c.crawl(urlList);
}
// function. 
export async function rssCronJob(){
    Analytics.launch("crawler");
    // await updateprofile()
    cron.schedule('*/10 * * * *', () => {
        console.log(`${Date.now()} Running a task every 10 minutes`);
        startCrawl()
    });
    // run now too.
    startCrawl(); 
}





