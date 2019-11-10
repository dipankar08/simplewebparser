import { WebEntryPoint } from "../web_entrypoints";
import { LANG, STREAM } from "../../CONST";
import { DefaultWebReader, ArticleWebReader, BartamanWebReader, WordPressWebReader } from "../web_reader";
import { WebElementType } from "../htmlparser";
import { WordPressRssReader } from "../../rss/rss_reader";

export let urlList:Array<WebEntryPoint> = [
    {
        name:'Humara Bihar',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/humarabihar.png',
        lang:LANG.IN_HINDI,
        is_active:true,
        is_partner:true,

        links:[
            {stream: STREAM.FIRST_PAGE, url:'https://humarabihar.in/feed'},
            {stream: STREAM.STATE, url:'https://humarabihar.in/news-from-districts/feed'},
            {stream: STREAM.POLITICS, url:'https://humarabihar.in/politics/feed'},
            {stream: STREAM.BIHAR, url:'https://humarabihar.in/culture-of-bihar/feed'},
            {stream: STREAM.OFF_BEAT, url:'https://humarabihar.in/positive-news/feed'},
            {stream: STREAM.BIHAR, url:'https://humarabihar.in/festival-of-bihar/feed'},
            {stream: STREAM.CRIME, url:'https://humarabihar.in/crime/feed'},
            {stream: STREAM.ENTERTAINMENT, url:'https://humarabihar.in/entertainment/feed'},
            {stream: STREAM.BIHAR, url:'https://humarabihar.in/bihar-news/feed'},
            {stream: STREAM.HEALTH, url:'https://humarabihar.in/health/feed'},
            {stream: STREAM.TECHNOLOGY, url:'https://humarabihar.in/knowledge/feed'},
        ],
        is_rss_feed:true,
        rsstype:new WordPressRssReader(),
    },
    {
        name:'Bebak News',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/bebaknews.png',
        lang:LANG.IN_HINDI,
        is_active:true,
        is_partner:true,

        links:[
            {stream: STREAM.FIRST_PAGE, url:'http://www.bebaknews.in/feed'},
            {stream: STREAM.POLITICS, url:'https://www.bebaknews.in/politics/feed'},
            {stream: STREAM.NATIONAL, url:'https://www.bebaknews.in/national-international/feed'},
            {stream: STREAM.STATE, url:'https://www.bebaknews.in/state-news/feed'},
            {stream: STREAM.SPORTS, url:'https://www.bebaknews.in/sports/feed'},
            {stream: STREAM.CRIME, url:'https://www.bebaknews.in/crime/feed'},
            {stream: STREAM.LIFESTYLE, url:'https://www.bebaknews.in/lifestyle/health/feed'},
            {stream: STREAM.LIFESTYLE, url:'https://www.bebaknews.in/lifestyle/manoranjan/feed'},
            {stream: STREAM.GK, url:'https://www.bebaknews.in/general-knowleddge/feed'},
            {stream: STREAM.RELIGION, url:'https://www.bebaknews.in/religion/feed'}
        ],
        is_rss_feed:true,
        rsstype:new WordPressRssReader(),
    },
    {
        name:'Bharatiyasampradayalu',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/bharatiyasampradayalu.png',
        lang:LANG.IN_TELUGU,
        is_active:true,
        is_partner:true,

        links:[
            {stream: STREAM.FIRST_PAGE, url:'http://bharatiyasampradayalu.com/feed/'},
        ],
        is_rss_feed:true,
        rsstype:new WordPressRssReader(),
    },
    {
        name:'100 MB Sports',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/100mbsports.png',
        lang:LANG.IN_HINDI,
        is_active:true,
        is_partner:true,

        links:[
            {stream: STREAM.FIRST_PAGE, url:'https://hi.100mbsports.com/feed/'},
            {stream: STREAM.SPORTS, url:'https://hi.100mbsports.com/category/news_hi/feed/'},
            {stream: STREAM.SPORTS_FEATURE, url:'https://hi.100mbsports.com/category/features_hi/feed/'},
            {stream: STREAM.SPORTS_MOMENT, url:'https://hi.100mbsports.com/category/golden-moment_hi/feed/'},
        ],
        is_rss_feed:true,
        rsstype:new WordPressRssReader(),
    },
    {
        name:'Caai News',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/caai.png',
        lang:LANG.IN_HINDI,
        is_active:true,
        is_partner:true,

        links:[
            {stream: STREAM.FIRST_PAGE, url:'http://www.caai.news/feed/'},
            {stream: STREAM.UTTRAKHAND, url:'http://www.caai.news/%e0%a4%89%e0%a4%a4%e0%a5%8d%e0%a4%a4%e0%a4%b0%e0%a4%be%e0%a4%96%e0%a4%82%e0%a4%a1/feed/'},
            {stream: STREAM.UTTAR_PRADESH, url:'http://www.caai.news/%e0%a4%89%e0%a4%a4%e0%a5%8d%e0%a4%a4%e0%a4%b0-%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a4%a6%e0%a5%87%e0%a4%b6/feed/'},
            {stream: STREAM.CRIME, url:'http://www.caai.news/%e0%a4%95%e0%a5%8d%e0%a4%b0%e0%a4%be%e0%a4%87%e0%a4%ae/feed/'},
            {stream: STREAM.NATIONAL, url:'http://www.caai.news/%e0%a4%a6%e0%a5%87%e0%a4%b6/feed/'},
            {stream: STREAM.MOVIE, url:'http://www.caai.news/%e0%a4%ab%e0%a4%bf%e0%a4%b2%e0%a5%8d%e0%a4%ae%e0%a5%80/feed/'},
            {stream: STREAM.POLITICS, url:'http://www.caai.news/%e0%a4%b0%e0%a4%be%e0%a4%9c%e0%a4%a8%e0%a5%80%e0%a4%a4%e0%a4%bf/feed/'},
            {stream: STREAM.LIFESTYLE, url:'http://www.caai.news/%e0%a4%b2%e0%a4%be%e0%a4%87%e0%a4%ab%e0%a4%b8%e0%a5%8d%e0%a4%9f%e0%a4%be%e0%a4%87%e0%a4%b2/feed/'},
            {stream: STREAM.HEALTH, url:'http://www.caai.news/%e0%a4%b8%e0%a5%8d%e0%a4%b5%e0%a4%be%e0%a4%b8%e0%a5%8d%e0%a4%a5%e0%a5%8d%e0%a4%af/feed/'},
            {stream: STREAM.SPORTS, url:'http://www.caai.news/%e0%a4%96%e0%a5%87%e0%a4%b2/feed/'},
        ],
        is_rss_feed:true,
        rsstype:new WordPressRssReader(),
    },
    {
        name:'News Kranti',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/newskranti.png',
        lang:LANG.IN_HINDI,
        is_active:true,
        is_partner:true,
        links:[
            {stream: STREAM.FIRST_PAGE, url:'https://newskranti.com/feed/'},
            {stream: STREAM.NATIONAL, url:'https://newskranti.com/category/national/feed/'},
            {stream: STREAM.INTERNATIONAL, url:'https://newskranti.com/category/world/feed/'},
            {stream: STREAM.POLITICS, url:'https://newskranti.com/category/politics-2/feed/'},
            {stream: STREAM.STATE, url:'https://newskranti.com/category/state/feed'},
            {stream: STREAM.BUSINESS, url:'https://newskranti.com/category/business/feed/'},
            {stream: STREAM.SPORTS, url:'https://newskranti.com/category/sport/feed/'},
            {stream: STREAM.TECHNOLOGY, url:'https://newskranti.com/category/technology/feed/'},
            {stream: STREAM.LIFESTYLE, url:'https://newskranti.com/category/lifestyle/feed/'},
        ],
        is_rss_feed:true,
        rsstype:new WordPressRssReader(),
    },
]