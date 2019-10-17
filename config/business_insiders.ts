
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type, RootConfig } from "../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "./CONST";

export class BusinessInsidersConfig extends BaseConfig {
    constructor() { 
        super("BusinessInsiders"); 
    }

    getRootConfig():RootConfig{
        return {
            'title': 'Business_Inssider'
        }
    }

    getLang(): LANG {
        return LANG.ENGLISH
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title', selector: '.ArticleCont article h1', type: Type.TEXT },
        { name: 'details', selector: '.ArticleCont .article_content .story-text', type: Type.TEXT },
        { name: 'img', selector: '.ArticleCont img', type: Type.IMAGE,attr:'data-original' },
      ]
    }

    getTestPageUrl(): String {
        return "https://www.businessinsider.in/yes-bank-promoters-seek-probe-against-short-sellers-hammering-the-stock/articleshow/71108464.cms"
    }

    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.BUSINESS, selector:".toplist_stories figure > a",url:"https://www.businessinsider.in/business"},
            {stream: STREAM.SCIENCE, selector:".toplist_stories figure > a",url:"https://www.businessinsider.in/science"},
            {stream: STREAM.TECHNOLOGY, selector:".toplist_stories figure > a",url:"https://www.businessinsider.in/sai"},
        ]
    }
}
