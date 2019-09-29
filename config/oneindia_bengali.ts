
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type } from "../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "./CONST";

export class OneIndiaBengaliConfig extends BaseConfig {
    constructor() { 
        super("anandabazar"); 
    }

    getLang(): LANG {
        return LANG.BENGALI
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
