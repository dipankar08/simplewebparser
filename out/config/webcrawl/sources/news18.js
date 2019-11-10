"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CONST_1 = require("../../CONST");
var web_reader_1 = require("../web_reader");
var htmlparser_1 = require("../htmlparser");
exports.urlList = [
    // News18 - All
    {
        name: 'News18 English',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/news18_english.png',
        type: new web_reader_1.News18WebReader(),
        lang: CONST_1.LANG.IN_ENGLISH,
        is_active: true,
        is_partner: true,
        links: [
            { stream: CONST_1.STREAM.HEADLINE, selector: '.lead-story a', url: 'https://www.news18.com/' },
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.hotTopic a', url: 'https://www.news18.com/politics/' },
            { stream: CONST_1.STREAM.COUNTRY, selector: '.hotTopic a', url: 'https://www.news18.com/india/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.hotTopic a', url: 'https://www.news18.com/world/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: '.hotTopic a', url: 'https://www.news18.com/tech/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.hotTopic a', url: 'https://www.news18.com/entertainment/' },
            { stream: CONST_1.STREAM.LIFESTYLE, selector: '.hotTopic a', url: 'https://www.news18.com/lifestyle/' },
            { stream: CONST_1.STREAM.BUSINESS, selector: '.hotTopic a', url: 'https://www.news18.com/business/' },
            { stream: CONST_1.STREAM.MOVIE, selector: '.hotTopic a', url: 'https://www.news18.com/movies/' },
        ],
        storyParseConfig: [
            { name: 'title', selector: '.article-sbox h1', type: htmlparser_1.WebElementType.TEXT },
            { name: 'img', selector: '.article-sbox .articleimg img', type: htmlparser_1.WebElementType.IMAGE },
            { name: 'details', selector: '.article-sbox #article_body p', type: htmlparser_1.WebElementType.TEXT },
        ]
    },
    {
        name: 'News18 Hindi',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/news18_english.png',
        type: new web_reader_1.News18WebReader(),
        lang: CONST_1.LANG.IN_HINDI,
        is_active: true,
        is_partner: true,
        links: [
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.topnews a', url: 'https://hindi.news18.com/' },
            { stream: CONST_1.STREAM.COUNTRY, selector: '.hotTopic a', url: 'https://hindi.news18.com/news/nation/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.hotTopic a', url: 'https://hindi.news18.com/news/world/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: '.hotTopic a', url: 'https://hindi.news18.com/news/tech/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.hotTopic a', url: 'https://hindi.news18.com/news/entertainment/' },
            { stream: CONST_1.STREAM.LIFESTYLE, selector: '.hotTopic a', url: 'https://hindi.news18.com/news/lifestyle/' },
            { stream: CONST_1.STREAM.BUSINESS, selector: '.hotTopic a', url: 'https://hindi.news18.com/news/business/' },
            { stream: CONST_1.STREAM.MOVIE, selector: '.hotTopic a', url: 'https://hindi.news18.com/news/entertainment/film-review/' },
            { stream: CONST_1.STREAM.SPORTS, selector: '.hotTopic a', url: 'https://hindi.news18.com/news/sports/cricket/' },
        ],
        storyParseConfig: [
            { name: 'title', selector: '#article h1', type: htmlparser_1.WebElementType.TEXT },
            { name: 'details', selector: '#article .storypara', type: htmlparser_1.WebElementType.TEXT },
            { name: 'img', selector: '#article_body .articleimg img', type: htmlparser_1.WebElementType.IMAGE },
        ]
    },
    {
        name: 'News18 Bengali',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/news18_bengali.png',
        type: new web_reader_1.News18WebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
        is_partner: true,
        links: [
            { stream: CONST_1.STREAM.COUNTRY, selector: '.nwslist-withbrdr li a', url: 'https://bengali.news18.com/national/' },
            { stream: CONST_1.STREAM.STATE, selector: '.nwslist-withbrdr li a', url: 'https://bengali.news18.com/kolkata/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.nwslist-withbrdr li a', url: 'https://bengali.news18.com/international/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: '.nwslist-withbrdr li a', url: 'https://bengali.news18.com/technology/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.nwslist-withbrdr li a', url: 'https://bengali.news18.com/entertainment/' },
            { stream: CONST_1.STREAM.LIFESTYLE, selector: '.nwslist-withbrdr li a', url: 'https://bengali.news18.com/life-style/' },
        ]
    },
    {
        name: 'News18 Bengali',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/news18_bengali.png',
        type: new web_reader_1.News18WebReader(),
        lang: CONST_1.LANG.IN_ASSAMESE,
        is_active: true,
        is_partner: true,
        links: [
            { stream: CONST_1.STREAM.COUNTRY, selector: '.nwslist-withbrdr li a', url: 'https://bengali.news18.com/national/' },
            { stream: CONST_1.STREAM.STATE, selector: '.nwslist-withbrdr li a', url: 'https://bengali.news18.com/kolkata/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.nwslist-withbrdr li a', url: 'https://bengali.news18.com/international/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: '.nwslist-withbrdr li a', url: 'https://bengali.news18.com/technology/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.nwslist-withbrdr li a', url: 'https://bengali.news18.com/entertainment/' },
            { stream: CONST_1.STREAM.LIFESTYLE, selector: '.nwslist-withbrdr li a', url: 'https://bengali.news18.com/life-style/' },
        ]
    },
    {
        name: 'News18 Bengali',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/news18_bengali.png',
        type: new web_reader_1.News18WebReader(),
        lang: CONST_1.LANG.IN_ORIYA,
        is_active: true,
        is_partner: true,
        links: [
            { stream: CONST_1.STREAM.COUNTRY, selector: '.nwslist-withbrdr li a', url: 'https://bengali.news18.com/national/' },
            { stream: CONST_1.STREAM.STATE, selector: '.nwslist-withbrdr li a', url: 'https://bengali.news18.com/kolkata/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.nwslist-withbrdr li a', url: 'https://bengali.news18.com/international/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: '.nwslist-withbrdr li a', url: 'https://bengali.news18.com/technology/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.nwslist-withbrdr li a', url: 'https://bengali.news18.com/entertainment/' },
            { stream: CONST_1.STREAM.LIFESTYLE, selector: '.nwslist-withbrdr li a', url: 'https://bengali.news18.com/life-style/' },
        ]
    },
    {
        name: 'News18 Marathi',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/news18_english.png',
        type: new web_reader_1.News18WebReader(),
        lang: CONST_1.LANG.IN_MARATHI,
        is_active: true,
        is_partner: true,
        links: [
            { stream: CONST_1.STREAM.HEADLINE, selector: '.lead-story a', url: 'https://www.news18.com/' },
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.hotTopic a', url: 'https://www.news18.com/politics/' },
            { stream: CONST_1.STREAM.COUNTRY, selector: '.hotTopic a', url: 'https://www.news18.com/india/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.hotTopic a', url: 'https://www.news18.com/world/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: '.hotTopic a', url: 'https://www.news18.com/tech/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.hotTopic a', url: 'https://www.news18.com/entertainment/' },
            { stream: CONST_1.STREAM.LIFESTYLE, selector: '.hotTopic a', url: 'https://www.news18.com/lifestyle/' },
            { stream: CONST_1.STREAM.BUSINESS, selector: '.hotTopic a', url: 'https://www.news18.com/business/' },
            { stream: CONST_1.STREAM.MOVIE, selector: '.hotTopic a', url: 'https://www.news18.com/movies/' },
        ],
        storyParseConfig: [
            { name: 'title', selector: '.article-sbox h1', type: htmlparser_1.WebElementType.TEXT },
            { name: 'img', selector: '.article-sbox .articleimg img', type: htmlparser_1.WebElementType.IMAGE },
            { name: 'details', selector: '.article-sbox #article_body p', type: htmlparser_1.WebElementType.TEXT },
        ]
    },
    {
        name: 'News18 Gujarati',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/news18_english.png',
        type: new web_reader_1.News18WebReader(),
        lang: CONST_1.LANG.IN_GUJARATI,
        is_active: true,
        is_partner: true,
        links: [
            { stream: CONST_1.STREAM.HEADLINE, selector: '.lead-story a', url: 'https://www.news18.com/' },
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.hotTopic a', url: 'https://www.news18.com/politics/' },
            { stream: CONST_1.STREAM.COUNTRY, selector: '.hotTopic a', url: 'https://www.news18.com/india/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.hotTopic a', url: 'https://www.news18.com/world/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: '.hotTopic a', url: 'https://www.news18.com/tech/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.hotTopic a', url: 'https://www.news18.com/entertainment/' },
            { stream: CONST_1.STREAM.LIFESTYLE, selector: '.hotTopic a', url: 'https://www.news18.com/lifestyle/' },
            { stream: CONST_1.STREAM.BUSINESS, selector: '.hotTopic a', url: 'https://www.news18.com/business/' },
            { stream: CONST_1.STREAM.MOVIE, selector: '.hotTopic a', url: 'https://www.news18.com/movies/' },
        ],
        storyParseConfig: [
            { name: 'title', selector: '.article-sbox h1', type: htmlparser_1.WebElementType.TEXT },
            { name: 'img', selector: '.article-sbox .articleimg img', type: htmlparser_1.WebElementType.IMAGE },
            { name: 'details', selector: '.article-sbox #article_body p', type: htmlparser_1.WebElementType.TEXT },
        ]
    },
    {
        name: 'News18 Tamil',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/news18_english.png',
        type: new web_reader_1.News18WebReader(),
        lang: CONST_1.LANG.IN_TAMIL,
        is_active: true,
        is_partner: true,
        links: [
            { stream: CONST_1.STREAM.HEADLINE, selector: '.lead-story a', url: 'https://www.news18.com/' },
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.hotTopic a', url: 'https://www.news18.com/politics/' },
            { stream: CONST_1.STREAM.COUNTRY, selector: '.hotTopic a', url: 'https://www.news18.com/india/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.hotTopic a', url: 'https://www.news18.com/world/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: '.hotTopic a', url: 'https://www.news18.com/tech/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.hotTopic a', url: 'https://www.news18.com/entertainment/' },
            { stream: CONST_1.STREAM.LIFESTYLE, selector: '.hotTopic a', url: 'https://www.news18.com/lifestyle/' },
            { stream: CONST_1.STREAM.BUSINESS, selector: '.hotTopic a', url: 'https://www.news18.com/business/' },
            { stream: CONST_1.STREAM.MOVIE, selector: '.hotTopic a', url: 'https://www.news18.com/movies/' },
        ],
        storyParseConfig: [
            { name: 'title', selector: '.article-sbox h1', type: htmlparser_1.WebElementType.TEXT },
            { name: 'img', selector: '.article-sbox .articleimg img', type: htmlparser_1.WebElementType.IMAGE },
            { name: 'details', selector: '.article-sbox #article_body p', type: htmlparser_1.WebElementType.TEXT },
        ]
    },
    {
        name: 'News18 Telegu',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/news18_english.png',
        type: new web_reader_1.News18WebReader(),
        lang: CONST_1.LANG.IN_TELUGU,
        is_active: true,
        is_partner: true,
        links: [
            { stream: CONST_1.STREAM.HEADLINE, selector: '.lead-story a', url: 'https://www.news18.com/' },
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.hotTopic a', url: 'https://www.news18.com/politics/' },
            { stream: CONST_1.STREAM.COUNTRY, selector: '.hotTopic a', url: 'https://www.news18.com/india/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.hotTopic a', url: 'https://www.news18.com/world/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: '.hotTopic a', url: 'https://www.news18.com/tech/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.hotTopic a', url: 'https://www.news18.com/entertainment/' },
            { stream: CONST_1.STREAM.LIFESTYLE, selector: '.hotTopic a', url: 'https://www.news18.com/lifestyle/' },
            { stream: CONST_1.STREAM.BUSINESS, selector: '.hotTopic a', url: 'https://www.news18.com/business/' },
            { stream: CONST_1.STREAM.MOVIE, selector: '.hotTopic a', url: 'https://www.news18.com/movies/' },
        ],
        storyParseConfig: [
            { name: 'title', selector: '.article-sbox h1', type: htmlparser_1.WebElementType.TEXT },
            { name: 'img', selector: '.article-sbox .articleimg img', type: htmlparser_1.WebElementType.IMAGE },
            { name: 'details', selector: '.article-sbox #article_body p', type: htmlparser_1.WebElementType.TEXT },
        ]
    },
    {
        name: 'News18 Malayalam',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/news18_english.png',
        type: new web_reader_1.News18WebReader(),
        lang: CONST_1.LANG.IN_MALAYALAM,
        is_active: true,
        is_partner: true,
        links: [
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.hotTopic a', url: 'https://malayalam.news18.com/news/' },
            { stream: CONST_1.STREAM.SPORTS, selector: '.hotTopic a', url: 'https://malayalam.news18.com/sports/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.hotTopic a', url: 'https://malayalam.news18.com/film/' },
            { stream: CONST_1.STREAM.SPORTS, selector: '.hotTopic a', url: 'https://malayalam.news18.com/gulf/' },
            { stream: CONST_1.STREAM.LIFESTYLE, selector: '.hotTopic a', url: 'https://malayalam.news18.com/life/' },
            { stream: CONST_1.STREAM.BUSINESS, selector: '.hotTopic a', url: 'https://malayalam.news18.com/career/' },
            { stream: CONST_1.STREAM.CRIME, selector: '.hotTopic a', url: 'https://malayalam.news18.com/crime/' },
        ],
        storyParseConfig: [
            { name: 'title', selector: '#article h1', type: htmlparser_1.WebElementType.TEXT },
            { name: 'img', selector: '#article .articleimg img', type: htmlparser_1.WebElementType.IMAGE },
            { name: 'details', selector: '#article #article_body .storypara', type: htmlparser_1.WebElementType.TEXT },
        ]
    },
];
//# sourceMappingURL=news18.js.map