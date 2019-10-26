
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type, RootConfig } from "../../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "../CONST";

export class BbcBengaliConfig extends BaseConfig {
    constructor() { 
        super("anandabazar"); 
    }
    getRootConfig():RootConfig{
        return {
            'title': 'BCC Bangla'
        }
    }
    getLang(): LANG {
        return LANG.BENGALI
    }

    getLimit(): number{
        return 5;
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title',   selector: '.story-body h1', type: Type.TEXT },
        { name: 'details', selector: '.story-body .story-body__inner > p', type: Type.TEXT },
        { name: 'img',     selector: '.story-body figure  img', type: Type.IMAGE },
      ]
    }

    getTestPageUrl(): String {
        return "https://www.bbc.com/bengali/news-49696031"
    }

    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.FIRST_PAGE, selector:'.eagle .eagle-item > a',url:'https://www.bbc.com/bengali/news'},
        ]
    }
}
