import { WEB_TYPE } from "./web_reader";
import { LANG, STREAM, CATEGORIES } from "../CONST";
import {WebCrawler} from "./web_crawl"
import { Analytics } from "../../analytics";
const cron = require('node-cron');
export type WebEntryPoint = {
    url:string,
    type:WEB_TYPE,
    extra: any; // LANG and STREAM
}

export var urlList:Array<WebEntryPoint> = [
   
/* 
    // TimesNews
    {url:'http://eisamay.indiatimes.com/city/rssfeedsection/15819618.cms', extra:{'stream':STREAM.KOLKATA, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'http://eisamay.indiatimes.com/state/rssfeedsection/15819609.cms', extra:{'stream':STREAM.STATE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'http://eisamay.indiatimes.com/nation/rssfeedsection/15819599.cms', extra:{'stream':STREAM.COUNTRY, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'http://eisamay.indiatimes.com/international/rssfeedsection/15819594.cms', extra:{'stream':STREAM.INTERNATIONAL, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'http://eisamay.indiatimes.com/sports/rssfeedsection/23000116.cms', extra:{'stream':STREAM.SPORTS, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'http://eisamay.indiatimes.com/business/rssfeedsection/15819574.cms', extra:{'stream':STREAM.BUSINESS, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'http://eisamay.indiatimes.com/entertainment/rssfeedsection/15819570.cms', extra:{'stream':STREAM.ENTERTAINMENT, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'http://eisamay.indiatimes.com/lifestyle/rssfeedsection/15992436.cms', extra:{'stream':STREAM.LIFESTYLE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},

    // OneIndia
    {url:'https://IN_BENGALI.oneindia.com/rss/astrology-fb.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://IN_BENGALI.oneindia.com/rss/business-fb.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://IN_BENGALI.oneindia.com/rss/cricket-fb.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://IN_BENGALI.oneindia.com/rss/jokes-fb.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://IN_BENGALI.oneindia.com/rss/kolkata-fb.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://IN_BENGALI.oneindia.com/rss/movies-fb.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://IN_BENGALI.oneindia.com/rss/news-fb.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://IN_BENGALI.oneindia.com/rss/travel-fb.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://IN_BENGALI.oneindia.com/rss/west-bengal-news-fb.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},

    // Zee News
    {url:'http://zeenews.india.com/IN_BENGALI/rssfeed/nation.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'http://zeenews.india.com/IN_BENGALI/rssfeed/world.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'http://zeenews.india.com/IN_BENGALI/rssfeed/kolkata.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'http://zeenews.india.com/IN_BENGALI/rssfeed/zila.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'http://zeenews.india.com/IN_BENGALI/rssfeed/sports.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'http://zeenews.india.com/IN_BENGALI/rssfeed/entertainment.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'http://zeenews.india.com/IN_BENGALI/health.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'http://zeenews.india.com/IN_BENGALI/lifestyle.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},


    // News18
    {url:'https://www.IN_BENGALI.news18.com/rss/national.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.IN_BENGALI.news18.com/rss/international.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.IN_BENGALI.news18.com/rss/sports.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.IN_BENGALI.news18.com/rss/entertainment.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.IN_BENGALI.news18.com/rss/life-style.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.IN_BENGALI.news18.com/rss/business.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.IN_BENGALI.news18.com/rss/technology.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.IN_BENGALI.news18.com/rss/south-bengal.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.IN_BENGALI.news18.com/rss/north-bengal.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.IN_BENGALI.news18.com/rss/kolkata.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},



    // ABP
    {url:'https://abpananda.abplive.in/home', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://abpananda.abplive.in/kolkata-news', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://abpananda.abplive.in/india-news', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://abpananda.abplive.in/world-news', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://abpananda.abplive.in/sports', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://abpananda.abplive.in/entertainment', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://abpananda.abplive.in/aaj-focus-e', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},


    // AajBangla
    {url:'https://www.aajbangla.in/category/aajkolkata', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%b0%e0%a6%be%e0%a6%9c%e0%a7%8d%e0%a6%af', extra:{'stream':STREAM.STATE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%a6%e0%a7%87%e0%a6%b6', extra:{'stream':STREAM.COUNTRY, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%a4%e0%a7%8d%e0%a6%b0%e0%a6%bf%e0%a6%aa%e0%a7%81%e0%a6%b0%e0%a6%be', extra:{'stream':STREAM.TRIPURA, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%8d%e0%a6%ac-aaj-world-news', extra:{'stream':STREAM.INTERNATIONAL, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%96%e0%a7%87%e0%a6%b2%e0%a6%be', extra:{'stream':STREAM.SPORTS, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%bf%e0%a6%a8%e0%a7%8b%e0%a6%a6%e0%a6%a8', extra:{'stream':STREAM.ENTERTAINMENT, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c%e0%a6%95%e0%a7%87%e0%a6%b0-%e0%a6%a6%e0%a6%bf%e0%a6%a8', extra:{'stream':STREAM.ASTROLOGY, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%87%e0%a6%b7', extra:{'stream':STREAM.OFF_BEAT, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.aajbangla.in/category/%e0%a6%b2%e0%a6%be%e0%a6%87%e0%a6%ab%e0%a6%b8%e0%a7%8d%e0%a6%9f%e0%a6%be%e0%a6%87%e0%a6%b2/', extra:{'stream':STREAM.LIFESTYLE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.aajbangla.in/category/%e0%a6%ad%e0%a7%8d%e0%a6%b0%e0%a6%ae%e0%a6%a3/', extra:{'stream':STREAM.TOUR, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.aajbangla.in', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},

    // https://www.master24.in
    {url:'https://www.master24.in/archives/category/politics', extra:{'stream':STREAM.POLITICS, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.master24.in/archives/category/state', extra:{'stream':STREAM.STATE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.master24.in/archives/category/national', extra:{'stream':STREAM.COUNTRY, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.master24.in/archives/category/international', extra:{'stream':STREAM.INTERNATIONAL, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.master24.in/archives/category/lifestyle', extra:{'stream':STREAM.LIFESTYLE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.master24.in/archives/category/editorial', extra:{'stream':STREAM.EDITORIAL, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.master24.in/archives/category/tech-news', extra:{'stream':STREAM.TECHNOLOGY, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.master24.in/archives/category/job-and-business', extra:{'stream':STREAM.JOB, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.master24.in/archives/category/sports', extra:{'stream':STREAM.SPORTS, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.master24.in', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},


    // darkaritips
    {url:'https://www.darkaritips.com/category/pregnancy-care/', extra:{'stream':STREAM.HEALTH, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.darkaritips.com/category/health-message/', extra:{'stream':STREAM.HEALTH, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.darkaritips.com/category/lifestyle/', extra:{'stream':STREAM.LIFESTYLE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.darkaritips.com/category/recipe/', extra:{'stream':STREAM.RECIPE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.darkaritips.com/category/tech-tips/', extra:{'stream':STREAM.TECHNOLOGY, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.darkaritips.com/category/viral-news/', extra:{'stream':STREAM.VIRAL, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.darkaritips.com/category/health-nutrition/', extra:{'stream':STREAM.HEALTH, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.darkaritips.com/category/health-beauty/', extra:{'stream':STREAM.HEALTH, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.darkaritips.com/category/luck/', extra:{'stream':STREAM.LIFESTYLE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.darkaritips.com', extra:{'stream':STREAM.LIFESTYLE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
   
    // totka24x7
    {url:'https://www.totka24x7.com/archives/category/lifestyle', extra:{'stream':STREAM.LIFESTYLE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.totka24x7.com/archives/category/earn-money', extra:{'stream':STREAM.BUSINESS, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.totka24x7.com/archives/category/viral', extra:{'stream':STREAM.VIRAL, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.totka24x7.com/archives/category/entertainment', extra:{'stream':STREAM.ENTERTAINMENT, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.totka24x7.com/archives/category/technology', extra:{'stream':STREAM.TECHNOLOGY, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.totka24x7.com/archives/category/headlines', extra:{'stream':STREAM.FIRST_PAGE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.totka24x7.com/archives/category/astrology', extra:{'stream':STREAM.ASTROLOGY, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.totka24x7.com/archives/category/different-news', extra:{'stream':STREAM.OTHER, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.totka24x7.com', extra:{'stream':STREAM.OTHER, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    
    

    // Nilkontho 
    {url:'https://www.nilkantho.in/category/news/kolkata', extra:{'stream':STREAM.KOLKATA, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/news/state', extra:{'stream':STREAM.STATE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/news/national', extra:{'stream':STREAM.COUNTRY, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/news/world', extra:{'stream':STREAM.INTERNATIONAL, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/news/entertainment', extra:{'stream':STREAM.ENTERTAINMENT, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/news/sports', extra:{'stream':STREAM.SPORTS, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/news/business', extra:{'stream':STREAM.BUSINESS, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/news/scitech', extra:{'stream':STREAM.TECHNOLOGY, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/health', extra:{'stream':STREAM.HEALTH, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/lifestyle', extra:{'stream':STREAM.LIFESTYLE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/mythology', extra:{'stream':STREAM.MYTHOLOGY, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/feature', extra:{'stream':STREAM.OTHER, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/lets-go', extra:{'stream':STREAM.TOUR, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in/category/festive-mood', extra:{'stream':STREAM.FESTIVE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.nilkantho.in', extra:{'stream':STREAM.FIRST_PAGE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},


    // GNE Bangla
    {url:'https://gnebangla.in/category/local-news', extra:{'stream':STREAM.FIRST_PAGE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://gnebangla.in/category/west-bengal', extra:{'stream':STREAM.STATE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://gnebangla.in/category/national-news', extra:{'stream':STREAM.COUNTRY, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://gnebangla.in/category/international', extra:{'stream':STREAM.INTERNATIONAL, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://gnebangla.in/category/technology', extra:{'stream':STREAM.TECHNOLOGY, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://gnebangla.in/category/sports-news', extra:{'stream':STREAM.SPORTS, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://gnebangla.in/category/entertainment', extra:{'stream':STREAM.ENTERTAINMENT, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://gnebangla.in/category/viral-news', extra:{'stream':STREAM.VIRAL, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://gnebangla.in/category/lifestyle-news', extra:{'stream':STREAM.LIFESTYLE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://gnebangla.in', extra:{'stream':STREAM.OTHER, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},

    // KolkataTimes 24 
    {url:'https://kolkatatimes24.com/category/kolkata', extra:{'stream':STREAM.FIRST_PAGE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://kolkatatimes24.com/category/politics', extra:{'stream':STREAM.POLITICS, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://kolkatatimes24.com/category/west-bengal', extra:{'stream':STREAM.STATE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://kolkatatimes24.com/category/technology', extra:{'stream':STREAM.FIRST_PAGE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://kolkatatimes24.com/category/business-and-economy', extra:{'stream':STREAM.BUSINESS, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://kolkatatimes24.com/category/national', extra:{'stream':STREAM.COUNTRY, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://kolkatatimes24.com/category/world', extra:{'stream':STREAM.INTERNATIONAL, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://kolkatatimes24.com/category/sports', extra:{'stream':STREAM.SPORTS, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://kolkatatimes24.com/category/offbeat', extra:{'stream':STREAM.OFF_BEAT, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://kolkatatimes24.com/category/offbeat/fedd', extra:{'stream':STREAM.OFF_BEAT, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://kolkatatimes24.com/category/lifestyle', extra:{'stream':STREAM.LIFESTYLE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://kolkatatimes24.com/', extra:{'stream':STREAM.FIRST_PAGE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},

    // Bharat barta
    {url:'https://www.bharatbarta.com/category/entertainment/', extra:{'stream':STREAM.ENTERTAINMENT, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.bharatbarta.com/category/news/international', extra:{'stream':STREAM.INTERNATIONAL, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.bharatbarta.com/category/news/kolkata', extra:{'stream':STREAM.FIRST_PAGE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.bharatbarta.com/category/news/national', extra:{'stream':STREAM.COUNTRY, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.bharatbarta.com/category/news/politics-news', extra:{'stream':STREAM.POLITICS, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.bharatbarta.com/category/news/state', extra:{'stream':STREAM.STATE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.bharatbarta.com/category/lifestyle', extra:{'stream':STREAM.LIFESTYLE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.bharatbarta.com/category/technology', extra:{'stream':STREAM.TECHNOLOGY, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.bharatbarta.com/category/sports', extra:{'stream':STREAM.SPORTS, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.bharatbarta.com/category/vairal', extra:{'stream':STREAM.VIRAL, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.bharatbarta.com/category/bb-special', extra:{'stream':STREAM.OFF_BEAT, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    {url:'https://www.bharatbarta.com/', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:WEB_TYPE.WORD_PRESS},
    */ 
   
    // banglarpran.
    {url:'https://www.banglarpran.com/archives/category/dooars', type:WEB_TYPE.WORD_PRESS, extra:{'lang':LANG.IN_BENGALI, 'stream':STREAM.BANGLADESH}},
    {url:'https://www.banglarpran.com/archives/category/state', type:WEB_TYPE.WORD_PRESS, extra:{'lang':LANG.IN_BENGALI, 'stream':STREAM.STATE}},
    {url:'https://www.banglarpran.com/archives/category/politics', type:WEB_TYPE.WORD_PRESS, extra:{'lang':LANG.IN_BENGALI, 'stream':STREAM.POLITICS}},
    {url:'https://www.banglarpran.com/archives/category/india', type:WEB_TYPE.WORD_PRESS, extra:{'lang':LANG.IN_BENGALI, 'stream':STREAM.COUNTRY}},
    {url:'https://www.banglarpran.com/archives/category/internation', type:WEB_TYPE.WORD_PRESS, extra:{'lang':LANG.IN_BENGALI, 'stream':STREAM.INTERNATIONAL}},
    {url:'https://www.banglarpran.com/archives/category/entertrainment', type:WEB_TYPE.WORD_PRESS, extra:{'lang':LANG.IN_BENGALI, 'stream':STREAM.ENTERTAINMENT}},
    {url:'https://www.banglarpran.com/archives/category/lifestyle', type:WEB_TYPE.WORD_PRESS, extra:{'lang':LANG.IN_BENGALI, 'stream':STREAM.LIFESTYLE}},
    {url:'https://www.banglarpran.com', type:WEB_TYPE.WORD_PRESS, extra:{'lang':LANG.IN_BENGALI, 'stream':STREAM.OTHER}},

]

async function startCrawl(){
    let c = new WebCrawler();
    await c.crawl(urlList);
}
// function. 
export async function webCronJob(){
    Analytics.launch("crawler_rss");
    // await updateprofile()
    cron.schedule('*/30 * * * *', () => {
        console.log(`${Date.now()} Running a task every 30 minutes`);
        startCrawl()
    });
    // run now too.
    startCrawl(); 
}





