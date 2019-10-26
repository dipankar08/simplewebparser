
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type, RootConfig } from "../../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "../CONST";

export class NDTVBanglaConfig extends BaseConfig {
    constructor() { 
        super("NDTV"); 
    }

    getRootConfig():RootConfig{
        return {
            'title': 'NDTV'
        }
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

    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.FIRST_PAGE, selector:'#ins_storylist .new_storylising_img > a',url:'https://www.ndtv.com/bengali/latest'},
        ]
    }
}
