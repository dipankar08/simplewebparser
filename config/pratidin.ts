
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type } from "../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "./CONST";

export class PratidinConfig extends BaseConfig {
    constructor() { 
        super("Pratidin"); 
    }

    getLang(): LANG {
        return LANG.BENGALI
    }

    getLimit():number{
        return 10
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title', selector: '.container .hot_news h1', type: Type.TEXT },
        { name: 'details', selector: '.container .news_content_area > p', type: Type.TEXT },
        { name: 'img', selector: '.container img.hot_news_image', type: Type.IMAGE },
      ]
    }

    getTestPageUrl(): String {
        return "https://www.sangbadpratidin.in/world/pakistan-turns-aggressive-constructs-airfield-in-pok/"
    }
    
    getStoryListConfig():Array<StoryListConfig>{
        return [
            { stream: STREAM.HEADLINE, selector:'.carousel  .scale_img_block > a',url:'https://www.sangbadpratidin.in/', limit:15},
            { stream: STREAM.HEADLINE, selector:'.daily-news  .scale_img_block > a',url:'https://www.sangbadpratidin.in/', limit:10},
            { stream: STREAM.FIRST_PAGE, selector:'.tatka_update_list  .scale_img a',url:'https://www.sangbadpratidin.in/', limit:10},

            
            
            { stream: STREAM.FIRST_PAGE, selector:'ul.more_news_list li > a',url:'https://www.sangbadpratidin.in/latest-update/'},
        ]
    }
}
