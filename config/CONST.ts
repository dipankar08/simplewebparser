import { StringifyOptions } from "querystring";
import { StringAnyMap } from "../config/utils/types";
import { SummeryBuilder, SummaryStrategy } from "./summary/SummaryManager";

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
    COMEDY,
    NATIONAL
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
// THIS MUST BE SAME AS CLIENT.
export type Content = {
    title:string,
    img:string,
    details:string ,
    summary?:string,
    url:string,
    hostname:string,
    lang:string,
    stream:string,
    is_active:string;
    is_partner:boolean;
}
// THIS MUST BE SAME AS CLIENT.
export type Profile = {
    title:string,
    lang:string,
    hostname:string,
    img:string,
    streams:Array<string>,
    count_followers:number,
    is_active:string
}


export function validate(c:Content){
    return c && c.url && c.title && c.img && c.title.length > 10 && c.url.length >10 && c.details.length > 20;
}


export function buildContent(dict):Content{
    let sb = new SummeryBuilder()
    switch(dict.lang){
        case LANG.IN_BENGALI:
            dict['summary']= sb.buildSummary(dict.details, SummaryStrategy.BENAGLI)
            break;
        case LANG.IN_ENGLISH:
            dict['summary']= sb.buildSummary(dict.details, SummaryStrategy.ENGLISH)
            break;
        case LANG.IN_HINDI:
            dict['summary']= sb.buildSummary(dict.details, SummaryStrategy.HINDI)
            break;
    }

    return {
        title: dict.title,
        img:dict.img,
        details:dict.details,
        summary:dict.summary,
        is_active:dict.is_active,
        url:dict.url,
        hostname:dict.hostname,
        lang:LANG[dict.lang],
        stream:STREAM[dict.stream],
        is_partner: dict.is_partner,
    }
}

export const DB_URL = config.get("isProd")? 'http://simplestore.dipankar.co.in/api/news1' : 'http://simplestore.dipankar.co.in/api/news1'
export const PROFILE_URL = config.get("isProd")? 'http://simplestore.dipankar.co.in/api/news_profile1':'http://simplestore.dipankar.co.in/api/news_profile1'
console.log(`[INFO] Using Root URL: ${DB_URL}`)
