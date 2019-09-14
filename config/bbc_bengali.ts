
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type } from "../crawler";
import { LANG, STREAM, ListConfig } from "./CONST";

export class BbcBengaliConfig extends BaseConfig {
    constructor() { 
        super("anandabazar"); 
    }

    getLang(): LANG {
        return LANG.BENGALI
    }

    getLimit(): number{
        return 5;
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title',   selector: '.story-body h1', type: Type.TEXT },
        { name: 'details', selector: '.story-body .story-body__inner > p', type: Type.TEXT },
        { name: 'img',     selector: '.story-body figure  img', type: Type.IMAGE },
      ]
    }

    getTestPageUrl(): String {
        return "https://www.bbc.com/bengali/news-49696031"
    }

    getListConfig(stream: STREAM): ListConfig{
        switch(stream){
            case STREAM.HEADLINE: return {
                'url':null,
                'selectors':[]
            }
            case STREAM.FIRST_PAGE:return {
                'url':'https://www.bbc.com/bengali/news',
                'selectors':['.eagle .eagle-item > a']
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
