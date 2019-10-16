
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type, RootConfig } from "../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "./CONST";

export class News18BengaliConfig extends BaseConfig {
    constructor() { 
        super(""); 
    }
    getLang(): LANG {
        return LANG.BENGALI
    }
    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title', selector: '.article_box h1', type: Type.TEXT },
        { name: 'details', selector: '.article_box #article_body p', type: Type.TEXT },
        { name: 'img', selector: '.article_box .articleimg img', type: Type.IMAGE },
      ]
    }
    getRootConfig():RootConfig{
        return {
            ignoreUrlRegex: ['/photogallery/','/videos/'] // any URL contains photogallery will be ignored.
        }
    }
    getTestPageUrl(): String {
        return "https://hindi.news18.com/news/nation/kashmir-zone-police-says-encounter-underway-at-the-outskirts-of-anantnag-in-jammu-and-kashmir-2519905.html"
    }
    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.COUNTRY, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/national/'},
            {stream: STREAM.STATE, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/kolkata/'},
            {stream: STREAM.INTERNATIONAL, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/international/'},
            {stream: STREAM.TECHNOLOGY, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/technology/'},
            {stream: STREAM.ENTERTAINMENT, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/entertainment/'},
            {stream: STREAM.LIFESTYLE, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/life-style/'},
        ]
    }
}

export class News18EnglishConfig extends BaseConfig {
    constructor() { 
        super(""); 
    }
    getLang(): LANG {
        return LANG.ENGLISH
    }
    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title', selector: '.article-sbox h1', type: Type.TEXT },
        { name: 'img', selector: '.article-sbox .articleimg img', type: Type.IMAGE },
        { name: 'details', selector: '.article-sbox #article_body p', type: Type.TEXT },
      ]
    }
    getRootConfig():RootConfig{
        return {
            ignoreUrlRegex: ['/photogallery/','/videos/'] // any URL contains photogallery will be ignored.
        }
    }
    getTestPageUrl(): String {
        return "https://www.news18.com/news/tech/google-pixel-4-pixel-4-xl-to-launch-today-heres-how-to-watch-the-live-stream-2346447.html"
    }
    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.HEADLINE, selector:'.lead-story a',url:'https://www.news18.com/'},
            {stream: STREAM.FIRST_PAGE, selector:'.hotTopic a',url:'https://www.news18.com/politics/'},
            {stream: STREAM.COUNTRY, selector:'.hotTopic a',url:'https://www.news18.com/india/'},
            {stream: STREAM.INTERNATIONAL, selector:'.hotTopic a',url:'https://www.news18.com/world/'},
            {stream: STREAM.TECHNOLOGY, selector:'.hotTopic a',url:'https://www.news18.com/tech/'},
            {stream: STREAM.ENTERTAINMENT, selector:'.hotTopic a',url:'https://www.news18.com/entertainment/'},
            {stream: STREAM.LIFESTYLE, selector:'.hotTopic a', url:'https://www.news18.com/lifestyle/'},
            {stream: STREAM.BUSINESS, selector:'.hotTopic a', url:'https://www.news18.com/business/'},
            {stream: STREAM.MOVIE, selector:'.hotTopic a',url:'https://www.news18.com/movies/'},
        ]
    }
}

export class News18HindiConfig extends BaseConfig {
    constructor() { 
        super(""); 
    }
    getLang(): LANG {
        return LANG.HINDI
    }
    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title', selector: '#article h1', type: Type.TEXT },
        { name: 'details', selector: '#article .storypara', type: Type.TEXT },
        { name: 'img', selector: '#article_body .articleimg img', type: Type.IMAGE },
      ]
    }
    getRootConfig():RootConfig{
        return {
            ignoreUrlRegex: ['/photogallery/','/videos/'] // any URL contains photogallery will be ignored.
        }
    }
    getTestPageUrl(): String {
        return "https://hindi.news18.com/news/nation/kashmir-zone-police-says-encounter-underway-at-the-outskirts-of-anantnag-in-jammu-and-kashmir-2519905.html"
    }
    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.FIRST_PAGE, selector:'.topnews a',url:'https://hindi.news18.com/'},
            {stream: STREAM.COUNTRY, selector:'.hotTopic a',url:'https://hindi.news18.com/news/nation/'},
            {stream: STREAM.INTERNATIONAL, selector:'.hotTopic a',url:'https://hindi.news18.com/news/world/'},
            {stream: STREAM.TECHNOLOGY, selector:'.hotTopic a',url:'https://hindi.news18.com/news/tech/'},
            {stream: STREAM.ENTERTAINMENT, selector:'.hotTopic a',url:'https://hindi.news18.com/news/entertainment/'},
            {stream: STREAM.LIFESTYLE, selector:'.hotTopic a', url:'https://hindi.news18.com/news/lifestyle/'},
            {stream: STREAM.BUSINESS, selector:'.hotTopic a', url:'https://hindi.news18.com/news/business/'},
            {stream: STREAM.MOVIE, selector:'.hotTopic a',url:'https://hindi.news18.com/news/entertainment/film-review/'},
            {stream: STREAM.SPORTS, selector:'.hotTopic a',url:'https://hindi.news18.com/news/sports/cricket/'},
        ]
    }
}
