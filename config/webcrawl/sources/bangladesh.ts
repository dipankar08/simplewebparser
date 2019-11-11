import { WebEntryPoint } from "../web_entrypoints";
import { LANG, STREAM } from "../../CONST";
import { DefaultWebReader, ArticleWebReader, BartamanWebReader } from "../web_reader";
import { WebElementType } from "../htmlparser";
import { RssTwoReader } from "../rss_reader";

export let urlList:Array<WebEntryPoint> = [
    {
        name:'Templates',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/aajkaal.png',
        type:new DefaultWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:false,
        is_partner:false,
        links:[
            {stream: STREAM.KOLKATA, url:'https://www.aajkaal.in/kolkata'},
            {stream: STREAM.STATE, url:'https://www.aajkaal.in/state'},
        ],
        link_selector:'.image-holder a',
        storyParseConfig:[
            { name: 'title',   selector: '.blog-detail-banner h1', type: WebElementType.TEXT },
            { name: 'img',     selector: '.blog-detail-banner .image-holder  img', type: WebElementType.IMAGE },
            { name: 'details', selector: '.blog-detail  p', type: WebElementType.TEXT },
        ]
    },
    { 
        name:'Gujarat Samachar',
        lang:LANG.IN_GUJARATI,
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/gujaratsamachar.jgp',
        is_active:false,
        is_partner:false,
        
        links:[
            {stream: STREAM.HEADLINE, url:'https://www.gujaratsamachar.com/rss/top-stories'},
            {stream: STREAM.TECHNOLOGY, url:'https://www.gujaratsamachar.com/rss/category/science-technology'},
            {stream: STREAM.LIFESTYLE, url:'https://www.gujaratsamachar.com/rss/category/relationship'},
            {stream: STREAM.LIFESTYLE, url:'https://www.gujaratsamachar.com/rss/category/lifestyle-fashion'},
            {stream: STREAM.HEALTH, url:'https://www.gujaratsamachar.com/rss/category/health'},
            {stream: STREAM.ASTROLOGY, url:'https://www.gujaratsamachar.com/rss/category/astro'},
            {stream: STREAM.ENTERTAINMENT, url:'https://www.gujaratsamachar.com/rss/category/entertainment'},
            {stream: STREAM.SPORTS, url:'https://www.gujaratsamachar.com/rss/category/sports'},
            {stream: STREAM.BUSINESS, url:'https://www.gujaratsamachar.com/rss/category/business'},
            {stream: STREAM.INTERNATIONAL, url:'https://www.gujaratsamachar.com/rss/category/international'},
            {stream: STREAM.NATIONAL, url:'https://www.gujaratsamachar.com/rss/category/national'},
        ],
        is_rss_feed: true,
        rsstype:new RssTwoReader(),
    },
]