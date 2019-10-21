
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type, RootConfig } from "../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "./CONST";

export class BanglarPranConfig extends BaseConfig {
    constructor() { 
        super(""); 
    }

    getRootConfig():RootConfig{
        return {
            'title': 'Banglar Pran'
        }
    }
    getLang(): LANG {
        return LANG.BENGALI
    }

    getLimit():number{
        return 4;
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title',   selector: 'article header h1', type: Type.TEXT },
        { name: 'img',     selector: 'article  .td-post-featured-image img', type: Type.IMAGE },
        { name: 'details', selector: 'article .td-post-content > p', type: Type.TEXT },
      ]
    }

    getTestPageUrl(): String {
        return "https://www.banglarpran.com/archives/54540"
    }

    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.VIRAL, selector:'.td-main-content .td-module-thumb > a',url:'https://www.banglarpran.com/archives/category/different-news'},
            {stream: STREAM.ENTERTAINMENT, selector:'.td-main-content .td-module-thumb > a',url:'https://www.banglarpran.com/archives/category/entertrainment'},
            {stream: STREAM.HEALTH, selector:'.td-main-content .td-module-thumb > a',url:'https://www.banglarpran.com/archives/category/health'},

            {stream: STREAM.DOOARS, selector:'.td-main-content .td-module-thumb > a',url:'hhttps://www.banglarpran.com/archives/category/dooars'},
            
            {stream: STREAM.STATE, selector:'.td-main-content .td-module-thumb > a',url:'https://www.banglarpran.com/archives/category/state'},
            {stream: STREAM.POLITICS, selector:'.td-main-content .td-module-thumb > a',url:'https://www.banglarpran.com/archives/category/politics'},
            {stream: STREAM.COUNTRY, selector:'.td-main-content .td-module-thumb > a',url:'https://www.banglarpran.com/archives/category/india'},
            {stream: STREAM.INTERNATIONAL, selector:'.td-main-content .td-module-thumb > a',url:'https://www.banglarpran.com/archives/category/internation'},

            {stream: STREAM.SPORTS, selector:'.td-main-content .td-module-thumb > a',url:'https://www.banglarpran.com/archives/category/sports'},
            {stream: STREAM.TECHNOLOGY, selector:'.td-main-content .td-module-thumb > a',url:'https://www.banglarpran.com/archives/category/tech-news'},
        ]
    }
}



export class DarkariTipsConfig extends BaseConfig {
    constructor() { 
        super(""); 
    }

    getRootConfig():RootConfig{
        return {
            'title': 'Darkari Tips'
        }
    }
    getLang(): LANG {
        return LANG.BENGALI
    }

    getLimit():number{
        return 2;
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title',   selector: 'article header h1', type: Type.TEXT },
        { name: 'img',     selector: 'article  .td-post-featured-image img', type: Type.IMAGE },
        { name: 'details', selector: 'article .td-post-content > p', type: Type.TEXT },
      ]
    }

    getTestPageUrl(): String {
        return "https://www.darkaritips.com/baby-care/ja-ja-kornio-2/"
    }

    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.FIRST_PAGE, selector:'.td-main-content .td-module-thumb > a',url:'https://www.darkaritips.com/headline/',limit:4},
            {stream: STREAM.HEALTH, selector:'.td-main-content .td-module-thumb > a',url:'https://www.darkaritips.com/category/health-message/',limit:4},
            {stream: STREAM.LIFESTYLE, selector:'.td-main-content .td-module-thumb > a',url:'https://www.darkaritips.com/category/lifestyle/',limit:4},
        ]
    }
}


export class GNEBanglaConfig extends BaseConfig {
    constructor() { 
        super(""); 
    }

    getRootConfig():RootConfig{
        return {
            'title': 'GNE Bangla'
        }
    }
    getLang(): LANG {
        return LANG.BENGALI
    }

    getLimit():number{
        return 2;
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title',   selector: 'article header h1', type: Type.TEXT },
        { name: 'img',     selector: 'article  .td-post-featured-image img', type: Type.IMAGE },
        { name: 'details', selector: 'article .td-post-content > p', type: Type.TEXT },
      ]
    }

    getTestPageUrl(): String {
        return "https://gnebangla.in/international/2019/10/17/%e0%a6%ad%e0%a6%af%e0%a6%bc%e0%a6%99%e0%a7%8d%e0%a6%95%e0%a6%b0-%e0%a6%ac%e0%a6%bf%e0%a6%aa%e0%a6%a6-%e0%a6%a4%e0%a6%be%e0%a6%87-%e0%a6%8f%e0%a6%87-%e0%a6%ae%e0%a6%be%e0%a6%9b%e0%a6%95%e0%a7%87/"
    }

    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.VIRAL, selector:'.td-category-grid .td-module-thumb > a',url:'https://gnebangla.in/category/viral-news/'},

            {stream: STREAM.FIRST_PAGE, selector:'.td-category-grid .td-module-thumb > a',url:'https://gnebangla.in/category/local-news/',limit:4},
            {stream: STREAM.STATE, selector:'.td-category-grid .td-module-thumb > a',url:'https://gnebangla.in/category/west-bengal/',limit:4},
            {stream: STREAM.COUNTRY, selector:'.td-category-grid .td-module-thumb > a',url:'https://gnebangla.in/category/national-news/',limit:4},

            {stream: STREAM.INTERNATIONAL, selector:'.td-category-grid .td-module-thumb > a',url:'https://gnebangla.in/category/international/',limit:4},
            {stream: STREAM.TECHNOLOGY, selector:'.td-category-grid .td-module-thumb > a',url:'https://gnebangla.in/category/technology/',limit:4},
            {stream: STREAM.SPORTS, selector:'.td-category-grid .td-module-thumb > a',url:'https://gnebangla.in/category/sports-news/',limit:4},
            {stream: STREAM.ENTERTAINMENT, selector:'.td-category-grid .td-module-thumb > a',url:'https://gnebangla.in/category/entertainment/',limit:4},

        ]
    }
}
