
import {BaseConfig} from "./baseconfig";
const request = require('request-promise');
import { PageParseConfig, Type, RootConfig } from "../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "./CONST";
import { String } from "lodash";

export class BartamanConfig extends BaseConfig {
    constructor() { 
        super(""); 
    }
    
    getRootConfig():RootConfig{
        return {
            networkFetcher:this.getDataFromUrl,
            title:"Bartaman",
        }
    }
    getLang(): LANG {
        return LANG.BENGALI
    }

    async getDataFromUrl(url:string):Promise<string>{
        let resp = await request(
            { method: 'GET'
            , uri: url
            , gzip: true
            })
        return resp;
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title',   selector: '.head-news h4', type: Type.TEXT },
        { name: 'img',     selector: '.head-news .thumbnail  img', type: Type.IMAGE },
        { name: 'details', selector: '.head-news .content', type: Type.TEXT },
      ]
    }

    getTestPageUrl(): string {
        return "https://bartamanpatrika.com/detailNews.php?cID=13&nID=191793&P=1"
    }

    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.HEADLINE, selector:'.firstSection a.bisad',url:'https://bartamanpatrika.com/'},
            {stream: STREAM.FIRST_PAGE, selector:'.firstSection a.bisad',url:'https://bartamanpatrika.com/section.php?cID=12'},

            {stream: STREAM.STATE, selector:'.firstSection a.bisad',url:'https://bartamanpatrika.com/section.php?cID=13'},
            {stream: STREAM.COUNTRY, selector:'.firstSection a.bisad',url:'https://bartamanpatrika.com/section.php?cID=14'},
            {stream: STREAM.INTERNATIONAL, selector:'.firstSection a.bisad',url:'https://bartamanpatrika.com/section.php?cID=15'},

            {stream: STREAM.SPORTS, selector:'.firstSection a.bisad',url:'https://bartamanpatrika.com/section.php?cID=18'},
            {stream: STREAM.ENTERTAINMENT, selector:'.firstSection a.bisad',url:'https://bartamanpatrika.com/section.php?cID=45'},
            {stream: STREAM.LIFESTYLE, selector:'.firstSection a.bisad',url:'https://bartamanpatrika.com/section.php?cID=4'},
            {stream: STREAM.SCIENCE, selector:'.firstSection a.bisad',url:'https://bartamanpatrika.com/section.php?cID=67'},
        ]
    }
}
