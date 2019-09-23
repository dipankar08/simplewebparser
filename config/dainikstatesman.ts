
import {BaseConfig} from "./baseconfig";
import { PageParseConfig, Type } from "../crawler";
import { LANG, STREAM, ListConfig } from "./CONST";

export class DainikStatesmanConfig extends BaseConfig {
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
        { name: 'title',   selector: '.storybox h1', type: Type.TEXT },
        { name: 'img',     selector: '.storybox .imgholder  img', type: Type.IMAGE },
        { name: 'details', selector: '.storybox .content-body > p', type: Type.TEXT },
      ]
    }

    getTestPageUrl(): String {
        return "https://www.dainikstatesmannews.com/india/babul-assures-ju-attackers-mother-of-no-harm/8988"
    }

    getListConfig(stream: STREAM): ListConfig{
        switch(stream){
            case STREAM.COUNTRY: return {
                'url':'https://www.dainikstatesmannews.com/india',
                'selectors':['.newslistbx h3 > a']
            }
            case STREAM.INTERNATIONAL: return {
                'url':'dainikstatesmannews.com/world',
                'selectors':['.newslistbx h3 > a']
            }
            case STREAM.STATE: return {
                'url':'https://www.dainikstatesmannews.com/bengal',
                'selectors':['.newslistbx h3 > a']
            }
            case STREAM.ENTERTAINMENT: return {
                'url':'https://www.dainikstatesmannews.com/binodan',
                'selectors':['.newslistbx h3 > a']
            }
            case STREAM.SPORTS: return {
                'url':'https://www.dainikstatesmannews.com/sports',
                'selectors':['.newslistbx h3 > a']
            }
            case STREAM.EDITORIAL: return {
                'url':'https://www.dainikstatesmannews.com/editorial',
                'selectors':['.newslistbx h3 > a']
            }
            case STREAM.FOOD: return {
                'url':'https://www.dainikstatesmannews.com/food',
                'selectors':['.newslistbx h3 > a']
            }
            case STREAM.OTHER: return {
                'url':'https://www.dainikstatesmannews.com/bichitra',
                'selectors':['.newslistbx h3 > a']
            }
        }
    } 
}
