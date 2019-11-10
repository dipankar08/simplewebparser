import { BaseWebReader, WordPressWebReader, ArticleWebReader, News18WebReader, OneIndiaWebReader, DefaultWebReader, BartamanWebReader } from "./web_reader";
import { LANG, STREAM, CATEGORIES } from "../CONST";
import _ = require("lodash");
import { WebElementParseConfig, } from "./htmlparser"
import { BaseRSSReader } from "../rss/rss_reader";

export type WebLink ={
    url:string,
    stream:STREAM,
    selector?:string
}

export type WebEntryPoint = {
    name:string,                // name of the paper
    lang: LANG;                 // define language
    profile_img?:string,        // profile images

    is_active:boolean,          // do we want to show the full news.
    is_partner:boolean,         // indicate do we have a partnership.

    type?:BaseWebReader,         // web reader type
    rsstype?:BaseRSSReader,      // rss type
    rss_feed_url_end?:string // indicate the feed endpoint if it support feeds.
    is_rss_feed?:boolean // indicate if the links are RSS Feed. 

    links:Array<WebLink>        // parsing links.
    storyParseConfig?:Array<WebElementParseConfig> // this will override the parent config in WebReader.
    link_selector?:string // override config link selector
}