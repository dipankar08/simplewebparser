
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type, RootConfig } from "../../crawler";
import { LANG, STREAM, ListConfig, StoryListConfig } from "../CONST";

export class DainikStatesmanConfig extends BaseConfig {
    constructor() { 
        super(""); 
    }

    getRootConfig():RootConfig{
        return {
            'title': 'Statesman Bengali'
        }
    }
    getLang(): LANG {
        return LANG.BENGALI
    }


    getLimit():number{
        return 3;
    }

    getPageParseConfig(): Array<PageParseConfig> {
      return [
        { name: 'title',   selector: '.storybox h1', type: Type.TEXT },
        { name: 'img',     selector: '.storybox .imgholder  img', type: Type.IMAGE },
        { name: 'details', selector: '.storybox .content-body > p', type: Type.TEXT },
      ]
    }

    getTestPageUrl(): String {
        return "https://www.dainikstatesmannews.com/india/babul-assures-ju-attackers-mother-of-no-harm/8988"
    }

    getStoryListConfig():Array<StoryListConfig>{
        return [
            {stream: STREAM.COUNTRY, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/india'},
            {stream: STREAM.INTERNATIONAL, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/world'},
            {stream: STREAM.STATE, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/bengal'},
            {stream: STREAM.ENTERTAINMENT, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/binodan'},
            {stream: STREAM.SPORTS, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/sports'},
            {stream: STREAM.EDITORIAL, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/editorial'},
            {stream: STREAM.FOOD, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/food'},
            {stream: STREAM.OTHER, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/bichitra'},
        ]
    } 
}
