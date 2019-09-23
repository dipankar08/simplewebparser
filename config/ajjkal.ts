
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type } from "../crawler";
import { LANG, STREAM, ListConfig } from "./CONST";

export class AjjKalConfig extends BaseConfig {
    constructor() { 
        super(""); 
    }

    getLang(): LANG {
        return LANG.BENGALI
    }

    getLimit():number{
        return 3;
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title', selector: '#banner h1', type: Type.TEXT },
        { name: 'img', selector: '#banner .image-holder img', type: Type.IMAGE },
        { name: 'details', selector: '.blog-detail   .blog-detail-excep > p', type: Type.TEXT },
      ]
    }

    getTestPageUrl(): String {
        return "https://aajkaal.in/news/northbengal/jungle-safari-bgdc"
    }

    getListConfig(stream: STREAM): ListConfig{
        switch(stream){
            case STREAM.HEADLINE: return {
                'url':'https://aajkaal.in/kolkata',
                'selectors':['.news-tabe .col-md-4 .image-holder > a']
            }
            case STREAM.STATE:return {
                'url':'https://aajkaal.in/state',
                'selectors':['.news-tabe .col-md-4 .image-holder > a']
            }
            case STREAM.COUNTRY:return {
                'url':'https://aajkaal.in/national',
                'selectors':['.news-tabe .col-md-4 .image-holder > a']
            }
            case STREAM.INTERNATIONAL:return {
                'url':'https://aajkaal.in/international',
                'selectors':['.news-tabe .col-md-4 .image-holder > a']
            }
            case STREAM.BUSINESS:return {
                'url':'https://aajkaal.in/business',
                'selectors':['.news-tabe .col-md-4 .image-holder > a']
            }
            case STREAM.ENTERTAINMENT:return {
                'url':'https://aajkaal.in/entertainment',
                'selectors':['.news-tabe .col-md-4 .image-holder > a']
            }
            case STREAM.SPORTS:return {
                'url':'https://aajkaal.in/sports',
                'selectors':['.news-tabe .col-md-4 .image-holder > a']
            }
            case STREAM.LIFESTYLE:return {
                'url':'https://aajkaal.in/lifestyle',
                'selectors':['.news-tabe .col-md-4 .image-holder > a']
            }
            case STREAM.OFF_BEAT:return {
                'url':'https://aajkaal.in/offbeat',
                'selectors':['.news-tabe .col-md-4 .image-holder > a']
            }
            case STREAM.TOUR:return {
                'url':'https://aajkaal.in/tour',
                'selectors':['.news-tabe .col-md-4 .image-holder > a']
            }
            case STREAM.SCIENCE:return {
                'url':'https://aajkaal.in/sciencetechnology',
                'selectors':['.news-tabe .col-md-4 .image-holder > a']
            }
            case STREAM.EDUCATION:return {
                'url':'https://aajkaal.in/helth',
                'selectors':['.news-tabe .col-md-4 .image-holder > a']
            }
        }
    } 
}
