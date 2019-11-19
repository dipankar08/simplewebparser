import { StringifyOptions } from "querystring";
import { StringAnyMap } from "../config/utils/types";
import { SummeryBuilder, SummaryStrategy } from "./summary/SummaryManager";
import { d, e } from "./utils/dlog";
import { Analytics } from "../analytics";

const config = require('config');

export const TELEMETRY_APP_NAME= "crawler2"

export const TELEMETRY_NETWORK_ERROR = "TELEMETRY_NETWORK_ERROR"
export const TELEMETRY_RSS_LINK_BROKEN = "TELEMETRY_RSS_LINK_BROKEN"
export const TELEMETRY_RSS_IMAGE_NOT_FOUND = "TELEMETRY_RSS_IMAGE_NOT_FOUND"
export const TELEMETRY_RSS_LINK_HAS_EMPTY_DATA = "TELEMETRY_RSS_LINK_HAS_EMPTY_DATA"
export const TELEMETRY_MISSING_SUMMARY ="TELEMETRY_MISSING_SUMMARY"

export const TELEMETRY_HTML_ROOT_LINK_HAS_NO_LISTING = "TELEMETRY_HTML_ROOT_LINK_HAS_NO_LISTING"
export const TELEMETRY_HTML_EXCEPTION_WHILE_FETCHING_STORY = "TELEMETRY_HTML_EXCEPTION_WHILE_FETCHING_STORY"

export const TELEMETRY_DB_IGNORE_INVALID_DATA= "TELEMETRY_DB_IGNORE_INVALID_DATA"
export const TELEMETRY_DB_ERROR_SAVING=  "TELEMETRY_DB_ERROR_SAVING"

export const TELEMETRY_CRAWLER_EMPTY_DATA=  "TELEMETRY_CRAWLER_EMPTY_DATA"
export const TELEMETRY_CRAWLER_EXCEPTION_FOR_PUBLISHER=  "TELEMETRY_CRAWLER_EXCEPTION_FOR_PUBLISHER"



export const LIMIT:number = 10;


export enum LANG{
    IN_ENGLISH,
    IN_HINDI,

    IN_BENGALI,
    IN_ASSAMESE,
    IN_ORIYA,

    IN_MARATHI,
    IN_GUJARATI,

    IN_TAMIL,
    IN_TELUGU,
    IN_MALAYALAM,

    BD_BENGALI,
    BD_ENGLISH
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
    NATIONAL,
    CRIME,
    RELIGION,
    NORTH_BENGAL,
    BIHAR,
    GK,
    SPORTS_FEATURE,
    SPORTS_MOMENT,
    UTTRAKHAND,
    UTTAR_PRADESH
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


export function validate(c:Content):boolean{
    if(!c){
        e('Missing content'); return false;
    }
    if(!( c.img && c.img.length > 5)){
        e('Missing img'); return false;
    }
    if(!( c.title && c.title.length > 5)){
        e('Missing title'); return false;
    }
    if(!( c.details && c.details.length > 5)){
        e('Missing details'); return false;
    }
    if(!( c.summary && c.summary.length > 100)){
        Analytics.hit_tracker({'action':TELEMETRY_MISSING_SUMMARY,url:c.url});
        e('Missing summary'); return false;
    }
    if(!( c.hostname && c.hostname.length > 5)){
        e('Missing hostname'); return false;
    }
    if(!( c.stream && c.stream.length > 0)){
        e('Missing stream'); return false;
    }
    if(!( c.lang && c.lang.length > 5)){
        e('Missing lang'); return false;
    }
    return true;
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
        default:
            dict['summary']= sb.buildSummary(dict.details, SummaryStrategy.DEFAULT)
    }

    let cont:Content = {
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
    if(validate(cont)){
        return cont;
    } else{
        return null;
    }
}

export const DB_URL = config.get("isProd")? 'http://simplestore.dipankar.co.in/api/news1' : 'http://simplestore.dipankar.co.in/api/news_test'
export const PROFILE_URL = config.get("isProd")? 'http://simplestore.dipankar.co.in/api/news_profile1':'http://simplestore.dipankar.co.in/api/news_profile_test'
d(`Using Root URL: ${DB_URL}`)
