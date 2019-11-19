import { WebEntryPoint } from "../web_entrypoints";
import { LANG, STREAM } from "../../CONST";
import { News18WebReader } from "../web_reader";
import { WebElementType } from "../htmlparser";

export let urlList:Array<WebEntryPoint> = [
    // News18 - All
    {
        name:'News18 English',
        profile_img:'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/news18_english.png',
        type:new News18WebReader(),
        lang:LANG.IN_ENGLISH,
        is_active:true,
        is_partner:true,
        links:[
            {stream: STREAM.FIRST_PAGE, selector:'.lead-story a',url:'https://www.news18.com/'},
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
            {stream: STREAM.FIRST_PAGE, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/kolkata/'},
            {stream: STREAM.INTERNATIONAL, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/international/'},
            {stream: STREAM.TECHNOLOGY, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/technology/'},
            {stream: STREAM.ENTERTAINMENT, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/entertainment/'},
            {stream: STREAM.LIFESTYLE, selector:'.nwslist-withbrdr li a',url:'https://bengali.news18.com/life-style/'},
        ]
    },
]