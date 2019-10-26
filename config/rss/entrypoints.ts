import { RSS_TYPE } from "./rss_reader";
import { LANG, STREAM, CATEGORIES } from "../CONST";
import {RssCrawler} from "./rss_crawl"
import { Analytics } from "../../analytics";
const cron = require('node-cron');

export type EntryPoint = {
    url:string,
    type:RSS_TYPE,
    extra: any; // LANG and STREAM
}


export var urlList:Array<EntryPoint> = [
   
   
    // youtube feed.
    {url:'https://www.youtube.com/feeds/videos.xml?channel_id=UCFaQMPEjeQZk7kcHX2RouBA', type:RSS_TYPE.YOUTUBE, extra:{ 'stream':STREAM.TECHNOLOGY,'lang':LANG.BENGALI,'categories':CATEGORIES.VIDEO}},
    {url:'https://www.youtube.com/feeds/videos.xml?channel_id=UCxiudYA69dNRFEDgvolDbtA', type:RSS_TYPE.YOUTUBE, extra:{ 'stream':STREAM.TECHNOLOGY,'lang':LANG.BENGALI,'categories':CATEGORIES.VIDEO}},
    {url:'https://www.youtube.com/feeds/videos.xml?channel_id=UC9YivGoN6UKWkl0k-8G1qyQ', type:RSS_TYPE.YOUTUBE, extra:{ 'stream':STREAM.TECHNOLOGY,'lang':LANG.BENGALI,'categories':CATEGORIES.VIDEO}},
    {url:'https://www.youtube.com/feeds/videos.xml?channel_id=UCe_VQEe28mNPEwkBJ_kpxCg', type:RSS_TYPE.YOUTUBE, extra:{ 'stream':STREAM.EDUCATION,'lang':LANG.BENGALI,'categories':CATEGORIES.VIDEO}},
    {url:'https://www.youtube.com/feeds/videos.xml?channel_id=UCjjyoWPQXhskdLLmv-RyzEQ', type:RSS_TYPE.YOUTUBE, extra:{ 'stream':STREAM.AUDIO_STORY,'lang':LANG.BENGALI,'categories':CATEGORIES.VIDEO}},
    {url:'https://www.youtube.com/feeds/videos.xml?channel_id=UC2KhNQ3pAmkN6Kepf8ccFZQ', type:RSS_TYPE.YOUTUBE, extra:{ 'stream':STREAM.MOTIVATIONAL,'lang':LANG.BENGALI,'categories':CATEGORIES.VIDEO}},
    {url:'https://www.youtube.com/feeds/videos.xml?channel_id=UCsv4YOF2RBYh0NQ1vuHQ-hg', type:RSS_TYPE.YOUTUBE, extra:{ 'stream':STREAM.COMEDY,'lang':LANG.ENGLISH,'categories':CATEGORIES.VIDEO}},


    


    // AajBangla
    {url:'https://www.aajbangla.in/category/aajkolkata/feed', extra:{'stream':STREAM.LATEST, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%b0%e0%a6%be%e0%a6%9c%e0%a7%8d%e0%a6%af/feed', extra:{'stream':STREAM.STATE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%a6%e0%a7%87%e0%a6%b6/feed', extra:{'stream':STREAM.COUNTRY, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%a4%e0%a7%8d%e0%a6%b0%e0%a6%bf%e0%a6%aa%e0%a7%81%e0%a6%b0%e0%a6%be/feed', extra:{'stream':STREAM.TRIPURA, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%8d%e0%a6%ac-aaj-world-news/feed', extra:{'stream':STREAM.INTERNATIONAL, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%96%e0%a7%87%e0%a6%b2%e0%a6%be/feed', extra:{'stream':STREAM.SPORTS, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%bf%e0%a6%a8%e0%a7%8b%e0%a6%a6%e0%a6%a8/feed', extra:{'stream':STREAM.ENTERTAINMENT, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c%e0%a6%95%e0%a7%87%e0%a6%b0-%e0%a6%a6%e0%a6%bf%e0%a6%a8/feed', extra:{'stream':STREAM.ASTROLOGY, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%87%e0%a6%b7/feed', extra:{'stream':STREAM.OFF_BEAT, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.aajbangla.in/category/%e0%a6%b2%e0%a6%be%e0%a6%87%e0%a6%ab%e0%a6%b8%e0%a7%8d%e0%a6%9f%e0%a6%be%e0%a6%87%e0%a6%b2/', extra:{'stream':STREAM.LIFESTYLE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.aajbangla.in/category/%e0%a6%ad%e0%a7%8d%e0%a6%b0%e0%a6%ae%e0%a6%a3/', extra:{'stream':STREAM.TOUR, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.aajbangla.in/feed', extra:{'stream':STREAM.LATEST, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},

    // https://www.master24.in
    {url:'https://www.master24.in/archives/category/politics/feed', extra:{'stream':STREAM.POLITICS, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.master24.in/archives/category/state/feed', extra:{'stream':STREAM.STATE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.master24.in/archives/category/national/feed', extra:{'stream':STREAM.COUNTRY, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.master24.in/archives/category/international/feed', extra:{'stream':STREAM.INTERNATIONAL, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.master24.in/archives/category/lifestyle/feed', extra:{'stream':STREAM.LIFESTYLE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.master24.in/archives/category/editorial/feed', extra:{'stream':STREAM.EDITORIAL, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.master24.in/archives/category/tech-news/feed', extra:{'stream':STREAM.TECHNOLOGY, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.master24.in/archives/category/job-and-business/feed', extra:{'stream':STREAM.JOB, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.master24.in/archives/category/sports/feed', extra:{'stream':STREAM.SPORTS, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.master24.in/feed', extra:{'stream':STREAM.LATEST, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},


    // darkaritips
    {url:'https://www.darkaritips.com/category/pregnancy-care/', extra:{'stream':STREAM.HEALTH, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.darkaritips.com/category/health-message/', extra:{'stream':STREAM.HEALTH, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.darkaritips.com/category/lifestyle/', extra:{'stream':STREAM.LIFESTYLE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.darkaritips.com/category/recipe/', extra:{'stream':STREAM.RECIPE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.darkaritips.com/category/tech-tips/', extra:{'stream':STREAM.TECHNOLOGY, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.darkaritips.com/category/viral-news/', extra:{'stream':STREAM.VIRAL, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.darkaritips.com/category/health-nutrition/', extra:{'stream':STREAM.HEALTH, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.darkaritips.com/category/health-beauty/', extra:{'stream':STREAM.HEALTH, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.darkaritips.com/category/luck/', extra:{'stream':STREAM.LIFESTYLE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.darkaritips.com/feed', extra:{'stream':STREAM.LIFESTYLE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
   
    // totka24x7
    {url:'https://www.totka24x7.com/archives/category/lifestyle/feed', extra:{'stream':STREAM.LIFESTYLE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.totka24x7.com/archives/category/earn-money/feed', extra:{'stream':STREAM.BUSINESS, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.totka24x7.com/archives/category/viral/feed', extra:{'stream':STREAM.VIRAL, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.totka24x7.com/archives/category/entertainment/feed', extra:{'stream':STREAM.ENTERTAINMENT, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.totka24x7.com/archives/category/technology/feed', extra:{'stream':STREAM.TECHNOLOGY, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.totka24x7.com/archives/category/headlines/feed', extra:{'stream':STREAM.FIRST_PAGE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.totka24x7.com/archives/category/astrology/feed', extra:{'stream':STREAM.ASTROLOGY, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.totka24x7.com/archives/category/different-news/feed', extra:{'stream':STREAM.OTHER, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.totka24x7.com/feed', extra:{'stream':STREAM.OTHER, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    
    

    // Nilkontho 
    {url:'https://www.nilkantho.in/category/news/kolkata/feed', extra:{'stream':STREAM.KOLKATA, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/news/state/feed', extra:{'stream':STREAM.STATE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/news/national/feed', extra:{'stream':STREAM.COUNTRY, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/news/world/feed', extra:{'stream':STREAM.INTERNATIONAL, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/news/entertainment/feed', extra:{'stream':STREAM.ENTERTAINMENT, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/news/sports/feed', extra:{'stream':STREAM.SPORTS, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/news/business/feed', extra:{'stream':STREAM.BUSINESS, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/news/scitech/feed', extra:{'stream':STREAM.TECHNOLOGY, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/health/feed', extra:{'stream':STREAM.HEALTH, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/lifestyle/feed', extra:{'stream':STREAM.LIFESTYLE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/mythology/feed', extra:{'stream':STREAM.MYTHOLOGY, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/feature/feed', extra:{'stream':STREAM.OTHER, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/lets-go/feed', extra:{'stream':STREAM.TOUR, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/festive-mood/feed', extra:{'stream':STREAM.FESTIVE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/feed', extra:{'stream':STREAM.FIRST_PAGE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},


    // GNE Bangla
    {url:'https://gnebangla.in/category/local-news/feed', extra:{'stream':STREAM.FIRST_PAGE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://gnebangla.in/category/west-bengal/feed', extra:{'stream':STREAM.STATE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://gnebangla.in/category/national-news/feed', extra:{'stream':STREAM.COUNTRY, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://gnebangla.in/category/international/feed', extra:{'stream':STREAM.INTERNATIONAL, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://gnebangla.in/category/technology/feed', extra:{'stream':STREAM.TECHNOLOGY, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://gnebangla.in/category/sports-news/feed', extra:{'stream':STREAM.SPORTS, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://gnebangla.in/category/entertainment/feed', extra:{'stream':STREAM.ENTERTAINMENT, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://gnebangla.in/category/viral-news/feed', extra:{'stream':STREAM.VIRAL, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://gnebangla.in/category/lifestyle-news/feed', extra:{'stream':STREAM.LIFESTYLE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://gnebangla.in/feed', extra:{'stream':STREAM.OTHER, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},

    // KolkataTimes 24 
    {url:'https://kolkatatimes24.com/category/kolkata/feed', extra:{'stream':STREAM.FIRST_PAGE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://kolkatatimes24.com/category/politics/feed', extra:{'stream':STREAM.POLITICS, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://kolkatatimes24.com/category/west-bengal/feed', extra:{'stream':STREAM.STATE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://kolkatatimes24.com/category/technology/feed', extra:{'stream':STREAM.FIRST_PAGE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://kolkatatimes24.com/category/business-and-economy/feed', extra:{'stream':STREAM.BUSINESS, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://kolkatatimes24.com/category/national/feed', extra:{'stream':STREAM.COUNTRY, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://kolkatatimes24.com/category/world/feed', extra:{'stream':STREAM.INTERNATIONAL, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://kolkatatimes24.com/category/sports/feed', extra:{'stream':STREAM.SPORTS, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://kolkatatimes24.com/category/offbeat/feed', extra:{'stream':STREAM.OFF_BEAT, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://kolkatatimes24.com/category/offbeat/fedd', extra:{'stream':STREAM.OFF_BEAT, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://kolkatatimes24.com/category/lifestyle/feed', extra:{'stream':STREAM.LIFESTYLE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://kolkatatimes24.com/feed/', extra:{'stream':STREAM.FIRST_PAGE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},

    // Bharat barta
    {url:'https://www.bharatbarta.com/category/entertainment/feed/', extra:{'stream':STREAM.ENTERTAINMENT, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.bharatbarta.com/category/news/international/feed', extra:{'stream':STREAM.INTERNATIONAL, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.bharatbarta.com/category/news/kolkata/feed', extra:{'stream':STREAM.FIRST_PAGE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.bharatbarta.com/category/news/national/feed', extra:{'stream':STREAM.COUNTRY, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.bharatbarta.com/category/news/politics-news/feed', extra:{'stream':STREAM.POLITICS, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.bharatbarta.com/category/news/state/feed', extra:{'stream':STREAM.STATE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.bharatbarta.com/category/lifestyle/feed', extra:{'stream':STREAM.LIFESTYLE, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.bharatbarta.com/category/technology/feed', extra:{'stream':STREAM.TECHNOLOGY, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.bharatbarta.com/category/sports/feed', extra:{'stream':STREAM.SPORTS, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.bharatbarta.com/category/vairal/feed', extra:{'stream':STREAM.VIRAL, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.bharatbarta.com/category/bb-special/feed', extra:{'stream':STREAM.OFF_BEAT, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    {url:'https://www.bharatbarta.com/feed/', extra:{'stream':STREAM.LATEST, 'lang':LANG.BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        
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
    Analytics.launch("crawler_rss");
    // await updateprofile()
    cron.schedule('*/30 * * * *', () => {
        console.log(`${Date.now()} Running a task every 30 minutes`);
        startCrawl()
    });
    // run now too.
    startCrawl(); 
}





