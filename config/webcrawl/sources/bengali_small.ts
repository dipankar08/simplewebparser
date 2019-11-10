import { WebEntryPoint } from "../web_entrypoints";
import { LANG, STREAM } from "../../CONST";
import { DefaultWebReader, ArticleWebReader, WordPressWebReader } from "../web_reader";
import { WebElementType } from "../htmlparser";

export let urlList:Array<WebEntryPoint> = [
    {
        name:'Darkari Tips',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/darkari_tips.png',
        type:new WordPressWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:true,
        links:[
            {stream:STREAM.HEADLINE, url:'https://www.darkaritips.com/headline/'},
            {stream:STREAM.HEALTH, url:'https://www.darkaritips.com/category/health-message/'},
            {stream:STREAM.LIFESTYLE, url:'https://www.darkaritips.com/category/lifestyle/'},
        ]
    },
    {
        name:'GNE Bangla',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/gnebangla.png',
        type:new WordPressWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:true,
        links:[
            {stream:STREAM.VIRAL, url:'https://gnebangla.in/category/viral-news/'},
            {stream:STREAM.STATE, url:'https://gnebangla.in/category/local-news/'},
            {stream:STREAM.STATE, url:'https://gnebangla.in/category/west-bengal/'},
            {stream:STREAM.NATIONAL, url:'https://gnebangla.in/category/national-news/'},
            {stream:STREAM.INTERNATIONAL, url:'https://gnebangla.in/category/international/'},
            {stream:STREAM.TECHNOLOGY, url:'https://gnebangla.in/category/technology/'},
            {stream:STREAM.SPORTS, url:'https://gnebangla.in/category/sports-news/'},
            {stream:STREAM.ENTERTAINMENT, url:'https://gnebangla.in/category/entertainment/'},
        ]
    },
    // TODO: PLEASE FIX THIS
    {
        name:'Kolkata 24X7',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/kolkata_24x7.png',
        type:new WordPressWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:false,
        is_partner:true,
        links:[
            {stream: STREAM.HEADLINE, url:'https://www.kolkata24x7.com/'},
            {stream: STREAM.FIRST_PAGE, url:'https://www.kolkata24x7.com/'},
            {stream: STREAM.STATE, url:'https://www.kolkata24x7.com/category/kolkata/'},
            {stream: STREAM.NATIONAL, url:'https://www.kolkata24x7.com/category/national-news/'},
            {stream: STREAM.STATE, url:'https://www.kolkata24x7.com/category/west-bengal/'},
            {stream: STREAM.INTERNATIONAL, url:'https://www.kolkata24x7.com/category/international-news/'},
            {stream: STREAM.TECHNOLOGY, url:'https://www.kolkata24x7.com/category/tech-news/'},
        ]
    },
    {
        name:'Aaj Bangla',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/aj_bangla_tv.png',
        type:new WordPressWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:false,
        links:[
            {stream: STREAM.COUNTRY, url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%a6%e0%a7%87%e0%a6%b6/'},
            {stream: STREAM.HEADLINE, url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%95%e0%a6%b2%e0%a6%95%e0%a6%be%e0%a6%a4%e0%a6%be/'},
            {stream: STREAM.STATE, url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%b0%e0%a6%be%e0%a6%9c%e0%a7%8d%e0%a6%af/'},
            {stream: STREAM.INTERNATIONAL, url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%8d%e0%a6%ac/'},
            {stream: STREAM.BANGLADESH, url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%be%e0%a6%82%e0%a6%b2%e0%a6%be%e0%a6%a6%e0%a7%87%e0%a6%b6/'},
            {stream: STREAM.SPORTS, url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%96%e0%a7%87%e0%a6%b2%e0%a6%be/'},
            {stream: STREAM.ENTERTAINMENT, url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%bf%e0%a6%a8%e0%a7%8b%e0%a6%a6%e0%a6%a8/'},
            {stream: STREAM.HOROSCOPE, url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c%e0%a6%95%e0%a7%87%e0%a6%b0-%e0%a6%a6%e0%a6%bf%e0%a6%a8/'},
            {stream: STREAM.LIFESTYLE, url:'https://www.aajbangla.in/category/%e0%a6%b2%e0%a6%be%e0%a6%87%e0%a6%ab%e0%a6%b8%e0%a7%8d%e0%a6%9f%e0%a6%be%e0%a6%87%e0%a6%b2/'},
            {stream: STREAM.TOUR, url:'https://www.aajbangla.in/category/%e0%a6%ad%e0%a7%8d%e0%a6%b0%e0%a6%ae%e0%a6%a3/'},
        ]
    },
    {
        name:'Totka 24X7',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/totka_24x7.png',
        type:new WordPressWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:true,
        links:[
            {stream:STREAM.LIFESTYLE, url:'https://www.totka24x7.com/archives/category/lifestyle'},
            {stream:STREAM.BUSINESS, url:'https://www.totka24x7.com/archives/category/earn-money'},
            {stream:STREAM.VIRAL, url:'https://www.totka24x7.com/archives/category/viral'},
            {stream:STREAM.ENTERTAINMENT, url:'https://www.totka24x7.com/archives/category/entertainment'},
            {stream:STREAM.INTERNATIONAL, url:'https://www.totka24x7.com/archives/category/international'},
            {stream:STREAM.TECHNOLOGY, url:'https://www.totka24x7.com/archives/category/technology'},
            {stream:STREAM.HEADLINE, url:'https://www.totka24x7.com/archives/category/headlines'},
            {stream:STREAM.ASTROLOGY, url:'https://www.totka24x7.com/archives/category/astrology'},
            {stream:STREAM.OFF_BEAT, url:'https://www.totka24x7.com/archives/category/different-news'},
        ]
    },

    {
        name:'Bharat Barta',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/bharat_barta.png',
        type:new WordPressWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:true,
        links:[
            {stream:STREAM.VIRAL, url:'https://www.bharatbarta.com/category/vairal/'},
            {stream:STREAM.ENTERTAINMENT, url:'https://www.bharatbarta.com/category/entertainment/'},
            {stream:STREAM.FIRST_PAGE, url:'https://www.bharatbarta.com/category/news/'},
            {stream:STREAM.POLITICS, url:'https://www.bharatbarta.com/category/politics-news/'},
            {stream:STREAM.LIFESTYLE, url:'https://www.bharatbarta.com/category/lifestyle/'},
            {stream:STREAM.TECHNOLOGY, url:'https://www.bharatbarta.com/category/technology/'},
            {stream:STREAM.SPORTS, url:'https://www.bharatbarta.com/category/sports/'},
            {stream:STREAM.OFF_BEAT, url:'https://www.bharatbarta.com/category/bb-special/'},
        ]
    },

    {
        name:'Banglar Pran',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/banglar_pran.png',
        type:new WordPressWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:true,
        links:[
            {stream:STREAM.BANGLADESH, url:'https://www.banglarpran.com/archives/category/dooars'},
            {stream:STREAM.STATE, url:'https://www.banglarpran.com/archives/category/state'},
            {stream:STREAM.POLITICS, url:'https://www.banglarpran.com/archives/category/politics'},
            {stream:STREAM.COUNTRY, url:'https://www.banglarpran.com/archives/category/india'},
            {stream:STREAM.INTERNATIONAL, url:'https://www.banglarpran.com/archives/category/internation'},
            {stream:STREAM.ENTERTAINMENT, url:'https://www.banglarpran.com/archives/category/entertrainment'},
            {stream:STREAM.LIFESTYLE, url:'https://www.banglarpran.com/archives/category/lifestyle'},
        ]
    },
]