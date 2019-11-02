
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type, RootConfig } from "../../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "../CONST";

export class NilkonthoConfig extends BaseConfig {
    constructor() { 
        super(""); 
    }
    getRootConfig():RootConfig{
        return {
            'title': 'NilKontho',
            is_active:true,
        }
    }
    getLang(): LANG {
        return LANG.IN_BENGALI
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title',   selector: 'article .post-inner h1', type: Type.TEXT },
        { name: 'img',     selector: 'article .single-post-thumb img', type: Type.IMAGE },
        { name: 'details', selector: 'article .post-inner .entry > p ', type: Type.TEXT },
      ]
    }

    getTestPageUrl(): String {
        return "https://www.nilkantho.in/palaniappan-chidambaram-10/"
    }

    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.FIRST_PAGE, selector:'.post-listing article h2 > a',url:'https://www.nilkantho.in/category/news/kolkata/'},

            {stream: STREAM.STATE, selector:'.post-listing article h2 > a',url:'https://www.nilkantho.in/category/news/state/'},
            {stream: STREAM.COUNTRY, selector:'.post-listing article h2 > a',url:'https://www.nilkantho.in/category/news/national/'},
            {stream: STREAM.INTERNATIONAL, selector:'.post-listing article h2 > a',url:'https://www.nilkantho.in/category/news/world/'},
            {stream: STREAM.ENTERTAINMENT, selector:'.post-listing article h2 > a',url:'https://www.nilkantho.in/category/news/entertainment/'},

            {stream: STREAM.SPORTS, selector:'.post-listing article h2 > a',url:'https://www.nilkantho.in/category/news/sports/'},
            {stream: STREAM.BUSINESS, selector:'.post-listing article h2 > a',url:'https://www.nilkantho.in/category/news/business/'},
            {stream: STREAM.SCIENCE, selector:'.post-listing article h2 > a',url:'https://www.nilkantho.in/category/news/scitech/'},
            
            {stream: STREAM.LIFESTYLE, selector:'.post-listing article h2 > a',url:'https://www.nilkantho.in/category/lifestyle/'},
            {stream: STREAM.LIFESTYLE, selector:'.post-listing article h2 > a',url:'https://www.nilkantho.in/category/health'},
        ]
    }
}
