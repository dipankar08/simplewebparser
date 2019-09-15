
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type } from "../crawler";
import { LANG, STREAM, ListConfig } from "./CONST";

export class BusinessInsidersConfig extends BaseConfig {
    constructor() { 
        super("BusinessInsiders"); 
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
                'url':"https://www.businessinsider.in/business",
                'selectors':[".toplist_stories figure > a"]
            }
            case STREAM.SCIENCE:return {
                'url':"https://www.businessinsider.in/science",
                'selectors':[".toplist_stories figure > a"]
            }
            case STREAM.TECHNOLOGY:return {
                'url':"https://www.businessinsider.in/sai",
                'selectors':[".toplist_stories figure > a"]
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
