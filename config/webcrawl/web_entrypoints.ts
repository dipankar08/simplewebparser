import { BaseWebReader, WordPressWebReader, ArticleWebReader, News18WebReader, OneIndiaWebReader } from "./web_reader";
import { LANG, STREAM, CATEGORIES } from "../CONST";
import {WebCrawler} from "./web_crawl"
import { Analytics } from "../../analytics";
import { getHostNameFromUrl, updateProfileToDb } from "../utils/db_helper";
import _ = require("lodash");
import { WebElementParseConfig, WebElementType } from "./network";
import { WordPressRssReader } from "../rss/rss_reader";
const cron = require('node-cron');
export type WebLink ={
    url:string,
    stream:STREAM,
    selector?:string
}

export type WebEntryPoint = {
    name:string,                // name of the paper
    is_active:boolean,          // do we want to show the full news.
    type:BaseWebReader,         // type
    lang: LANG;                 // define language
    profile_img?:string,        // profile images
    is_partner?:string,         // indicate do we have a partnership.
    links:Array<WebLink>        // parsing links.
    storyParseConfig?:Array<WebElementParseConfig> // this will override the parent config in WebReader.
}

export var urlList:Array<WebEntryPoint> = [

    {
        name:'OneIndia Bengali',
        type:new OneIndiaWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        links:[
            {stream: STREAM.FIRST_PAGE, url:'https://bengali.oneindia.com/news/kolkata/'},
            {stream: STREAM.COUNTRY, url:'https://bengali.oneindia.com/news/india/'},
            {stream: STREAM.FIRST_PAGE, url:'https://bengali.oneindia.com/news/kolkata/'},
            {stream: STREAM.STATE, url:'https://bengali.oneindia.com/news/west-bengal/'},
            {stream: STREAM.INTERNATIONAL, url:'https://bengali.oneindia.com/news/international/'},
            {stream: STREAM.ENTERTAINMENT, url:'https://bengali.oneindia.com/news/movies/'},
        ]
    },

    {
        name:'OneIndia English',
        type:new OneIndiaWebReader(),
        lang:LANG.IN_ENGLISH,
        is_active:true,
        links:[
            {stream: STREAM.FIRST_PAGE, selector:'#containerMain .main-block a',url:'https://www.oneindia.com/'},
            {stream: STREAM.COUNTRY, url:'https://www.oneindia.com/india/'},
            {stream: STREAM.INTERNATIONAL, url:'https://www.oneindia.com/international/'},
            {stream: STREAM.BUSINESS, url:'https://www.oneindia.com/business/'},
        ]
    },
    {
        name:'OneIndia Hindi',
        type:new OneIndiaWebReader(),
        lang:LANG.IN_HINDI,
        is_active:true,
        links:[
            {stream: STREAM.FIRST_PAGE, selector:'#containerMain .newsBlock a',url:'https://hindi.oneindia.com/'},
            {stream: STREAM.COUNTRY, url:'https://hindi.oneindia.com/news/india/'},
            {stream: STREAM.INTERNATIONAL, url:'https://hindi.oneindia.com/news/international/'},
        ]
    },



    {
        name:'News18 Bengali',
        type:new News18WebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        links:[
            {stream: STREAM.COUNTRY, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/national/'},
            {stream: STREAM.STATE, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/kolkata/'},
            {stream: STREAM.INTERNATIONAL, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/international/'},
            {stream: STREAM.TECHNOLOGY, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/technology/'},
            {stream: STREAM.ENTERTAINMENT, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/entertainment/'},
            {stream: STREAM.LIFESTYLE, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/life-style/'},
        ]
    },

    {
        name:'News18 English',
        type:new News18WebReader(),
        lang:LANG.IN_ENGLISH,
        is_active:true,
        links:[
            {stream: STREAM.HEADLINE, selector:'.lead-story a',url:'https://www.news18.com/'},
            {stream: STREAM.FIRST_PAGE, selector:'.hotTopic a',url:'https://www.news18.com/politics/'},
            {stream: STREAM.COUNTRY, selector:'.hotTopic a',url:'https://www.news18.com/india/'},
            {stream: STREAM.INTERNATIONAL, selector:'.hotTopic a',url:'https://www.news18.com/world/'},
            {stream: STREAM.TECHNOLOGY, selector:'.hotTopic a',url:'https://www.news18.com/tech/'},
            {stream: STREAM.ENTERTAINMENT, selector:'.hotTopic a',url:'https://www.news18.com/entertainment/'},
            {stream: STREAM.LIFESTYLE, selector:'.hotTopic a', url:'https://www.news18.com/lifestyle/'},
            {stream: STREAM.BUSINESS, selector:'.hotTopic a', url:'https://www.news18.com/business/'},
            {stream: STREAM.MOVIE, selector:'.hotTopic a',url:'https://www.news18.com/movies/'},
        ],
        storyParseConfig:[
            { name: 'title', selector: '.article-sbox h1', type: WebElementType.TEXT },
            { name: 'img', selector: '.article-sbox .articleimg img', type: WebElementType.IMAGE },
            { name: 'details', selector: '.article-sbox #article_body p', type: WebElementType.TEXT },
        ]
    },

    {
        name:'News18 Hindi',
        type:new News18WebReader(),
        lang:LANG.IN_HINDI,
        is_active:true,
        links:[
            {stream: STREAM.FIRST_PAGE, selector:'.topnews a',url:'https://hindi.news18.com/'},
            {stream: STREAM.COUNTRY, selector:'.hotTopic a',url:'https://hindi.news18.com/news/nation/'},
            {stream: STREAM.INTERNATIONAL, selector:'.hotTopic a',url:'https://hindi.news18.com/news/world/'},
            {stream: STREAM.TECHNOLOGY, selector:'.hotTopic a',url:'https://hindi.news18.com/news/tech/'},
            {stream: STREAM.ENTERTAINMENT, selector:'.hotTopic a',url:'https://hindi.news18.com/news/entertainment/'},
            {stream: STREAM.LIFESTYLE, selector:'.hotTopic a', url:'https://hindi.news18.com/news/lifestyle/'},
            {stream: STREAM.BUSINESS, selector:'.hotTopic a', url:'https://hindi.news18.com/news/business/'},
            {stream: STREAM.MOVIE, selector:'.hotTopic a',url:'https://hindi.news18.com/news/entertainment/film-review/'},
            {stream: STREAM.SPORTS, selector:'.hotTopic a',url:'https://hindi.news18.com/news/sports/cricket/'},
        ],
        storyParseConfig:[
            { name: 'title', selector: '#article h1', type: WebElementType.TEXT },
            { name: 'details', selector: '#article .storypara', type: WebElementType.TEXT },
            { name: 'img', selector: '#article_body .articleimg img', type: WebElementType.IMAGE },
        ]
    },

    {
        name:'Nilkontho',
        type:new ArticleWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        links:[
            {stream: STREAM.FIRST_PAGE,url:'https://www.nilkantho.in/category/news/kolkata/'},
            {stream: STREAM.STATE,url:'https://www.nilkantho.in/category/news/state/'},
            {stream: STREAM.COUNTRY,url:'https://www.nilkantho.in/category/news/national/'},
            {stream: STREAM.INTERNATIONAL,url:'https://www.nilkantho.in/category/news/world/'},
            {stream: STREAM.ENTERTAINMENT,url:'https://www.nilkantho.in/category/news/entertainment/'},

            {stream: STREAM.SPORTS,url:'https://www.nilkantho.in/category/news/sports/'},
            {stream: STREAM.BUSINESS,url:'https://www.nilkantho.in/category/news/business/'},
            {stream: STREAM.SCIENCE,url:'https://www.nilkantho.in/category/news/scitech/'},
            
            {stream: STREAM.LIFESTYLE,url:'https://www.nilkantho.in/category/lifestyle/'},
            {stream: STREAM.LIFESTYLE,url:'https://www.nilkantho.in/category/health'},
        ]
    },

    // Wordpress here..
    {
        name:'Darkari Tips',
        type:new WordPressWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        links:[
            {stream:STREAM.HEADLINE, url:'https://www.darkaritips.com/headline/'},
            {stream:STREAM.HEALTH, url:'https://www.darkaritips.com/category/health-message/'},
            {stream:STREAM.LIFESTYLE, url:'https://www.darkaritips.com/category/lifestyle/'},
        ]
    },
    {
        name:'GNE Bangla',
        type:new WordPressWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        links:[
            {stream:STREAM.VIRAL, url:'https://gnebangla.in/category/viral-news/'},
            {stream:STREAM.STATE, url:'https://gnebangla.in/category/local-news/'},
            {stream:STREAM.STATE, url:'https://gnebangla.in/category/west-bengal/'},
            {stream:STREAM.NATIONAL, url:'https://gnebangla.in/category/national-news/'},
            {stream:STREAM.INTERNATIONAL, url:'https://gnebangla.in/category/international/'},
            {stream:STREAM.TECHNOLOGY, url:'https://gnebangla.in/category/technology/'},
            {stream:STREAM.SPORTS, url:'https://gnebangla.in/category/sports-news/'},
            {stream:STREAM.ENTERTAINMENT, url:'https://gnebangla.in/category/entertainment/'},
        ]
    },
    {
        name:'Kolkata 24X7',
        type:new WordPressWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        links:[
            {stream: STREAM.HEADLINE, url:'https://www.kolkata24x7.com/'},
            {stream: STREAM.FIRST_PAGE, url:'https://www.kolkata24x7.com/'},
            {stream: STREAM.STATE, url:'https://www.kolkata24x7.com/category/kolkata/'},
            {stream: STREAM.NATIONAL, url:'https://www.kolkata24x7.com/category/national-news/'},
            {stream: STREAM.STATE, url:'https://www.kolkata24x7.com/category/west-bengal/'},
            {stream: STREAM.INTERNATIONAL, url:'https://www.kolkata24x7.com/category/international-news/'},
            {stream: STREAM.TECHNOLOGY, url:'https://www.kolkata24x7.com/category/tech-news/'},
        ]
    },
    {
        name:'Aaj Bangla',
        type:new WordPressWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        links:[
            {stream: STREAM.COUNTRY, url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%a6%e0%a7%87%e0%a6%b6/'},
            {stream: STREAM.HEADLINE, url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%95%e0%a6%b2%e0%a6%95%e0%a6%be%e0%a6%a4%e0%a6%be/'},
            {stream: STREAM.STATE, url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%b0%e0%a6%be%e0%a6%9c%e0%a7%8d%e0%a6%af/'},
            {stream: STREAM.INTERNATIONAL, url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%8d%e0%a6%ac/'},
            {stream: STREAM.BANGLADESH, url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%be%e0%a6%82%e0%a6%b2%e0%a6%be%e0%a6%a6%e0%a7%87%e0%a6%b6/'},
            {stream: STREAM.SPORTS, url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%96%e0%a7%87%e0%a6%b2%e0%a6%be/'},
            {stream: STREAM.ENTERTAINMENT, url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%bf%e0%a6%a8%e0%a7%8b%e0%a6%a6%e0%a6%a8/'},
            {stream: STREAM.HOROSCOPE, url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c%e0%a6%95%e0%a7%87%e0%a6%b0-%e0%a6%a6%e0%a6%bf%e0%a6%a8/'},
            {stream: STREAM.LIFESTYLE, url:'https://www.aajbangla.in/category/%e0%a6%b2%e0%a6%be%e0%a6%87%e0%a6%ab%e0%a6%b8%e0%a7%8d%e0%a6%9f%e0%a6%be%e0%a6%87%e0%a6%b2/'},
            {stream: STREAM.TOUR, url:'https://www.aajbangla.in/category/%e0%a6%ad%e0%a7%8d%e0%a6%b0%e0%a6%ae%e0%a6%a3/'},
        ]
    },
    {
        name:'Totka 24X7',
        type:new WordPressWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        links:[
            {stream:STREAM.LIFESTYLE, url:'https://www.totka24x7.com/archives/category/lifestyle'},
            {stream:STREAM.BUSINESS, url:'https://www.totka24x7.com/archives/category/earn-money'},
            {stream:STREAM.VIRAL, url:'https://www.totka24x7.com/archives/category/viral'},
            {stream:STREAM.ENTERTAINMENT, url:'https://www.totka24x7.com/archives/category/entertainment'},
            {stream:STREAM.INTERNATIONAL, url:'https://www.totka24x7.com/archives/category/international'},
            {stream:STREAM.TECHNOLOGY, url:'https://www.totka24x7.com/archives/category/technology'},
            {stream:STREAM.HEADLINE, url:'https://www.totka24x7.com/archives/category/headlines'},
            {stream:STREAM.ASTROLOGY, url:'https://www.totka24x7.com/archives/category/astrology'},
            {stream:STREAM.OFF_BEAT, url:'https://www.totka24x7.com/archives/category/different-news'},
        ]
    },

    {
        name:'Bharat Barta',
        type:new WordPressWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        links:[
            {stream:STREAM.VIRAL, url:'https://www.bharatbarta.com/category/vairal/'},
            {stream:STREAM.ENTERTAINMENT, url:'https://www.bharatbarta.com/category/entertainment/'},
            {stream:STREAM.FIRST_PAGE, url:'https://www.bharatbarta.com/category/news/'},
            {stream:STREAM.POLITICS, url:'https://www.bharatbarta.com/category/politics-news/'},
            {stream:STREAM.LIFESTYLE, url:'https://www.bharatbarta.com/category/lifestyle/'},
            {stream:STREAM.TECHNOLOGY, url:'https://www.bharatbarta.com/category/technology/'},
            {stream:STREAM.SPORTS, url:'https://www.bharatbarta.com/category/sports/'},
            {stream:STREAM.OFF_BEAT, url:'https://www.bharatbarta.com/category/bb-special/'},
        ]
    },

    {
        name:'Banglar Pran',
        type:new WordPressWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        links:[
            {stream:STREAM.BANGLADESH, url:'https://www.banglarpran.com/archives/category/dooars'},
            {stream:STREAM.STATE, url:'https://www.banglarpran.com/archives/category/state'},
            {stream:STREAM.POLITICS, url:'https://www.banglarpran.com/archives/category/politics'},
            {stream:STREAM.COUNTRY, url:'https://www.banglarpran.com/archives/category/india'},
            {stream:STREAM.INTERNATIONAL, url:'https://www.banglarpran.com/archives/category/internation'},
            {stream:STREAM.ENTERTAINMENT, url:'https://www.banglarpran.com/archives/category/entertrainment'},
            {stream:STREAM.LIFESTYLE, url:'https://www.banglarpran.com/archives/category/lifestyle'},
        ]
    },
]

async function updateProfile(list:WebEntryPoint[]){
    await updateProfileToDb(list.map(x=>{
        return{
            title:x.name,
            lang:LANG[x.lang],
            hostname:getHostNameFromUrl(x.links[0].url),
            img:x.profile_img,
            streams:_.uniq(x.links.map(y=>STREAM[y.stream])),
            count_followers:0,
            is_active:x.is_active?"1":"0"
        }
    }))
}

async function startCrawl(){
    let c = new WebCrawler();
    await updateProfile(urlList);
    await c.crawl(urlList, true/*if this */);
}
// function. 
export async function webCronJob(){
    Analytics.launch("crawler_web");
    // await updateprofile()
    cron.schedule('*/30 * * * *', () => {
        console.log(`${Date.now()} Running a task every 30 minutes`);
        startCrawl()
    });
    // run now too.
    startCrawl(); 
}





