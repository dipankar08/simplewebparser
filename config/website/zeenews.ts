
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type, RootConfig } from "../../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "../CONST";

export class ZeeNewsBengaliConfig extends BaseConfig {
    constructor() { 
        super(""); 
    }
    getLang(): LANG {
        return LANG.IN_BENGALI
    }
    getRootConfig():RootConfig{
        return {
            ignoreUrlRegex:['/video/'],
            defaultImg:'https://english.cdn.zeenews.com/images/logo/zeenewslogo_nav.png',
            title:"Zee News",
        }
    }
    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title', selector: '.content h1', type: Type.TEXT },
        { name: 'img', selector: '.article-image-block img', type: Type.IMAGE },
        { name: 'details', selector: '.content .article', type: Type.TEXT },
      ]
    }
    getTestPageUrl(): String {
        return "https://zeenews.india.com/bengali/kolkata/bjp-protest-against-state-government-over-nabanna-abhijan_277198.html"
    }

    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.COUNTRY, selector:'.maincontent .section-article > a',url:'https://zeenews.india.com/bengali/nation'},
            {stream: STREAM.STATE, selector:'.maincontent .section-article > a',url:'https://zeenews.india.com/bengali/state'},
            {stream: STREAM.INTERNATIONAL, selector:'.maincontent .section-article > a',url:'https://zeenews.india.com/bengali/world'},
            {stream: STREAM.ENTERTAINMENT, selector:'.maincontent .section-article > a',url:'https://zeenews.india.com/bengali/entertainment'},
            {stream: STREAM.LIFESTYLE, selector:'.maincontent .section-article > a',url:'https://zeenews.india.com/bengali/lifestyle'},
        ]
    }
}

export class ZeeNewsEnglishConfig extends BaseConfig {
    constructor() { 
        super(""); 
    }
    getLang(): LANG {
        return LANG.IN_ENGLISH
    }
    getRootConfig():RootConfig{
        return {
            ignoreUrlRegex:['/video/'],
            defaultImg:'https://english.cdn.zeenews.com/images/logo/zeenewslogo_nav.png',
            title:"Zee News",
        }
    }
    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title', selector: '.content h1', type: Type.TEXT },
        { name: 'img', selector: '.article-image-block img', type: Type.IMAGE },
        { name: 'details', selector: '.content .article', type: Type.TEXT },
      ]
    }
    getTestPageUrl(): String {
        return "https://zeenews.india.com/india/enough-is-enough-ayodhya-case-hearing-to-conclude-by-5-pm-says-cji-ranjan-gogoi-2240424.html"
    }

    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.HEADLINE, selector:'.lead-block a',url:'https://zeenews.india.com/'},

            {stream: STREAM.ENTERTAINMENT, selector:'.four-col-block  a',url:'https://zeenews.india.com/entertainment'},
            {stream: STREAM.LIFESTYLE, selector:'.four-col-block  a',url:'https://zeenews.india.com/lifestyle'},
            {stream: STREAM.BUSINESS, selector:'.four-col-block  a',url:'https://zeenews.india.com/business'},
            {stream: STREAM.SCIENCE, selector:'.four-col-block  a',url:'https://zeenews.india.com/science-environment'},
            {stream: STREAM.TECHNOLOGY, selector:'.four-col-block  a',url:'https://zeenews.india.com/technology'},

            {stream: STREAM.COUNTRY, selector:'.four-col-block  a',url:'https://zeenews.india.com/india'},
            {stream: STREAM.INTERNATIONAL, selector:'.maincontent a',url:'https://zeenews.india.com/World'},
            {stream: STREAM.FIRST_PAGE, selector:'.four-col-block  a',url:'https://zeenews.india.com/state'},
            
        ]
    }
}

export class ZeeNewsHindiConfig extends BaseConfig {
    constructor() { 
        super(""); 
    }
    getLang(): LANG {
        return LANG.IN_HINDI
    }
    getRootConfig():RootConfig{
        return {
            ignoreUrlRegex:['/video/'],
            defaultImg:'https://english.cdn.zeenews.com/images/logo/zeenewslogo_nav.png',
            title:"Zee News",
        }
    }
    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title', selector: '.content h1', type: Type.TEXT },
        { name: 'img', selector: '.article-image-block img', type: Type.IMAGE },
        { name: 'details', selector: '.content .article', type: Type.TEXT },
      ]
    }
    getTestPageUrl(): String {
        return "https://zeenews.india.com/hindi/india/up-uttarakhand/ayodhya-case-hearing-40th-day-live-proceedings/585506"
    }

    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.HEADLINE, selector:'.lead-block a',url:'https://zeenews.india.com/hindi'},

            {stream: STREAM.COUNTRY, selector:'.maincontent a',url:'https://zeenews.india.com/hindi/india'},
            {stream: STREAM.INTERNATIONAL, selector:'.maincontent a',url:'https://zeenews.india.com/hindi/world'},
            {stream: STREAM.FIRST_PAGE, selector:'.maincontent a',url:'https://zeenews.india.com/hindi/india/states'},

            {stream: STREAM.SPORTS, selector:'.maincontent a',url:'https://zeenews.india.com/hindi/sports'},
            {stream: STREAM.BUSINESS, selector:'.maincontent a',url:'https://zeenews.india.com/hindi/business'},
            {stream: STREAM.MOVIE, selector:'.maincontent a',url:'https://zeenews.india.com/hindi/bollywood'},
            {stream: STREAM.SCIENCE, selector:'.maincontent a',url:'https://zeenews.india.com/hindi/science'},
            {stream: STREAM.TECHNOLOGY, selector:'.maincontent a',url:'https://zeenews.india.com/hindi/technology'},
        ]
    }
}
