import { WebEntryPoint } from "../web_entrypoints";
import { LANG, STREAM } from "../../CONST";
import { DefaultWebReader, ArticleWebReader, BartamanWebReader, OneIndiaWebReader } from "../web_reader";
import { WebElementType } from "../htmlparser";

export let urlList:Array<WebEntryPoint> = [
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
]