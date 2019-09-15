
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type } from "../crawler";
import { LANG, STREAM, ListConfig } from "./CONST";

export class NDTVBanglaConfig extends BaseConfig {
    constructor() { 
        super("NDTV"); 
    }

    getLang(): LANG {
        return LANG.BENGALI
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title',   selector: '#newsDescriptionContainer .ins_headline h1', type: Type.TEXT },
        { name: 'img',     selector: '#newsDescriptionContainer img#story_image_main', type: Type.IMAGE },
        { name: 'details', selector: '#newsDescriptionContainer .ins_storybody > p' , type: Type.TEXT },
      ]
    }

    override 
    protected getLimit():number{
        return 10;
    }

    getTestPageUrl(): String {
        return "https://www.ndtv.com/bengali/rajeev-kumar-ex-kolkata-top-cop-fails-to-appear-before-cbi-in-saradha-case-on-saturday-2101135"
    }

    getListConfig(stream: STREAM): ListConfig{
        switch(stream){
            case STREAM.HEADLINE: return {
                'url':null,
                'selectors':[]
            }
            case STREAM.FIRST_PAGE:return {
                'url':'https://www.ndtv.com/bengali/latest',
                'selectors':['#ins_storylist .new_storylising_img > a']
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
