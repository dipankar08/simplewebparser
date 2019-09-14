
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type } from "../crawler";
import { LANG, STREAM, ListConfig } from "./CONST";

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

    getListConfig(stream: STREAM): ListConfig{
        switch(stream){
            case STREAM.HEADLINE: return {
                'url':null,
                'selectors':[]
            }
            case STREAM.FIRST_PAGE:return {
                'url':'https://bengali.oneindia.com/news/kolkata/',
                'selectors':['article .article-img a']
            }
            case STREAM.COUNTRY:return {
                'url':'https://bengali.oneindia.com/news/india/',
                'selectors':['article .article-img a']
            }
            case STREAM.STATE:return {
                'url':'https://bengali.oneindia.com/news/west-bengal/',
                'selectors':['article .article-img a']
            }
            case STREAM.INTERNATIONAL:return {
                'url':'https://bengali.oneindia.com/news/international/',
                'selectors':['article .article-img a']
            }
            case STREAM.BUSINESS:return {
                'url':null,
                'selectors':[]
            }
            case STREAM.SCIENCE:return {
                'url':null,
                'selectors':[]
            }
            case STREAM.ENTERTAINMENT:return {
                'url':null,
                'selectors':[]
            }
            case STREAM.MOVIE:return {
                'url':'https://bengali.oneindia.com/movies/',
                'selectors':['article .article-img a']
            }
            case STREAM.LIFESTYLE:return {
                'url':null,
                'selectors':[]
            }
        }
    } 
}
