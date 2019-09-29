
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type } from "../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "./CONST";

export class NDTVEnglishConfig extends BaseConfig {
    constructor() { 
        super("NDTV"); 
    }

    getLang(): LANG {
        return LANG.ENGLISH
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
        return "https://www.ndtv.com/india-news/blame-game-starts-as-wheels-come-off-indias-auto-sector-foreign-media-2101144"
    }

    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.FIRST_PAGE, selector:'#ins_storylist .new_storylising_img > a',url:'https://www.ndtv.com/latest'},
            {stream: STREAM.COUNTRY, selector:'#ins_storylist .new_storylising_img > a',url:'https://www.ndtv.com/india'},
        ]
    }
}
