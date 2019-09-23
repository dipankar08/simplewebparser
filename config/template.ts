
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type } from "../crawler";
import { LANG, STREAM, ListConfig } from "./CONST";

export class AnandabazarConfig extends BaseConfig {
    constructor() { 
        super(""); 
    }

    getLang(): LANG {
        return LANG.BENGALI
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title',   selector: '#story_container h1', type: Type.TEXT },
        { name: 'img',     selector: '#story_container  img', type: Type.IMAGE },
        { name: 'details', selector: '#story_container .articleBody', type: Type.TEXT },
      ]
    }

    getTestPageUrl(): String {
        return "https://www.anandabazar.com/state/mamata-banerjee-says-that-she-will-accept-pay-commission-recommendation-dgtl-1.1045083"
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
                'url':null,
                'selectors':[]
            }
            case STREAM.SCIENCE:return {
                'url':null,
                'selectors':[]
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
