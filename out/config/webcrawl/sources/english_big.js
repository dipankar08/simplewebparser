"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CONST_1 = require("../../CONST");
var web_reader_1 = require("../web_reader");
var htmlparser_1 = require("../htmlparser");
exports.urlList = [
    {
        name: 'Tech Crunch',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/tech_crunch.png',
        type: new web_reader_1.DefaultWebReader(),
        lang: CONST_1.LANG.IN_ENGLISH,
        is_active: true,
        is_partner: false,
        links: [
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: 'a.post-block__title__link', url: 'https://techcrunch.com/apps/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: 'a.post-block__title__link', url: 'https://techcrunch.com/startups/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: 'a.post-block__title__link', url: 'https://techcrunch.com/gadgets/' },
        ],
        storyParseConfig: [
            { name: 'title', selector: 'article h1', type: htmlparser_1.WebElementType.TEXT },
            { name: 'img', selector: 'article .article__featured-image-wrapper  img', type: htmlparser_1.WebElementType.IMAGE },
            { name: 'details', selector: 'article .article-content > p', type: htmlparser_1.WebElementType.TEXT },
        ]
    },
    {
        name: 'Business Insider',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/business_fortnight.png',
        type: new web_reader_1.DefaultWebReader(),
        lang: CONST_1.LANG.IN_ENGLISH,
        is_active: true,
        is_partner: false,
        links: [
            { stream: CONST_1.STREAM.BUSINESS, selector: ".toplist_stories figure > a", url: "https://www.businessinsider.in/business" },
            { stream: CONST_1.STREAM.SCIENCE, selector: ".toplist_stories figure > a", url: "https://www.businessinsider.in/science" },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: ".toplist_stories figure > a", url: "https://www.businessinsider.in/sai" },
        ],
        storyParseConfig: [
            { name: 'title', selector: '.ArticleCont article h1', type: htmlparser_1.WebElementType.TEXT },
            { name: 'details', selector: '.ArticleCont .article_content .story-text', type: htmlparser_1.WebElementType.TEXT },
            { name: 'img', selector: '.ArticleCont img', type: htmlparser_1.WebElementType.IMAGE, attr: 'data-original' },
        ]
    },
    {
        name: 'OneIndia English',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/oneindia.png',
        type: new web_reader_1.OneIndiaWebReader(),
        lang: CONST_1.LANG.IN_ENGLISH,
        is_active: true,
        is_partner: false,
        links: [
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '#containerMain .main-block a', url: 'https://www.oneindia.com/' },
            { stream: CONST_1.STREAM.COUNTRY, url: 'https://www.oneindia.com/india/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, url: 'https://www.oneindia.com/international/' },
            { stream: CONST_1.STREAM.BUSINESS, url: 'https://www.oneindia.com/business/' },
        ]
    },
];
//# sourceMappingURL=english_big.js.map