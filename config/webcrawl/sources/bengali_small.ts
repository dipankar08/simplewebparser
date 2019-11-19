import { WebEntryPoint } from "../web_entrypoints";
import { LANG, STREAM } from "../../CONST";
import { DefaultWebReader, ArticleWebReader, WordPressWebReader } from "../web_reader";
import { WebElementType } from "../htmlparser";
import { WordPressRssReader } from "../rss_reader";

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

    {
        name:'Kolkata 24X7',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/kolkata_24x7.png',
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:false,

        links:[
            {url:'https://www.kolkata24x7.com/category/kolkata/feed', 'stream':STREAM.KOLKATA},
            {url:'https://www.kolkata24x7.com/category/politics/feed', 'stream':STREAM.POLITICS},
            {url:'https://www.kolkata24x7.com/category/west-bengal/feed', 'stream':STREAM.STATE},
            {url:'https://www.kolkata24x7.com/category/national-news/feed', 'stream':STREAM.NATIONAL},
            {url:'https://www.kolkata24x7.com/category/international-news/feed', 'stream':STREAM.INTERNATIONAL},
            {url:'https://www.kolkata24x7.com/category/sports/feed', 'stream':STREAM.SPORTS},
            {url:'https://www.kolkata24x7.com/category/offbeat-news/feed', 'stream':STREAM.OFF_BEAT},
            {url:'https://www.kolkata24x7.com/category/education-and-career/feed', 'stream':STREAM.EDUCATION},
            {url:'https://www.kolkata24x7.com/category/offbeat-news/feed', 'stream':STREAM.OFF_BEAT},
            {url:'https://www.kolkata24x7.com/category/business-and-economy/feed', 'stream':STREAM.BUSINESS},
            {url:'https://www.kolkata24x7.com/category/lifestyle/feed/', 'stream':STREAM.LIFESTYLE},
            {url:'https://www.kolkata24x7.com/category/entertainment-news/feed/', 'stream':STREAM.ENTERTAINMENT},
            {url:'https://www.kolkata24x7.com/feed/', 'stream':STREAM.OTHER},
        ],
        is_rss_feed:true,
        rsstype:new WordPressRssReader(),
    },

    {
        name:'Totka 24X7',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/totka_24x7.png',
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:true,

        links:[
            {url:'https://www.totka24x7.com/archives/category/lifestyle/feed', 'stream':STREAM.LIFESTYLE},
            {url:'https://www.totka24x7.com/archives/category/earn-money/feed', 'stream':STREAM.BUSINESS},
            {url:'https://www.totka24x7.com/archives/category/viral/feed', 'stream':STREAM.VIRAL},
            {url:'https://www.totka24x7.com/archives/category/entertainment/feed', 'stream':STREAM.ENTERTAINMENT},
            {url:'https://www.totka24x7.com/archives/category/technology/feed', 'stream':STREAM.TECHNOLOGY},
            {url:'https://www.totka24x7.com/archives/category/headlines/feed', 'stream':STREAM.FIRST_PAGE},
            {url:'https://www.totka24x7.com/archives/category/astrology/feed', 'stream':STREAM.ASTROLOGY},
            {url:'https://www.totka24x7.com/archives/category/different-news/feed', 'stream':STREAM.OTHER},
            {url:'https://www.totka24x7.com/feed', 'stream':STREAM.OTHER},
        ],
        is_rss_feed:true,
        rsstype:new WordPressRssReader(),
    },

    {
        name:'Kolkata Times 24',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/kolkatatimes24.png',
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:true,
        links:[
            {url:'https://kolkatatimes24.com/category/kolkata/feed', 'stream':STREAM.FIRST_PAGE},
            {url:'https://kolkatatimes24.com/category/politics/feed', 'stream':STREAM.POLITICS},
            {url:'https://kolkatatimes24.com/category/west-bengal/feed', 'stream':STREAM.STATE},
            {url:'https://kolkatatimes24.com/category/technology/feed', 'stream':STREAM.FIRST_PAGE},
            {url:'https://kolkatatimes24.com/category/business-and-economy/feed', 'stream':STREAM.BUSINESS},
            {url:'https://kolkatatimes24.com/category/national/feed', 'stream':STREAM.COUNTRY},
            {url:'https://kolkatatimes24.com/category/world/feed', 'stream':STREAM.INTERNATIONAL},
            {url:'https://kolkatatimes24.com/category/sports/feed', 'stream':STREAM.SPORTS},
            {url:'https://kolkatatimes24.com/category/offbeat/feed', 'stream':STREAM.OFF_BEAT},
            {url:'https://kolkatatimes24.com/category/offbeat/feed', 'stream':STREAM.OFF_BEAT},
            {url:'https://kolkatatimes24.com/category/lifestyle/feed', 'stream':STREAM.LIFESTYLE},
            {url:'https://kolkatatimes24.com/feed/', 'stream':STREAM.FIRST_PAGE},
        ],
        is_rss_feed:true,
        rsstype:new WordPressRssReader(),
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

    {
        // BUGGY RSS FEED AS NO IMAGE.
        name:'Bong News24x7',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/bongnews24x7.png',
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:true,

        links:[
            {url:'https://www.bongnews24x7.com', 'stream':STREAM.FIRST_PAGE},
            {url:'https://www.bongnews24x7.com/category/kolkata/', 'stream':STREAM.FIRST_PAGE},
            {url:'https://www.bongnews24x7.com/category/viral/', 'stream':STREAM.VIRAL},
            {url:'https://www.bongnews24x7.com/category/west-bengal/', 'stream':STREAM.STATE},
            {url:'https://www.bongnews24x7.com/category/india/', 'stream':STREAM.NATIONAL},
            {url:'https://www.bongnews24x7.com/category/international/', 'stream':STREAM.INTERNATIONAL},
            {url:'https://www.bongnews24x7.com/category/politics/', 'stream':STREAM.POLITICS},

            {url:'https://www.bongnews24x7.com/category/sports/', 'stream':STREAM.SPORTS},
            {url:'https://www.bongnews24x7.com/category/employment-news/', 'stream':STREAM.JOB},
            {url:'https://www.bongnews24x7.com/category/unknown-facts/', 'stream':STREAM.OFF_BEAT},
            {url:'https://www.bongnews24x7.com/category/fashion-and-beauty/', 'stream':STREAM.LIFESTYLE},
            {url:'https://www.bongnews24x7.com/category/entertainment/', 'stream':STREAM.ENTERTAINMENT},
            {url:'https://www.bongnews24x7.com/category/good-luck/', 'stream':STREAM.HOROSCOPE},
        
        ],
        limit:5,
        is_rss_feed:false,
        link_selector:'.td-module-thumb a',
        type:new WordPressWebReader(),
    },

    {
        name:'The Wall',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/thewall.png',
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:true,
        links:[
            {url:'https://www.thewall.in/feed', 'stream':STREAM.FIRST_PAGE},
            // NO OTHER RSS LINK FOUND.
        ],
        is_rss_feed:true,
        rsstype:new WordPressRssReader(),
    },

    {
        name:'Master 24',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/master24.png',
        lang:LANG.IN_BENGALI,
        is_active:true,
        is_partner:true,
        links:[
            {url:'https://www.master24.in/archives/category/politics/feed', 'stream':STREAM.POLITICS},
            {url:'https://www.master24.in/archives/category/state/feed', 'stream':STREAM.STATE},
            {url:'https://www.master24.in/archives/category/national/feed', 'stream':STREAM.COUNTRY},
            {url:'https://www.master24.in/archives/category/international/feed', 'stream':STREAM.INTERNATIONAL},
            {url:'https://www.master24.in/archives/category/lifestyle/feed', 'stream':STREAM.LIFESTYLE},
            {url:'https://www.master24.in/archives/category/editorial/feed', 'stream':STREAM.EDITORIAL},
            {url:'https://www.master24.in/archives/category/tech-news/feed', 'stream':STREAM.TECHNOLOGY},
            {url:'https://www.master24.in/archives/category/job-and-business/feed', 'stream':STREAM.JOB},
            {url:'https://www.master24.in/archives/category/sports/feed', 'stream':STREAM.SPORTS},
            {url:'https://www.master24.in/feed', 'stream':STREAM.LATEST},
        ],
        is_rss_feed:true,
        rsstype:new WordPressRssReader(),
    },
    {
        name:'Natun Gati',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/natungati.png',
        lang:LANG.IN_BENGALI,
        is_active:false,
        is_partner:true,
        links:[
         
            {url:'http://www.natungati.com/feed/', 'stream':STREAM.LATEST},
        ],
        is_rss_feed:true,
        rsstype:new WordPressRssReader(),
    },
]