
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type } from "../crawler";
import { LANG, STREAM, ListConfig } from "./CONST";

export class PratidinConfig extends BaseConfig {
    constructor() { 
        super("Pratidin"); 
    }

    getLang(): LANG {
        return LANG.BENGALI
    }

    getLimit():number{
        return 10
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title', selector: '.container .hot_news h1', type: Type.TEXT },
        { name: 'details', selector: '.container .news_content_area > p', type: Type.TEXT },
        { name: 'img', selector: '.container img.hot_news_image', type: Type.IMAGE },
      ]
    }

    getTestPageUrl(): String {
        return "https://www.sangbadpratidin.in/world/pakistan-turns-aggressive-constructs-airfield-in-pok/"
    }

    getListConfig(stream: STREAM): ListConfig{
        switch(stream){
            case STREAM.HEADLINE: return {
                'url':null,
                'selectors':[]
            }
            case STREAM.FIRST_PAGE:return {
                'url':'https://www.sangbadpratidin.in/latest-update/',
                'selectors':['ul.more_news_list li > a']
            }
            case STREAM.COUNTRY:return {
                'url':null,
                'selectors':[]
            }
            case STREAM.STATE:return {
                'url':null,
                'selectors':[]
            }
            case STREAM.INTERNATIONAL:return {
                'url':null,
                'selectors':[]
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
                'url':null,
                'selectors':[]
            }
            case STREAM.LIFESTYLE:return {
                'url':null,
                'selectors':[]
            }
        }
    } 
}
