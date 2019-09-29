
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type } from "../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "./CONST";

export class AjjKalConfig extends BaseConfig {
    constructor() { 
        super(""); 
    }

    getLang(): LANG {
        return LANG.BENGALI
    }

    getLimit():number{
        return 3;
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title', selector: '#banner h1', type: Type.TEXT },
        { name: 'img', selector: '#banner .image-holder img', type: Type.IMAGE },
        { name: 'details', selector: '.blog-detail   .blog-detail-excep > p', type: Type.TEXT },
      ]
    }

    getTestPageUrl(): String {
        return "https://aajkaal.in/news/northbengal/jungle-safari-bgdc"
    }

    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.FIRST_PAGE, selector:'.news-tabe .col-md-4 .image-holder > a',url:'https://aajkaal.in/kolkata'},
            {stream: STREAM.STATE, selector:'.news-tabe .col-md-4 .image-holder > a',url:'https://aajkaal.in/state'},
            {stream: STREAM.COUNTRY, selector:'.news-tabe .col-md-4 .image-holder > a',url:'https://aajkaal.in/national'},
            {stream: STREAM.INTERNATIONAL, selector:'.news-tabe .col-md-4 .image-holder > a',url:'https://aajkaal.in/international'},
            {stream: STREAM.BUSINESS, selector:'.news-tabe .col-md-4 .image-holder > a',url:'https://aajkaal.in/business'},

            {stream: STREAM.ENTERTAINMENT, selector:'.news-tabe .col-md-4 .image-holder > a',url:'https://aajkaal.in/entertainment'},
            {stream: STREAM.SPORTS, selector:'.news-tabe .col-md-4 .image-holder > a',url:'https://aajkaal.in/sports'},
            {stream: STREAM.LIFESTYLE, selector:'.news-tabe .col-md-4 .image-holder > a',url:'https://aajkaal.in/lifestyle'},
            {stream: STREAM.OFF_BEAT, selector:'.news-tabe .col-md-4 .image-holder > a',url:'https://aajkaal.in/offbeat'},
            {stream: STREAM.TOUR, selector:'.news-tabe .col-md-4 .image-holder > a',url:'https://aajkaal.in/tour'},
            {stream: STREAM.SCIENCE, selector:'.news-tabe .col-md-4 .image-holder > a',url:'https://aajkaal.in/sciencetechnology'},
            {stream: STREAM.EDUCATION, selector:'.news-tabe .col-md-4 .image-holder > a',url:'https://aajkaal.in/helth'},
        ]
    }
}
