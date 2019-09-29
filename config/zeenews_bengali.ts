
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type } from "../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "./CONST";

export class ZeeNewsConfig extends BaseConfig {
    constructor() { 
        super("zeenews"); 
    }

    getLang(): LANG {
        return LANG.BENGALI
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title', selector: '.content h1', type: Type.TEXT },
        { name: 'details', selector: '.content .article', type: Type.TEXT },
        { name: 'img', selector: '.article-image-block img', type: Type.IMAGE },
      ]
    }

    getTestPageUrl(): String {
        return "https://zeenews.india.com/bengali/kolkata/bjp-protest-against-state-government-over-nabanna-abhijan_277198.html"
    }

    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.COUNTRY, selector:'.maincontent .section-article > a',url:'https://zeenews.india.com/bengali/nation'},
            {stream: STREAM.STATE, selector:'.maincontent .section-article > a',url:'https://zeenews.india.com/bengali/state'},
            {stream: STREAM.INTERNATIONAL, selector:'.maincontent .section-article > a',url:'https://zeenews.india.com/bengali/world'},
            {stream: STREAM.ENTERTAINMENT, selector:'.maincontent .section-article > a',url:'https://zeenews.india.com/bengali/entertainment'},
            {stream: STREAM.LIFESTYLE, selector:'.maincontent .section-article > a',url:'https://zeenews.india.com/bengali/lifestyle'},
        ]
    }
}
