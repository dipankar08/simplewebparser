
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type, RootConfig } from "../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "./CONST";

export class OneIndiaBengaliConfig extends BaseConfig {
    constructor() { super("");}

    getLang(): LANG {
        return LANG.BENGALI
    }
    
    getRootConfig():RootConfig{
        return {
            ignoreUrlRegex:['/videos/'],
            defaultImg:'https://hindi.oneindia.com/images/hindi-oneindia-logo.svg'
        }
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title', selector: 'article h1', type: Type.TEXT },
        { name: 'details', selector: 'article .oi-article-lt > p', type: Type.TEXT },
        { name: 'img', selector: 'article figure  img', type: Type.IMAGE },
      ]
    }

    getTestPageUrl(): String {
        return "https://bengali.oneindia.com/news/west-bengal/bjp-councillor-of-garulia-chandrabhan-singh-joins-tmc-in-presence-of-jyotipriya-mallick-061638.html"
    }

    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.FIRST_PAGE, selector:'article .article-img a',url:'https://bengali.oneindia.com/news/kolkata/'},
            {stream: STREAM.COUNTRY, selector:'article .article-img a',url:'https://bengali.oneindia.com/news/india/'},
            {stream: STREAM.FIRST_PAGE, selector:'article .article-img a',url:'https://bengali.oneindia.com/news/kolkata/'},
            {stream: STREAM.STATE, selector:'article .article-img a',url:'https://bengali.oneindia.com/news/west-bengal/'},
            {stream: STREAM.INTERNATIONAL, selector:'article .article-img a',url:'https://bengali.oneindia.com/news/international/'},
            {stream: STREAM.ENTERTAINMENT, selector:'article .article-img a',url:'https://bengali.oneindia.com/news/movies/'},
        ]
    }
}


export class OneIndiaEnglishConfig extends BaseConfig {
    constructor() { super("");}

    getLang(): LANG {
        return LANG.ENGLISH
    }
    getRootConfig():RootConfig{
        return {
            ignoreUrlRegex:['/videos/'],
            defaultImg:'https://hindi.oneindia.com/images/hindi-oneindia-logo.svg'
        }
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title', selector: 'article h1', type: Type.TEXT },
        { name: 'details', selector: 'article .oi-article-lt > p', type: Type.TEXT },
        { name: 'img', selector: 'article figure  img', type: Type.IMAGE, attr:"data-pagespeed-lazy-src"},
      ]
    }

    getTestPageUrl(): String {
        return "https://www.oneindia.com/india/ayodhya-case-how-ram-lalla-became-a-party-in-the-court-2962848.html"
    }

    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.FIRST_PAGE, selector:'#containerMain .main-block a',url:'https://www.oneindia.com/', limit:30},
            {stream: STREAM.COUNTRY, selector:'article .article-img a',url:'https://www.oneindia.com/india/'},
            {stream: STREAM.INTERNATIONAL, selector:'article .article-img a',url:'https://www.oneindia.com/international/'},
            {stream: STREAM.BUSINESS, selector:'article .article-img a',url:'https://www.oneindia.com/business/'},
        ]
    }
}


export class OneIndiaHindiConfig extends BaseConfig {
    constructor() { super("");}

    getLang(): LANG {
        return LANG.HINDI
    }

    getRootConfig():RootConfig{
        return {
            ignoreUrlRegex:['/videos/'],
            defaultImg:'https://hindi.oneindia.com/images/hindi-oneindia-logo.svg'
        }
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title', selector: 'article h1', type: Type.TEXT },
        { name: 'details', selector: 'article .oi-article-lt > p', type: Type.TEXT },
        { name: 'img', selector: 'article figure  img', type: Type.IMAGE, attr:"data-pagespeed-lazy-src" },
      ]
    }

    getTestPageUrl(): String {
        return "https://hindi.oneindia.com/news/international/australian-pm-s-office-sends-secret-document-to-journalists-528840.html"
    }

    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.FIRST_PAGE, selector:'#containerMain .newsBlock a',url:'https://hindi.oneindia.com/',limit:30},
            {stream: STREAM.COUNTRY, selector:'article .article-img a',url:'https://hindi.oneindia.com/news/india/'},
            {stream: STREAM.INTERNATIONAL, selector:'article .article-img a',url:'https://hindi.oneindia.com/news/international/'},
            // THIS WENSITE USE MANY EXTERBAL LINK.
        ]
    }
}
