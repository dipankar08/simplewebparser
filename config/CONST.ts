import { StringifyOptions } from "querystring";
import { StringAnyMap } from "../crawler";

const config = require('config');

export const LIMIT:number = 10;
export enum LANG{
    BENGALI,
    ENGLISH,
    HINDI,
}

export enum STREAM {
    NONE,
    HEADLINE,
    FIRST_PAGE,
    STATE,
    COUNTRY,
    INTERNATIONAL,
    BUSINESS,
    SCIENCE,
    ENTERTAINMENT,
    MOVIE,
    LIFESTYLE,
    TECHNOLOGY,
    GADGETS,
    SPORTS,
    MARKETS,
    SHORT_STORY,
    TRAVEL,
    WOMEN,
    OFF_BEAT,
    TOUR,
    EDUCATION,
    EDITORIAL,
    HEALTH,
    FOOD,
    OTHER,
    BANGLADESH,
    HOROSCOPE,
    POLITICS,
    VIRAL,
    DOOARS,
    LS_MONEY,
    LS_VIRAL,
    ASTROLOGY
}

export type ListConfig = {
    url:String,
    selectors:Array<String>
}

export type StoryListConfig = {
    url:string,
    selector:string,
    limit?:number,
    stream:STREAM,
    extra?:StringAnyMap
}

export const DB_URL = config.get("isProd")? 'http://simplestore.dipankar.co.in/api/news' : 'http://simplestore.dipankar.co.in/api/news1'
export const PROFILE_URL = config.get("isProd")? 'http://simplestore.dipankar.co.in/api/news_profile':'http://simplestore.dipankar.co.in/api/news_profile1'
console.log(`[INFO] Using Root URL: ${DB_URL}`)
