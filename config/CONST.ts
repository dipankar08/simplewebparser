import { StringifyOptions } from "querystring";

export const LIMIT:number = 5;
export enum LANG{
    BENGALI,
    ENGLISH,
    HINDI,
}

export enum STREAM{
    NONE,
    HEADLINE,
    FIRST_PAGE,
    COUNTRY,
    STATE,
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
}