
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type } from "../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "./CONST";

export class Kolkata247 extends BaseConfig {
    constructor() { 
        super("anandabazar"); 
    }

    getLang(): LANG {
        return LANG.BENGALI
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title',   selector: 'h1.entry-title', type: Type.TEXT },
        { name: 'details', selector: '.td-main-content .td-post-content > p', type: Type.TEXT },
        { name: 'img',     selector: '.td-main-content .td-post-featured-image  img', type: Type.IMAGE },
      ]
    }

    getTestPageUrl(): String {
        return "https://www.kolkata24x7.com/ex-kolkata-police-com-rajiv-kumar-missing-cbi/"
    }

    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.HEADLINE, selector:'.td_module_4 .td-module-thumb > a',url:'https://www.kolkata24x7.com/', limit:5},
            {stream: STREAM.FIRST_PAGE, selector:'.td-module-thumb > a',url:'https://www.kolkata24x7.com/', limit:30},
            {stream: STREAM.STATE, selector:'.td-module-thumb > a',url:'https://www.kolkata24x7.com/category/kolkata/'},
            {stream: STREAM.COUNTRY, selector:'.td-module-thumb > a',url:'https://www.kolkata24x7.com/category/national-news/'},
            {stream: STREAM.STATE, selector:'.td-module-thumb > a',url:'https://www.kolkata24x7.com/category/west-bengal/'},
            {stream: STREAM.INTERNATIONAL, selector:'.td-module-thumb > a',url:'https://www.kolkata24x7.com/category/international-news/'},
            {stream: STREAM.SCIENCE, selector:'.td-module-thumb > a',url:'https://www.kolkata24x7.com/category/tech-news/'},
        ]
    }
}
