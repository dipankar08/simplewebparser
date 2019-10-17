
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type, RootConfig } from "../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "./CONST";

export class TheHinduConfig extends BaseConfig {
    commonSelector:Array<string> = [
        '.main .story1-3x100-container > a',
        '.main .spc33x3-1story-container > a',
        '.main .story-card-33 > a']
    constructor() { 
        super("TheHindu"); 
    }

    getRootConfig():RootConfig{
        return {
            'title': 'The Hindu'
        }
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


    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.TECHNOLOGY, selector:'.main .story1-3x100-container > a',url:'https://www.thehindu.com/sci-tech/technology/'},
            {stream: STREAM.TECHNOLOGY, selector:'.main .spc33x3-1story-container > a',url:'https://www.thehindu.com/sci-tech/technology/'},
            {stream: STREAM.TECHNOLOGY, selector: '.main .story-card-33 > a',url:'https://www.thehindu.com/sci-tech/technology/'},

            {stream: STREAM.SCIENCE, selector:'.main .story1-3x100-container > a',url:'https://www.thehindu.com/sci-tech/science/'},
            {stream: STREAM.SCIENCE, selector:'.main .spc33x3-1story-container > a',url:'https://www.thehindu.com/sci-tech/science/'},
            {stream: STREAM.SCIENCE, selector: '.main .story-card-33 > a',url:'https://www.thehindu.com/sci-tech/science/'},

            {stream: STREAM.ENTERTAINMENT, selector: '.slick-initialized .slick-slide > a',url:'https://www.thehindu.com/entertainment/'},
            {stream: STREAM.BUSINESS, selector: '.slick-initialized .slick-slide > a',url:'https://www.thehindu.com/business/'},
            {stream: STREAM.SPORTS, selector: '.slick-initialized .slick-slide > a',url:'https://www.thehindu.com/sport/'},
            {stream: STREAM.HEADLINE, selector: '.slick-initialized .slick-slide > a',url:'https://www.thehindu.com/news/'},
        ]
    }
}
