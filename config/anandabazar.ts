
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type, RootConfig } from "../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "./CONST";

export class AnandabazarConfig extends BaseConfig {
    constructor() { 
        super("anandabazar"); 
    }

    getLang(): LANG {
        return LANG.BENGALI
    }

    getRootConfig():RootConfig{
        return {
            ignoreUrlRegex:['/photogallery/'],
            ignoreLineRegex:['পড়ুন:']
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
        return "https://www.anandabazar.com/state/cbi-vs-rajeev-kumar-cbi-continues-search-operation-to-locate-rajeev-kumar-dgtl-1.1049774"
    }
    
    getStoryListConfig():Array<StoryListConfig>{
        return [
            {url:'https://www.anandabazar.com/', selector: '.container .abp-homepage-main-story-wrap-new a', stream:STREAM.HEADLINE},
            {url:'https://www.anandabazar.com/', selector: '.abp-homepage-lead-story-wrap a', stream:STREAM.HEADLINE},
            {url:'https://www.anandabazar.com/', selector: '.abp-homepage-editor-story-wrap a', stream:STREAM.FIRST_PAGE},

            {url:'https://www.anandabazar.com/state',   selector: '.sectionstoryinside-sub > div > a', stream:STREAM.STATE},
            {url:'https://www.anandabazar.com/international',   selector: '.sectionstoryinside-sub > div > a', stream:STREAM.INTERNATIONAL},
            {url:'https://www.anandabazar.com/business',   selector: '.sectionstoryinside-sub > div > a', stream:STREAM.BUSINESS},
            {url:'https://www.anandabazar.com/others/science',   selector: '.sectionstoryinside-sub > div > a', stream:STREAM.SCIENCE},
            {url:'https://www.anandabazar.com/entertainment',   selector: '.sectionstoryinside-sub > div > a', stream:STREAM.ENTERTAINMENT},
            {url:'https://www.anandabazar.com/topic/short-story',   selector: '.row .article-image > a', stream:STREAM.SHORT_STORY},
            {url:'https://www.anandabazar.com/travel',   selector: '.carousel-inner .item a', stream:STREAM.TRAVEL},
        ]
    }
}
