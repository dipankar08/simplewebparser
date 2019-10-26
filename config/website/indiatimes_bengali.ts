
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type, RootConfig } from "../../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "../CONST";

export class IndiaTimesBengaliConfig extends BaseConfig {
    constructor() { 
        super(""); 
    }

    getLang(): LANG {
        return LANG.BENGALI
    }
    getRootConfig():RootConfig{
        return {
            ignoreUrlRegex:['videoshow'],
            title:"India Times Bengali"
        }
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title',   selector: '.leftmain h1', type: Type.TEXT },
        { name: 'img',     selector: '.leftmain .article  .articleImage img', type: Type.IMAGE },
        { name: 'details', selector: '.leftmain arttextxml', type: Type.TEXT },
      ]
    }

    getTestPageUrl(): String {
        return "https://eisamay.indiatimes.com/west-bengal-news/kolkata-news/massive-fire-breaks-out-in-a-shopping-mall-at-kolkatas-salt-lake-baisakhi-more/articleshow/71423746.cms"
    }

    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.FIRST_PAGE, selector:'.other_main_news1 li> a',url:'https://eisamay.indiatimes.com/'},
            {stream: STREAM.STATE, selector:'.artlisting li .imgsec > a',url:'https://eisamay.indiatimes.com/west-bengal-news/kolkata-news/articlelist/15991773.cms'},


            {stream: STREAM.COUNTRY, selector:'.artlisting li .imgsec > a',url:'https://eisamay.indiatimes.com/nation/articlelist/15819599.cms'},

            {stream: STREAM.INTERNATIONAL, selector:'.artlisting li .imgsec > a',url:'https://eisamay.indiatimes.com/international/articlelist/15819594.cms'},
            {stream: STREAM.BUSINESS, selector:'.artlisting li .imgsec > a',url:'https://eisamay.indiatimes.com/business/articlelist/15819574.cms'},
            {stream: STREAM.COUNTRY, selector:'.artlisting li .imgsec > a',url:'https://eisamay.indiatimes.com/nation/articlelist/15819599.cms'},
            {stream: STREAM.ENTERTAINMENT, selector:'.artlisting li .imgsec > a',url:'https://eisamay.indiatimes.com/entertainment/cinema/articlelist/15935855.cms'}, 
        ]
    }
}
