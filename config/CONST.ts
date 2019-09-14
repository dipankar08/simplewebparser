import { StringifyOptions } from "querystring";

export const LIMIT:number =2;
export enum LANG{
    BENGALI,
    ENGLISH,
    HINDI,
}

export enum STREAM{
    HEADLINE,
    FIRST_PAGE,
    COUNTRY,
    STATE,
    INTERNATIONAL,
    BUSINESS,
    SCIENCE,
    ENTERTAINMENT,
    MOVIE,
    LIFESTYLE
}

export type ListConfig = {
    url:String,
    selectors:Array<String>
}