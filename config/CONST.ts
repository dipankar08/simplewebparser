import { StringifyOptions } from "querystring";
import { StringAnyMap } from "../config/utils/types";

const config = require('config');

export const LIMIT:number = 10;
export enum LANG{
    IN_BENGALI,
    IN_ENGLISH,
    IN_HINDI,
}

export enum CATEGORIES {
    NEWS,
    VIRAL,
    VIDEO,
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
    ASTROLOGY,
    FESTIVE,
    MYTHOLOGY,
    KOLKATA,
    RECIPE,
    LATEST,
    JOB,
    TRIPURA,
    YOUTUBE,
    AUDIO_STORY,
    MOTIVATIONAL,
    COMEDY
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

export type Content = {
    title:string,
    img:string,
    details:string ,
    url:string,
    hostname:string,
    lang:LANG,
    stream:STREAM,
}
export function validate(c:Content){
    return c && c.url && c.title && c.img && c.title.length > 10 && c.url.length >10 && c.details.length > 20;
}


export const DB_URL = config.get("isProd")? 'http://simplestore.dipankar.co.in/api/news' : 'http://simplestore.dipankar.co.in/api/news1'
export const PROFILE_URL = config.get("isProd")? 'http://simplestore.dipankar.co.in/api/news_profile':'http://simplestore.dipankar.co.in/api/news_profile1'
console.log(`[INFO] Using Root URL: ${DB_URL}`)
