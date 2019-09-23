
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type } from "../crawler";
import { LANG, STREAM, ListConfig } from "./CONST";

export class AajBanglaConfig extends BaseConfig {
    constructor() { 
        super(""); 
    }

    getLang(): LANG {
        return LANG.BENGALI
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title',   selector: '.td-main-content .td-post-title h1', type: Type.TEXT },
        { name: 'img',     selector: '.td-main-content .td-post-featured-image img', type: Type.IMAGE },
        { name: 'details', selector: '.td-main-content .td-post-content > p', type: Type.TEXT },
      ]
    }

    getTestPageUrl(): String {
        return "https://www.aajbangla.in/read-on-to-know-how-to-spend-all-day-2/"
    }

    getListConfig(stream: STREAM): ListConfig{
        switch(stream){
            case STREAM.COUNTRY: return {
                'url':'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%a6%e0%a7%87%e0%a6%b6/',
                'selectors':['.td-category-grid .td-module-thumb > a']
            }
            case STREAM.HEADLINE: return {
                'url':'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%95%e0%a6%b2%e0%a6%95%e0%a6%be%e0%a6%a4%e0%a6%be/',
                'selectors':['.td-category-grid .td-module-thumb > a']
            }
            case STREAM.STATE: return {
                'url':'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%b0%e0%a6%be%e0%a6%9c%e0%a7%8d%e0%a6%af/',
                'selectors':['.td-category-grid .td-module-thumb > a']
            }
            case STREAM.INTERNATIONAL: return {
                'url':'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%8d%e0%a6%ac/',
                'selectors':['.td-category-grid .td-module-thumb > a']
            }
            case STREAM.BANGLADESH: return {
                'url':'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%be%e0%a6%82%e0%a6%b2%e0%a6%be%e0%a6%a6%e0%a7%87%e0%a6%b6/',
                'selectors':['.td-category-grid .td-module-thumb > a']
            }
            case STREAM.SPORTS: return {
                'url':'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%96%e0%a7%87%e0%a6%b2%e0%a6%be/',
                'selectors':['.td-category-grid .td-module-thumb > a']
            }
            case STREAM.ENTERTAINMENT: return {
                'url':'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%bf%e0%a6%a8%e0%a7%8b%e0%a6%a6%e0%a6%a8/',
                'selectors':['.td-category-grid .td-module-thumb > a']
            }
            case STREAM.HOROSCOPE: return {
                'url':'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c%e0%a6%95%e0%a7%87%e0%a6%b0-%e0%a6%a6%e0%a6%bf%e0%a6%a8/',
                'selectors':['.td-category-grid .td-module-thumb > a']
            }
            case STREAM.LIFESTYLE: return {
                'url':'https://www.aajbangla.in/category/%e0%a6%b2%e0%a6%be%e0%a6%87%e0%a6%ab%e0%a6%b8%e0%a7%8d%e0%a6%9f%e0%a6%be%e0%a6%87%e0%a6%b2/',
                'selectors':['.td-category-grid .td-module-thumb > a']
            }
            case STREAM.TOUR: return {
                'url':'https://www.aajbangla.in/category/%e0%a6%ad%e0%a7%8d%e0%a6%b0%e0%a6%ae%e0%a6%a3/',
                'selectors':['.td-category-grid .td-module-thumb > a']
            }
        }
    } 
}
