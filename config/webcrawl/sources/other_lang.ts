import { WebEntryPoint } from "../web_entrypoints";
import { LANG, STREAM } from "../../CONST";
import { DefaultWebReader, ArticleWebReader, BartamanWebReader, News18WebReader } from "../web_reader";
import { WebElementType } from "../htmlparser";
import { HTMLEnCodedRssReader, WordPressRssReader, RssTwoReader } from "../rss_reader";

export let urlList:Array<WebEntryPoint> = [
 // It has RSS - Please move it RSS.
 { 
    name:'Dharitri',
    profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/dharitri.png',
    type:new News18WebReader(),
    lang:LANG.IN_ORIYA,
    is_active:true,
    is_partner:false,
    rss_feed_url_end: '/feed/',
    links:[
        {stream: STREAM.FIRST_PAGE, url:'https://www.dharitri.com/category/state-news/'},
        {stream: STREAM.NATIONAL, url:'https://www.dharitri.com/category/national-news/'},
        {stream: STREAM.FIRST_PAGE, url:'https://www.dharitri.com/category/metro-news/'},
        {stream: STREAM.INTERNATIONAL, url:'https://www.dharitri.com/category/international-news/'},
        {stream: STREAM.SPORTS, url:'https://www.dharitri.com/category/sports-news/'},
        {stream: STREAM.TRAVEL, url:'https://www.dharitri.com/category/fursat/'},
        {stream: STREAM.BUSINESS, url:'https://www.dharitri.com/category/business/'},
        {stream: STREAM.LIFESTYLE, url:'https://www.dharitri.com/category/lifestyle/'},
        {stream: STREAM.ENTERTAINMENT, url:'https://www.dharitri.com/category/entertainment/'},
        {stream: STREAM.CRIME, url:'https://www.dharitri.com/category/crime-news/'},

    ],
    storyParseConfig:[
        { name: 'title', selector: 'article h1', type: WebElementType.TEXT },
        { name: 'img', selector: 'article .post-thumbnail img', type: WebElementType.IMAGE },
        { name: 'details', selector: 'article.post p', type: WebElementType.TEXT },
    ],
    link_selector: '.thumbnail a',
},

    { 
        name:'dinamani',
        lang:LANG.IN_TAMIL,
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/dinamani.jgp',
        rsstype:new HTMLEnCodedRssReader(),
        is_rss_feed: true,
        is_active:true,
        is_partner:false,
        
        links:[
            {stream: STREAM.SPORTS, url:'https://www.dinamani.com/%E0%AE%B5%E0%AE%BF%E0%AE%B3%E0%AF%88%E0%AE%AF%E0%AE%BE%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AF%81/%E0%AE%9A%E0%AF%86%E0%AE%AF%E0%AF%8D%E0%AE%A4%E0%AE%BF%E0%AE%95%E0%AE%B3%E0%AF%8D/rssfeed/?id=480&getXmlFeed=true'},
        ],
    },
    { 
        name:'Asomiya Pratidin',
        lang:LANG.IN_ASSAMESE,
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/asomiyapratidin.jgp',
        is_active:true,
        is_partner:false,
        
        links:[
            {stream: STREAM.SPORTS, url:'https://www.asomiyapratidin.in/category/homepage/feed'},
            {stream: STREAM.SPORTS, url:'https://www.asomiyapratidin.in/category/guwahati/feed'},
            {stream: STREAM.SPORTS, url:'https://www.asomiyapratidin.in/category/assam/feed'},
            {stream: STREAM.SPORTS, url:'https://www.asomiyapratidin.in/category/north-east/feed'},
            {stream: STREAM.SPORTS, url:'https://www.asomiyapratidin.in/category/world/feed'},
            {stream: STREAM.SPORTS, url:'https://www.asomiyapratidin.in/category/sports/feed'},
            {stream: STREAM.SPORTS, url:'https://www.asomiyapratidin.in/category/technology/feed'},
            {stream: STREAM.SPORTS, url:'https://www.asomiyapratidin.in/category/business/feed'}
        ],
        is_rss_feed: true,
        rsstype:new WordPressRssReader(),
    },
    { 
        name:'Gujarat Samachar',
        lang:LANG.IN_GUJARATI,
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/gujaratsamachar.jgp',
        is_active:true,
        is_partner:false,
        
        links:[
            {stream: STREAM.FIRST_PAGE, url:'https://www.gujaratsamachar.com/rss/top-stories'},
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