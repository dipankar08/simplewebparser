
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type } from "../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "./CONST";

export class NDTVHindiConfig extends BaseConfig {
    constructor() { 
        super("NDTV"); 
    }

    getLang(): LANG {
        return LANG.HINDI
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title',   selector: '#newsDescriptionContainer .ins_headline h1', type: Type.TEXT },
        { name: 'img',     selector: '#newsDescriptionContainer img.story_image_main', type: Type.IMAGE },
        { name: 'details', selector: '#newsDescriptionContainer .ins_storybody > p' , type: Type.TEXT },
      ]
    }

    override 
    protected getLimit():number{
        return 10;
    }

    getTestPageUrl(): String {
        return " https://khabar.ndtv.com/news/india/ashok-gehlot-said-pm-modi-cannot-mislead-people-by-taking-the-name-of-pakistan-every-time-2101136"
    }
    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.COUNTRY, selector:'.new_storylising .nstory_header > a',url:'https://khabar.ndtv.com/news/india'},
        ]
    }
}
