import { WebEntryPoint } from "../web_entrypoints";
import { LANG, STREAM } from "../../CONST";
import { News18WebReader, OneIndiaWebReader } from "../web_reader";
import { WebElementType } from "../htmlparser";

export let urlList:Array<WebEntryPoint> = [
    {
        name:'OneIndia Gujrati',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/oneindia.png',
        type:new OneIndiaWebReader(),
        lang:LANG.IN_GUJARATI,
        is_active:true,
        is_partner:false,
        links:[
            {stream: STREAM.HEADLINE, url:'https://gujarati.oneindia.com/news/'},
            {stream: STREAM.ENTERTAINMENT, url:'https://gujarati.oneindia.com/movies/'},
            {stream: STREAM.ASTROLOGY, url:'https://gujarati.oneindia.com/astrology/'},
            {stream: STREAM.TECHNOLOGY, url:'https://gujarati.oneindia.com/auto/'},
            {stream: STREAM.TRAVEL, url:'https://gujarati.oneindia.com/travel/'},
            {stream: STREAM.BUSINESS, url:'https://gujarati.oneindia.com/business/'},
        ]
    },
    {
        name:'OneIndia Bengali',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/oneindia.png',
        type:new OneIndiaWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:false,
        links:[
            {stream: STREAM.FIRST_PAGE, url:'https://bengali.oneindia.com/news/kolkata/'},
            {stream: STREAM.COUNTRY, url:'https://bengali.oneindia.com/news/india/'},
            {stream: STREAM.FIRST_PAGE, url:'https://bengali.oneindia.com/news/kolkata/'},
            {stream: STREAM.STATE, url:'https://bengali.oneindia.com/news/west-bengal/'},
            {stream: STREAM.INTERNATIONAL, url:'https://bengali.oneindia.com/news/international/'},
            {stream: STREAM.ENTERTAINMENT, url:'https://bengali.oneindia.com/news/movies/'},
        ]
    }, 
    {
        name:'OneIndia Hindi',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/oneindia.png',
        type:new OneIndiaWebReader(),
        lang:LANG.IN_HINDI,
        is_active:true,
        is_partner:false,
        links:[
            {stream: STREAM.FIRST_PAGE, selector:'#containerMain .newsBlock a',url:'https://hindi.oneindia.com/'},
            {stream: STREAM.COUNTRY, url:'https://hindi.oneindia.com/news/india/'},
            {stream: STREAM.INTERNATIONAL, url:'https://hindi.oneindia.com/news/international/'},
        ]
    },
]