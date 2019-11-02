
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type, RootConfig } from "../../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "../CONST";

export class AajBanglaConfig extends BaseConfig {
    constructor() { 
        super(""); 
    }

    getLang(): LANG {
        return LANG.IN_BENGALI
    }
    getRootConfig():RootConfig{
        return {
            'title': 'AajBangla'
        }
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

    getStoryListConfig():Array<StoryListConfig>{
        return [
            /* 
           {stream: STREAM.COUNTRY, selector:'.td-category-grid .td-module-thumb > a',url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%a6%e0%a7%87%e0%a6%b6/'},
           {stream: STREAM.HEADLINE, selector:'.td-category-grid .td-module-thumb > a',url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%95%e0%a6%b2%e0%a6%95%e0%a6%be%e0%a6%a4%e0%a6%be/'},
           {stream: STREAM.STATE, selector:'.td-category-grid .td-module-thumb > a',url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%b0%e0%a6%be%e0%a6%9c%e0%a7%8d%e0%a6%af/'},
           {stream: STREAM.INTERNATIONAL, selector:'.td-category-grid .td-module-thumb > a',url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%8d%e0%a6%ac/'},
           {stream: STREAM.BANGLADESH, selector:'.td-category-grid .td-module-thumb > a',url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%be%e0%a6%82%e0%a6%b2%e0%a6%be%e0%a6%a6%e0%a7%87%e0%a6%b6/'},
           {stream: STREAM.SPORTS, selector:'.td-category-grid .td-module-thumb > a',url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%96%e0%a7%87%e0%a6%b2%e0%a6%be/'},
           {stream: STREAM.ENTERTAINMENT, selector:'.td-category-grid .td-module-thumb > a',url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%bf%e0%a6%a8%e0%a7%8b%e0%a6%a6%e0%a6%a8/'},
           {stream: STREAM.HOROSCOPE, selector:'.td-category-grid .td-module-thumb > a',url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c%e0%a6%95%e0%a7%87%e0%a6%b0-%e0%a6%a6%e0%a6%bf%e0%a6%a8/'},
           {stream: STREAM.LIFESTYLE, selector:'.td-category-grid .td-module-thumb > a',url:'https://www.aajbangla.in/category/%e0%a6%b2%e0%a6%be%e0%a6%87%e0%a6%ab%e0%a6%b8%e0%a7%8d%e0%a6%9f%e0%a6%be%e0%a6%87%e0%a6%b2/'},
           {stream: STREAM.TOUR, selector:'.td-category-grid .td-module-thumb > a',url:'https://www.aajbangla.in/category/%e0%a6%ad%e0%a7%8d%e0%a6%b0%e0%a6%ae%e0%a6%a3/'},
            */
        ]
    }
}
