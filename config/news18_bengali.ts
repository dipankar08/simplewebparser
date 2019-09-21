
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type, RootConfig } from "../crawler";
import { LANG, STREAM, ListConfig } from "./CONST";

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

    getListConfig(stream: STREAM): ListConfig{
        switch(stream){
            case STREAM.HEADLINE: return {
                'url':null,
                'selectors':[]
            }
            case STREAM.FIRST_PAGE:return {
                'url':null,
                'selectors':[]
            }
            case STREAM.COUNTRY:return {
                'url':'https://bengali.news18.com/national/',
                'selectors':['.nwslist-withbrdr li a']
            }
            case STREAM.STATE:return {
                'url':'https://bengali.news18.com/kolkata/',
                'selectors':['.nwslist-withbrdr li a']
            }
            case STREAM.INTERNATIONAL:return {
                'url':'https://bengali.news18.com/international/',
                'selectors':['.nwslist-withbrdr li a']
            }
            case STREAM.BUSINESS:return {
                'url':null,
                'selectors':[]
            }
            case STREAM.SCIENCE:return {
                'url':'https://bengali.news18.com/technology/',
                'selectors':['.nwslist-withbrdr li a']
            }
            case STREAM.ENTERTAINMENT:return {
                'url':'https://bengali.news18.com/entertainment/',
                'selectors':['.nwslist-withbrdr li a']
            }
            case STREAM.MOVIE:return {
                'url':null,
                'selectors':[]
            }
            case STREAM.LIFESTYLE:return {
                'url':'https://bengali.news18.com/life-style/',
                'selectors':['.nwslist-withbrdr li a']
            }
        }
    } 
}
