
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type, RootConfig } from "../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "./CONST";

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

    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.FIRST_PAGE, selector:'ul.more_news_list li > a',url:'https://www.sangbadpratidin.in/latest-update/'},
        ]
    }
    getRootConfig():RootConfig{
        //>>>>>>>  FILL IT HERE <<<<<<<<<
        return {
            'title': ''
        }
    }
}
