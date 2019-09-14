
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type } from "../crawler";
import { LANG, STREAM, ListConfig } from "./CONST";

export class ZeeNewsConfig extends BaseConfig {
    constructor() { 
        super("zeenews"); 
    }

    getLang(): LANG {
        return LANG.BENGALI
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title', selector: '.content h1', type: Type.TEXT },
        { name: 'details', selector: '.content .article', type: Type.TEXT },
        { name: 'img', selector: '.article-image-block img', type: Type.IMAGE },
      ]
    }

    getTestPageUrl(): String {
        return "https://zeenews.india.com/bengali/kolkata/bjp-protest-against-state-government-over-nabanna-abhijan_277198.html"
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
                'url':'https://zeenews.india.com/bengali/nation',
                'selectors':['.maincontent .section-article > a']
            }
            case STREAM.STATE:return {
                'url':'https://zeenews.india.com/bengali/state',
                'selectors':['.maincontent .section-article > a']
            }
            case STREAM.INTERNATIONAL:return {
                'url':'https://zeenews.india.com/bengali/world',
                'selectors':['.maincontent .section-article > a']
            }

            case STREAM.BUSINESS:return {
                'url':null,
                'selectors':[]
            }
            case STREAM.SCIENCE:return {
                'url':null,
                'selectors':[]
            }
            case STREAM.ENTERTAINMENT:return {
                'url':'https://zeenews.india.com/bengali/entertainment',
                'selectors':['.maincontent .section-article > a']
            }

            case STREAM.MOVIE:return {
                'url':null,
                'selectors':[]
            }
            case STREAM.LIFESTYLE:return {
                'url':'https://zeenews.india.com/bengali/lifestyle',
                'selectors':['.maincontent .section-article > a']
            }
        }
    } 
}
