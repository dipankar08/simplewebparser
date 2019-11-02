
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type, RootConfig } from "../../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "../CONST";

export class Kolkata247 extends BaseConfig {
    constructor() { 
        super("anandabazar"); 
    }
    getRootConfig():RootConfig{
        return {
            'title': 'Kolkata 24X7'
        }
    }
    getLang(): LANG {
        return LANG.IN_BENGALI
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


export class KolkataTimes24 extends BaseConfig {
    constructor() { 
        super(""); 
    }
    getRootConfig():RootConfig{
        return {
            'title': 'Kolkata Times 24',
            is_active:true
        }
    }
    getLang(): LANG {
        return LANG.IN_BENGALI
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title',   selector: 'article header h1', type: Type.TEXT },
        { name: 'img',     selector: 'article  .td-post-featured-image img', type: Type.IMAGE },
        { name: 'details', selector: 'article .td-post-content > p', type: Type.TEXT },
      ]
    }

    getTestPageUrl(): String {
        return "https://kolkatatimes24.com/west-bengal/21026/tmc-counsellor-of-kharagpur-stop-durga-idol-immersion-for-chhat-puja/?relatedposts_hit=1&relatedposts_origin=22890&relatedposts_position=0"
    }

    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.OFF_BEAT, selector:'.td-module-thumb > a',url:'https://kolkatatimes24.com/category/offbeat/'},
            {stream: STREAM.FIRST_PAGE, selector:'.td-module-thumb > a',url:'https://kolkatatimes24.com/category/kolkata/', limit:5},
            {stream: STREAM.STATE, selector:'.td-module-thumb > a',url:'https://kolkatatimes24.com/category/west-bengal/'},
            {stream: STREAM.COUNTRY, selector:'.td-module-thumb > a',url:'https://kolkatatimes24.com/category/national/'},
            {stream: STREAM.INTERNATIONAL, selector:'.td-module-thumb > a',url:'https://kolkatatimes24.com/category/world/'},
            {stream: STREAM.POLITICS, selector:'.td-module-thumb > a',url:'https://kolkatatimes24.com/category/politics/'},
            
            {stream: STREAM.SPORTS, selector:'.td-module-thumb > a',url:'https://kolkatatimes24.com/category/sports/'},
            {stream: STREAM.BUSINESS, selector:'.td-module-thumb > a',url:'https://kolkatatimes24.com/category/business-and-economy/'},
            {stream: STREAM.TECHNOLOGY, selector:'.td-module-thumb > a',url:'https://kolkatatimes24.com/category/technology/'},
            {stream: STREAM.ENTERTAINMENT, selector:'.td-module-thumb > a',url:'https://kolkatatimes24.com/category/entertainment/'},
        ]
    }
}
