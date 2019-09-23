
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type, RootConfig } from "../crawler";
import { LANG, STREAM, ListConfig } from "./CONST";

export class AnandabazarConfig extends BaseConfig {
    constructor() { 
        super("anandabazar"); 
    }

    getLang(): LANG {
        return LANG.BENGALI
    }

    getRootConfig():RootConfig{
        return {
            ignoreUrlRegex:['/photogallery/']
        }
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title', selector: '#story_container h1', type: Type.TEXT },
        { name: 'details', selector: '#story_container .articleBody', type: Type.TEXT },
        { name: 'img', selector: '#story_container  img', type: Type.IMAGE },
      ]
    }

    getTestPageUrl(): String {
        return "https://www.anandabazar.com/supplementary/rabibashoriyo/galper-feriwala-a-short-story-written-by-debdulal-kundu-1.1045582"
    }

    getListConfig(stream: STREAM): ListConfig{
        switch(stream){
            case STREAM.HEADLINE: return {
                'url':'https://www.anandabazar.com/',
                'selectors':['.abp-homepage-lead-story-wrap a']
            }
            case STREAM.FIRST_PAGE:return {
                'url':null,
                'selectors':[]
            }
            case STREAM.COUNTRY:return {
                'url':null,
                'selectors':['.sectionstoryinside-sub >div>a']
            }
            case STREAM.STATE:return {
                'url':'https://www.anandabazar.com/state',
                'selectors':['.sectionstoryinside-sub >div>a']
            }
            case STREAM.INTERNATIONAL:return {
                'url':'https://www.anandabazar.com/international',
                'selectors':['.sectionstoryinside-sub >div>a']
            }
            case STREAM.BUSINESS:return {
                'url':'https://www.anandabazar.com/business',
                'selectors':['.sectionstoryinside-sub >div>a']
            }
            case STREAM.SCIENCE:return {
                'url':'https://www.anandabazar.com/others/science',
                'selectors':['.sectionstoryinside-sub >div>a']
            }
            case STREAM.ENTERTAINMENT:return {
                'url':'https://www.anandabazar.com/entertainment',
                'selectors':['.sectionstoryinside-sub >div>a']
            }
            case STREAM.MOVIE:return {
                'url':null,
                'selectors':['.sectionstoryinside-sub >div>a']
            }
            case STREAM.LIFESTYLE:return {
                'url':'https://www.anandabazar.com/others/science',
                'selectors':['.sectionstoryinside-sub >div>a']
            }
            case STREAM.SHORT_STORY:return {
                'url':'hhttps://www.anandabazar.com/topic/short-story',
                'selectors':['.row .article-image > a']
            }
            case STREAM.TRAVEL:return {
                'url':'https://www.anandabazar.com/travel',
                'selectors':['.carousel-inner .item a']
            }
            case STREAM.WOMEN:return {
                'url':'https://www.anandabazar.com/women',
                'selectors':[]
            }
            case STREAM.NONE:return {
                'url':'',
                'selectors':[]
            }
        }
    } 
}
