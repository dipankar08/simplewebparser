
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type } from "../crawler";
import { LANG, STREAM, ListConfig } from "./CONST";

export class Kolkata247 extends BaseConfig {
    constructor() { 
        super("anandabazar"); 
    }

    getLang(): LANG {
        return LANG.BENGALI
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title',   selector: 'h1.entry-title', type: Type.TEXT },
        { name: 'details', selector: '.td-main-content .td-post-content > p', type: Type.TEXT },
        { name: 'img',     selector: '.td-main-content .td-post-featured-image  img', type: Type.IMAGE },
      ]
    }

    getTestPageUrl(): String {
        return "https://www.kolkata24x7.com/ex-kolkata-police-com-rajiv-kumar-missing-cbi/"
    }

    getListConfig(stream: STREAM): ListConfig{
        switch(stream){
            case STREAM.HEADLINE: return {
                'url':null,
                'selectors':[]
            }
            case STREAM.FIRST_PAGE:return {
                'url':'https://www.kolkata24x7.com/category/kolkata/',
                'selectors':['.td-module-thumb > a']
            }
            case STREAM.COUNTRY:return {
                'url':'https://www.kolkata24x7.com/category/national-news/',
                'selectors':['.td-module-thumb > a']
            }
            case STREAM.STATE:return {
                'url':'https://www.kolkata24x7.com/category/west-bengal/',
                'selectors':['.td-module-thumb > a']
            }
            case STREAM.INTERNATIONAL:return {
                'url':'https://www.kolkata24x7.com/category/international-news/',
                'selectors':['.td-module-thumb > a']
            }
            case STREAM.BUSINESS:return {
                'url':null,
                'selectors':[]
            }
            case STREAM.SCIENCE:return {
                'url':'https://www.kolkata24x7.com/category/tech-news/',
                'selectors':['.td-module-thumb > a']
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
