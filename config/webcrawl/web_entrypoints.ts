import { BaseWebReader, WordPressWebReader, ArticleWebReader, News18WebReader, OneIndiaWebReader, DefaultWebReader, BartamanWebReader } from "./web_reader";
import { LANG, STREAM, CATEGORIES } from "../CONST";
import {WebCrawler} from "./web_crawl"
import { Analytics } from "../../analytics";
import { getHostNameFromUrl, updateProfileToDb } from "../utils/db_helper";
import _ = require("lodash");
import { WebElementParseConfig, WebElementType } from "./htmlparser"
import { WordPressRssReader, BaseRSSReader, HTMLEnCodedRssReader } from "../rss/rss_reader";

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

export var urlList:Array<WebEntryPoint> = [

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
        name:'Bartaman',
        profile_img:'https://bartamanpatrika.com/images/logo.png',
        type:new BartamanWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:false,
        links:[
            {stream: STREAM.HEADLINE, url:'https://bartamanpatrika.com/'},
            {stream: STREAM.FIRST_PAGE, url:'https://bartamanpatrika.com/section.php?cID=12'},
            {stream: STREAM.STATE, url:'https://bartamanpatrika.com/section.php?cID=13'},
            {stream: STREAM.COUNTRY, url:'https://bartamanpatrika.com/section.php?cID=14'},
            {stream: STREAM.INTERNATIONAL, url:'https://bartamanpatrika.com/section.php?cID=15'},
            {stream: STREAM.SPORTS, url:'https://bartamanpatrika.com/section.php?cID=18'},
            {stream: STREAM.ENTERTAINMENT, url:'https://bartamanpatrika.com/section.php?cID=45'},
            {stream: STREAM.LIFESTYLE, url:'https://bartamanpatrika.com/section.php?cID=4'},
            {stream: STREAM.SCIENCE, url:'https://bartamanpatrika.com/section.php?cID=67'},
        ]
    },
    {
        name:'Ei Somoy',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/ei_somoy.png',
        
        
        type:new DefaultWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:false,
        links:[
            {stream: STREAM.FIRST_PAGE, selector:'.other_main_news1 li> a',url:'https://eisamay.indiatimes.com/'},
            {stream: STREAM.STATE, url:'https://eisamay.indiatimes.com/west-bengal-news/kolkata-news/articlelist/15991773.cms'},
            {stream: STREAM.COUNTRY, url:'https://eisamay.indiatimes.com/nation/articlelist/15819599.cms'},
            {stream: STREAM.INTERNATIONAL, url:'https://eisamay.indiatimes.com/international/articlelist/15819594.cms'},
            {stream: STREAM.BUSINESS, url:'https://eisamay.indiatimes.com/business/articlelist/15819574.cms'},
            {stream: STREAM.COUNTRY, url:'https://eisamay.indiatimes.com/nation/articlelist/15819599.cms'},
            {stream: STREAM.ENTERTAINMENT, url:'https://eisamay.indiatimes.com/entertainment/cinema/articlelist/15935855.cms'}, 
        ]
    },

    {
        name:'Tech Crunch',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/tech_crunch.png',
        type:new DefaultWebReader(),
        lang:LANG.IN_ENGLISH,
        is_active:true,
        is_partner:false,
        links:[
            {stream: STREAM.TECHNOLOGY, selector:'a.post-block__title__link',url:'https://techcrunch.com/apps/'},
            {stream: STREAM.TECHNOLOGY, selector:'a.post-block__title__link',url:'https://techcrunch.com/startups/'},
            {stream: STREAM.TECHNOLOGY, selector:'a.post-block__title__link',url:'https://techcrunch.com/gadgets/'},
        ],
        storyParseConfig:[
            { name: 'title',  selector: 'article h1', type: WebElementType.TEXT },
            { name: 'img',  selector: 'article .article__featured-image-wrapper  img', type: WebElementType.IMAGE },
            { name: 'details', selector: 'article .article-content > p', type: WebElementType.TEXT },
        ]
    },


    {
        name:'Statesman Bengali',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/dainikstatesman.png',
        type:new DefaultWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:false,
        links:[
            {stream: STREAM.COUNTRY, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/india'},
            {stream: STREAM.INTERNATIONAL, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/world'},
            {stream: STREAM.STATE, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/bengal'},
            {stream: STREAM.ENTERTAINMENT, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/binodan'},
            {stream: STREAM.SPORTS, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/sports'},
            {stream: STREAM.EDITORIAL, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/editorial'},
            {stream: STREAM.FOOD, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/food'},
            {stream: STREAM.OTHER, selector:'.newslistbx h3 > a',url:'https://www.dainikstatesmannews.com/bichitra'},
        ],
        storyParseConfig:[
            { name: 'title',   selector: '.storybox h1', type: WebElementType.TEXT },
            { name: 'img',     selector: '.storybox .imgholder  img', type: WebElementType.IMAGE },
            { name: 'details', selector: '.storybox .content-body > p', type: WebElementType.TEXT },
        ]
    },

    {
        name:'Business Insider',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/business_fortnight.png',
        type:new DefaultWebReader(),
        lang:LANG.IN_ENGLISH,
        is_active:true,
        is_partner:false,
        links:[
            {stream: STREAM.BUSINESS, selector:".toplist_stories figure > a",url:"https://www.businessinsider.in/business"},
            {stream: STREAM.SCIENCE, selector:".toplist_stories figure > a",url:"https://www.businessinsider.in/science"},
            {stream: STREAM.TECHNOLOGY, selector:".toplist_stories figure > a",url:"https://www.businessinsider.in/sai"},
        ],
        storyParseConfig:[
            { name: 'title', selector: '.ArticleCont article h1', type: WebElementType.TEXT },
            { name: 'details', selector: '.ArticleCont .article_content .story-text', type: WebElementType.TEXT },
            { name: 'img', selector: '.ArticleCont img', type: WebElementType.IMAGE,attr:'data-original' },
        ]
    },
    {
        name:'Pratidin',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/sangbad_pratidin.png',
        type:new DefaultWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:false,
        links:[
            { stream: STREAM.HEADLINE, selector:'.carousel  .scale_img_block > a',url:'https://www.sangbadpratidin.in/'},
            { stream: STREAM.HEADLINE, selector:'.daily-news  .scale_img_block > a',url:'https://www.sangbadpratidin.in/'},
            { stream: STREAM.FIRST_PAGE, selector:'.tatka_update_list  .scale_img a',url:'https://www.sangbadpratidin.in/'},
            { stream: STREAM.FIRST_PAGE, selector:'ul.more_news_list li > a',url:'https://www.sangbadpratidin.in/latest-update/'},
        ],
        storyParseConfig:[
            { name: 'title', selector: '.container .hot_news h1', type: WebElementType.TEXT },
            { name: 'details', selector: '.container .news_content_area > p', type: WebElementType.TEXT },
            { name: 'img', selector: '.container img.hot_news_image', type: WebElementType.IMAGE },
        ]
    },

    {
        name:'Anandabazar',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/abp_ananada.jpg',
        type:new DefaultWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:false,
        links:[
            {url:'https://www.anandabazar.com/', selector: '.container .abp-homepage-main-story-wrap-new a', stream:STREAM.HEADLINE},
            {url:'https://www.anandabazar.com/', selector: '.abp-homepage-lead-story-wrap a', stream:STREAM.HEADLINE},
            {url:'https://www.anandabazar.com/', selector: '.abp-homepage-editor-story-wrap a', stream:STREAM.FIRST_PAGE},

            {url:'https://www.anandabazar.com/state',   selector: '.sectionstoryinside-sub > div > a', stream:STREAM.STATE},
            {url:'https://www.anandabazar.com/international',   selector: '.sectionstoryinside-sub > div > a', stream:STREAM.INTERNATIONAL},
            {url:'https://www.anandabazar.com/business',   selector: '.sectionstoryinside-sub > div > a', stream:STREAM.BUSINESS},
            {url:'https://www.anandabazar.com/others/science',   selector: '.sectionstoryinside-sub > div > a', stream:STREAM.SCIENCE},
            {url:'https://www.anandabazar.com/entertainment',   selector: '.sectionstoryinside-sub > div > a', stream:STREAM.ENTERTAINMENT},
            {url:'https://www.anandabazar.com/topic/short-story',   selector: '.row .article-image > a', stream:STREAM.SHORT_STORY},
            {url:'https://www.anandabazar.com/travel',   selector: '.carousel-inner .item a', stream:STREAM.TRAVEL},
        ],
        storyParseConfig:[
            { name: 'title', selector: '#story_container h1', type: WebElementType.TEXT },
            { name: 'details', selector: '#story_container .articleBody', type: WebElementType.TEXT },
            { name: 'img', selector: '#story_container  img', type: WebElementType.IMAGE },
        ]
    },

    {
        name:'BBC Bengali',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/bbc_bangla.png',
        type:new DefaultWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:false,
        links:[
            {stream: STREAM.FIRST_PAGE, selector:'.eagle .eagle-item > a',url:'https://www.bbc.com/bengali/news'},
        ],
        storyParseConfig:[
            { name: 'title',   selector: '.story-body h1', type: WebElementType.TEXT },
            { name: 'details', selector: '.story-body .story-body__inner > p', type: WebElementType.TEXT },
            { name: 'img',     selector: '.story-body figure  img', type: WebElementType.IMAGE },
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
        name:'OneIndia English',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/oneindia.png',
        type:new OneIndiaWebReader(),
        lang:LANG.IN_ENGLISH,
        is_active:true,
        is_partner:false,
        links:[
            {stream: STREAM.FIRST_PAGE, selector:'#containerMain .main-block a',url:'https://www.oneindia.com/'},
            {stream: STREAM.COUNTRY, url:'https://www.oneindia.com/india/'},
            {stream: STREAM.INTERNATIONAL, url:'https://www.oneindia.com/international/'},
            {stream: STREAM.BUSINESS, url:'https://www.oneindia.com/business/'},
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

    // News18 - All
    {
        name:'News18 English',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/news18_english.png',
        type:new News18WebReader(),
        lang:LANG.IN_ENGLISH,
        is_active:true,
        is_partner:true,
        links:[
            {stream: STREAM.HEADLINE, selector:'.lead-story a',url:'https://www.news18.com/'},
            {stream: STREAM.FIRST_PAGE, selector:'.hotTopic a',url:'https://www.news18.com/politics/'},
            {stream: STREAM.COUNTRY, selector:'.hotTopic a',url:'https://www.news18.com/india/'},
            {stream: STREAM.INTERNATIONAL, selector:'.hotTopic a',url:'https://www.news18.com/world/'},
            {stream: STREAM.TECHNOLOGY, selector:'.hotTopic a',url:'https://www.news18.com/tech/'},
            {stream: STREAM.ENTERTAINMENT, selector:'.hotTopic a',url:'https://www.news18.com/entertainment/'},
            {stream: STREAM.LIFESTYLE, selector:'.hotTopic a', url:'https://www.news18.com/lifestyle/'},
            {stream: STREAM.BUSINESS, selector:'.hotTopic a', url:'https://www.news18.com/business/'},
            {stream: STREAM.MOVIE, selector:'.hotTopic a',url:'https://www.news18.com/movies/'},
        ],
        storyParseConfig:[
            { name: 'title', selector: '.article-sbox h1', type: WebElementType.TEXT },
            { name: 'img', selector: '.article-sbox .articleimg img', type: WebElementType.IMAGE },
            { name: 'details', selector: '.article-sbox #article_body p', type: WebElementType.TEXT },
        ]
    },

    {
        name:'News18 Hindi',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/news18_english.png',
        type:new News18WebReader(),
        lang:LANG.IN_HINDI,
        is_active:true,
        is_partner:true,
        links:[
            {stream: STREAM.FIRST_PAGE, selector:'.topnews a',url:'https://hindi.news18.com/'},
            {stream: STREAM.COUNTRY, selector:'.hotTopic a',url:'https://hindi.news18.com/news/nation/'},
            {stream: STREAM.INTERNATIONAL, selector:'.hotTopic a',url:'https://hindi.news18.com/news/world/'},
            {stream: STREAM.TECHNOLOGY, selector:'.hotTopic a',url:'https://hindi.news18.com/news/tech/'},
            {stream: STREAM.ENTERTAINMENT, selector:'.hotTopic a',url:'https://hindi.news18.com/news/entertainment/'},
            {stream: STREAM.LIFESTYLE, selector:'.hotTopic a', url:'https://hindi.news18.com/news/lifestyle/'},
            {stream: STREAM.BUSINESS, selector:'.hotTopic a', url:'https://hindi.news18.com/news/business/'},
            {stream: STREAM.MOVIE, selector:'.hotTopic a',url:'https://hindi.news18.com/news/entertainment/film-review/'},
            {stream: STREAM.SPORTS, selector:'.hotTopic a',url:'https://hindi.news18.com/news/sports/cricket/'},
        ],
        storyParseConfig:[
            { name: 'title', selector: '#article h1', type: WebElementType.TEXT },
            { name: 'details', selector: '#article .storypara', type: WebElementType.TEXT },
            { name: 'img', selector: '#article_body .articleimg img', type: WebElementType.IMAGE },
        ]
    },

    {
        name:'News18 Bengali',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/news18_bengali.png',
        type:new News18WebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:true,
        links:[
            {stream: STREAM.COUNTRY, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/national/'},
            {stream: STREAM.STATE, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/kolkata/'},
            {stream: STREAM.INTERNATIONAL, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/international/'},
            {stream: STREAM.TECHNOLOGY, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/technology/'},
            {stream: STREAM.ENTERTAINMENT, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/entertainment/'},
            {stream: STREAM.LIFESTYLE, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/life-style/'},
        ]
    },

    {
        name:'News18 Bengali',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/news18_bengali.png',
        type:new News18WebReader(),
        lang:LANG.IN_ASSAMESE,
        is_active:true,
        is_partner:true,
        links:[
            {stream: STREAM.COUNTRY, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/national/'},
            {stream: STREAM.STATE, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/kolkata/'},
            {stream: STREAM.INTERNATIONAL, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/international/'},
            {stream: STREAM.TECHNOLOGY, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/technology/'},
            {stream: STREAM.ENTERTAINMENT, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/entertainment/'},
            {stream: STREAM.LIFESTYLE, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/life-style/'},
        ]
    },


    {
        name:'News18 Bengali',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/news18_bengali.png',
        type:new News18WebReader(),
        lang:LANG.IN_ORIYA,
        is_active:true,
        is_partner:true,
        links:[
            {stream: STREAM.COUNTRY, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/national/'},
            {stream: STREAM.STATE, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/kolkata/'},
            {stream: STREAM.INTERNATIONAL, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/international/'},
            {stream: STREAM.TECHNOLOGY, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/technology/'},
            {stream: STREAM.ENTERTAINMENT, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/entertainment/'},
            {stream: STREAM.LIFESTYLE, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/life-style/'},
        ]
    },

   { 
        name:'News18 Marathi',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/news18_english.png',
        type:new News18WebReader(),
        lang:LANG.IN_MARATHI,
        is_active:true,
        is_partner:true,
        links:[
            {stream: STREAM.HEADLINE, selector:'.lead-story a',url:'https://www.news18.com/'},
            {stream: STREAM.FIRST_PAGE, selector:'.hotTopic a',url:'https://www.news18.com/politics/'},
            {stream: STREAM.COUNTRY, selector:'.hotTopic a',url:'https://www.news18.com/india/'},
            {stream: STREAM.INTERNATIONAL, selector:'.hotTopic a',url:'https://www.news18.com/world/'},
            {stream: STREAM.TECHNOLOGY, selector:'.hotTopic a',url:'https://www.news18.com/tech/'},
            {stream: STREAM.ENTERTAINMENT, selector:'.hotTopic a',url:'https://www.news18.com/entertainment/'},
            {stream: STREAM.LIFESTYLE, selector:'.hotTopic a', url:'https://www.news18.com/lifestyle/'},
            {stream: STREAM.BUSINESS, selector:'.hotTopic a', url:'https://www.news18.com/business/'},
            {stream: STREAM.MOVIE, selector:'.hotTopic a',url:'https://www.news18.com/movies/'},
        ],
        storyParseConfig:[
            { name: 'title', selector: '.article-sbox h1', type: WebElementType.TEXT },
            { name: 'img', selector: '.article-sbox .articleimg img', type: WebElementType.IMAGE },
            { name: 'details', selector: '.article-sbox #article_body p', type: WebElementType.TEXT },
        ]
        
    },

    { 
        name:'News18 Gujarati',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/news18_english.png',
        type:new News18WebReader(),
        lang:LANG.IN_GUJARATI,
        is_active:true,
        is_partner:true,
        links:[
            {stream: STREAM.HEADLINE, selector:'.lead-story a',url:'https://www.news18.com/'},
            {stream: STREAM.FIRST_PAGE, selector:'.hotTopic a',url:'https://www.news18.com/politics/'},
            {stream: STREAM.COUNTRY, selector:'.hotTopic a',url:'https://www.news18.com/india/'},
            {stream: STREAM.INTERNATIONAL, selector:'.hotTopic a',url:'https://www.news18.com/world/'},
            {stream: STREAM.TECHNOLOGY, selector:'.hotTopic a',url:'https://www.news18.com/tech/'},
            {stream: STREAM.ENTERTAINMENT, selector:'.hotTopic a',url:'https://www.news18.com/entertainment/'},
            {stream: STREAM.LIFESTYLE, selector:'.hotTopic a', url:'https://www.news18.com/lifestyle/'},
            {stream: STREAM.BUSINESS, selector:'.hotTopic a', url:'https://www.news18.com/business/'},
            {stream: STREAM.MOVIE, selector:'.hotTopic a',url:'https://www.news18.com/movies/'},
        ],
        storyParseConfig:[
            { name: 'title', selector: '.article-sbox h1', type: WebElementType.TEXT },
            { name: 'img', selector: '.article-sbox .articleimg img', type: WebElementType.IMAGE },
            { name: 'details', selector: '.article-sbox #article_body p', type: WebElementType.TEXT },
        ]
        
    },


    { 
        name:'News18 Tamil',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/news18_english.png',
        type:new News18WebReader(),
        lang:LANG.IN_TAMIL,
        is_active:true,
        is_partner:true,
        links:[
            {stream: STREAM.HEADLINE, selector:'.lead-story a',url:'https://www.news18.com/'},
            {stream: STREAM.FIRST_PAGE, selector:'.hotTopic a',url:'https://www.news18.com/politics/'},
            {stream: STREAM.COUNTRY, selector:'.hotTopic a',url:'https://www.news18.com/india/'},
            {stream: STREAM.INTERNATIONAL, selector:'.hotTopic a',url:'https://www.news18.com/world/'},
            {stream: STREAM.TECHNOLOGY, selector:'.hotTopic a',url:'https://www.news18.com/tech/'},
            {stream: STREAM.ENTERTAINMENT, selector:'.hotTopic a',url:'https://www.news18.com/entertainment/'},
            {stream: STREAM.LIFESTYLE, selector:'.hotTopic a', url:'https://www.news18.com/lifestyle/'},
            {stream: STREAM.BUSINESS, selector:'.hotTopic a', url:'https://www.news18.com/business/'},
            {stream: STREAM.MOVIE, selector:'.hotTopic a',url:'https://www.news18.com/movies/'},
        ],
        storyParseConfig:[
            { name: 'title', selector: '.article-sbox h1', type: WebElementType.TEXT },
            { name: 'img', selector: '.article-sbox .articleimg img', type: WebElementType.IMAGE },
            { name: 'details', selector: '.article-sbox #article_body p', type: WebElementType.TEXT },
        ]
        
    },

    { 
        name:'News18 Telegu',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/news18_english.png',
        type:new News18WebReader(),
        lang:LANG.IN_TELUGU,
        is_active:true,
        is_partner:true,
        links:[
            {stream: STREAM.HEADLINE, selector:'.lead-story a',url:'https://www.news18.com/'},
            {stream: STREAM.FIRST_PAGE, selector:'.hotTopic a',url:'https://www.news18.com/politics/'},
            {stream: STREAM.COUNTRY, selector:'.hotTopic a',url:'https://www.news18.com/india/'},
            {stream: STREAM.INTERNATIONAL, selector:'.hotTopic a',url:'https://www.news18.com/world/'},
            {stream: STREAM.TECHNOLOGY, selector:'.hotTopic a',url:'https://www.news18.com/tech/'},
            {stream: STREAM.ENTERTAINMENT, selector:'.hotTopic a',url:'https://www.news18.com/entertainment/'},
            {stream: STREAM.LIFESTYLE, selector:'.hotTopic a', url:'https://www.news18.com/lifestyle/'},
            {stream: STREAM.BUSINESS, selector:'.hotTopic a', url:'https://www.news18.com/business/'},
            {stream: STREAM.MOVIE, selector:'.hotTopic a',url:'https://www.news18.com/movies/'},
        ],
        storyParseConfig:[
            { name: 'title', selector: '.article-sbox h1', type: WebElementType.TEXT },
            { name: 'img', selector: '.article-sbox .articleimg img', type: WebElementType.IMAGE },
            { name: 'details', selector: '.article-sbox #article_body p', type: WebElementType.TEXT },
        ]
    },

    { 
        name:'News18 Malayalam',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/news18_english.png',
        type:new News18WebReader(),
        lang:LANG.IN_MALAYALAM,
        is_active:true,
        is_partner:true,
        links:[
            {stream: STREAM.FIRST_PAGE, selector:'.hotTopic a',url:'https://malayalam.news18.com/news/'},
            {stream: STREAM.SPORTS, selector:'.hotTopic a',url:'https://malayalam.news18.com/sports/'},
            {stream: STREAM.ENTERTAINMENT, selector:'.hotTopic a',url:'https://malayalam.news18.com/film/'},
            {stream: STREAM.SPORTS, selector:'.hotTopic a',url:'https://malayalam.news18.com/gulf/'},
            {stream: STREAM.LIFESTYLE, selector:'.hotTopic a', url:'https://malayalam.news18.com/life/'},
            {stream: STREAM.BUSINESS, selector:'.hotTopic a', url:'https://malayalam.news18.com/career/'},
            {stream: STREAM.CRIME, selector:'.hotTopic a',url:'https://malayalam.news18.com/crime/'},
        ],
        storyParseConfig:[
            { name: 'title', selector: '#article h1', type: WebElementType.TEXT },
            { name: 'img', selector: '#article .articleimg img', type: WebElementType.IMAGE },
            { name: 'details', selector: '#article #article_body .storypara', type: WebElementType.TEXT },
        ]
    },

    {
        name:'Nilkontho',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/nilkantho.in.png',
        type:new ArticleWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:true,
        links:[
            {stream: STREAM.FIRST_PAGE,url:'https://www.nilkantho.in/category/news/kolkata/'},
            {stream: STREAM.STATE,url:'https://www.nilkantho.in/category/news/state/'},
            {stream: STREAM.COUNTRY,url:'https://www.nilkantho.in/category/news/national/'},
            {stream: STREAM.INTERNATIONAL,url:'https://www.nilkantho.in/category/news/world/'},
            {stream: STREAM.ENTERTAINMENT,url:'https://www.nilkantho.in/category/news/entertainment/'},

            {stream: STREAM.SPORTS,url:'https://www.nilkantho.in/category/news/sports/'},
            {stream: STREAM.BUSINESS,url:'https://www.nilkantho.in/category/news/business/'},
            {stream: STREAM.SCIENCE,url:'https://www.nilkantho.in/category/news/scitech/'},
            
            {stream: STREAM.LIFESTYLE,url:'https://www.nilkantho.in/category/lifestyle/'},
            {stream: STREAM.LIFESTYLE,url:'https://www.nilkantho.in/category/health'},
        ]
    },

    // Wordpress here..
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
    {
        name:'Kolkata 24X7',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/kolkata_24x7.png',
        type:new WordPressWebReader(),
        lang:LANG.IN_BENGALI,
        is_active:true,
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
            {stream: STREAM.STATE, url:'https://www.dharitri.com/category/state-news/'},
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

        // It has RSS - Please move it RSS.
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
]
