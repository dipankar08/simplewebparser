
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type } from "../crawler";
import { LANG, STREAM, ListConfig } from "./CONST";

export class TheHinduConfig extends BaseConfig {
    commonSelector:Array<string> = [
        '.main .story1-3x100-container > a',
        '.main .spc33x3-1story-container > a',
        '.main .story-card-33 > a']
    constructor() { 
        super("TheHindu"); 
    }

    getLang(): LANG {
        return LANG.ENGLISH
    }
    getLimit():number{
        return 4;
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title', selector: '.article h1.title', type: Type.TEXT },
        { name: 'details', selector: '.article-cont p', type: Type.TEXT },
        { name: 'img', selector: '.article picture > source', type: Type.IMAGE, attr:'srcset' },
      ]
    }

    getTestPageUrl(): String {
        return "https://www.thehindu.com/news/cities/mumbai/choose-between-nationalistic-and-family-oriented-parties-says-amit-shah/article29481003.ece?homepage=true"
    }
    getListConfig(stream: STREAM): ListConfig{
        switch(stream){
            case STREAM.TECHNOLOGY:return {
                'url':'https://www.thehindu.com/sci-tech/technology/',
                'selectors':this.commonSelector
            }
            case STREAM.SCIENCE:return {
                'url':'https://www.thehindu.com/sci-tech/science/',
                'selectors':this.commonSelector
            }
            case STREAM.GADGETS:return {
                'url':'https://www.thehindu.com/sci-tech/technology/gadgets/',
                'selectors':this.commonSelector
            }
            case STREAM.ENTERTAINMENT:return {
                'url':'https://www.thehindu.com/entertainment/',
                'selectors':['.slick-initialized .slick-slide > a']
            }
            case STREAM.BUSINESS:return {
                'url':'https://www.thehindu.com/business/',
                'selectors':['.slick-initialized .slick-slide > a']
            }
            case STREAM.SPORTS:return {
                'url':'https://www.thehindu.com/sport/',
                'selectors':['.slick-initialized .slick-slide > a']
            }
            case STREAM.HEADLINE:return {
                'url':'https://www.thehindu.com/news/',
                'selectors':['.slick-initialized .slick-slide > a']
            }
            case STREAM.MARKETS:return {
                'url':'https://www.thehindu.com/business/markets/',
                'selectors':[   '.main .story1-3x100-container > a',
                '.main .spc33x3-1story-container > a',
                '.main .story-card-33 > a']
            }
        }
    } 
}
