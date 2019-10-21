
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
