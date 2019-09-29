
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type, RootConfig } from "../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "./CONST";

export class News18Config extends BaseConfig {
    constructor() { 
        super("News18Bangla"); 
    }

    getLang(): LANG {
        return LANG.BENGALI
    }

    getLimit():number{
        return 5;
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
        return "https://bengali.news18.com/news/kolkata/biman-basu-on-police-lathicharge-on-left-protesters-dc-368264.html"
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
