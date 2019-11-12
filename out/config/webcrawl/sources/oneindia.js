"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CONST_1 = require("../../CONST");
var web_reader_1 = require("../web_reader");
var rss_reader_1 = require("../rss_reader");
exports.urlList = [
    {
        name: 'OneIndia Bengali',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/oneindia.png',
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: false,
        is_partner: false,
        links: [
            { stream: CONST_1.STREAM.FIRST_PAGE, url: 'https://bengali.oneindia.com/rss/astrology-fb.xml' },
            { stream: CONST_1.STREAM.FIRST_PAGE, url: 'https://bengali.oneindia.com/rss/bengali-debates-fb.xml' },
            { stream: CONST_1.STREAM.FIRST_PAGE, url: 'https://bengali.oneindia.com/rss/bengali-infographics-fb.xml' },
            { stream: CONST_1.STREAM.FIRST_PAGE, url: 'https://bengali.oneindia.com/rss/business-fb.xml' },
            { stream: CONST_1.STREAM.FIRST_PAGE, url: 'https://bengali.oneindia.com/rss/cricket-fb.xml' },
            { stream: CONST_1.STREAM.FIRST_PAGE, url: 'https://bengali.oneindia.com/rss/jokes-fb.xml' },
            { stream: CONST_1.STREAM.FIRST_PAGE, url: 'https://bengali.oneindia.com/rss/kolkata-fb.xml' },
            { stream: CONST_1.STREAM.FIRST_PAGE, url: 'https://bengali.oneindia.com/rss/movies-fb.xml' },
            { stream: CONST_1.STREAM.FIRST_PAGE, url: 'https://bengali.oneindia.com/rss/news-fb.xml' },
            { stream: CONST_1.STREAM.FIRST_PAGE, url: 'https://bengali.oneindia.com/rss/travel-fb.xml' },
            { stream: CONST_1.STREAM.FIRST_PAGE, url: 'https://bengali.oneindia.com/rss/west-bengal-news-fb.xml' },
        ],
        is_rss_feed: true,
        rsstype: new rss_reader_1.RssTwoSummaryReader(),
    },
    {
        name: 'OneIndia Gujrati',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/oneindia.png',
        type: new web_reader_1.OneIndiaWebReader(),
        lang: CONST_1.LANG.IN_GUJARATI,
        is_active: false,
        is_partner: false,
        links: [
            { stream: CONST_1.STREAM.HEADLINE, url: 'https://gujarati.oneindia.com/news/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, url: 'https://gujarati.oneindia.com/movies/' },
            { stream: CONST_1.STREAM.ASTROLOGY, url: 'https://gujarati.oneindia.com/astrology/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, url: 'https://gujarati.oneindia.com/auto/' },
            { stream: CONST_1.STREAM.TRAVEL, url: 'https://gujarati.oneindia.com/travel/' },
            { stream: CONST_1.STREAM.BUSINESS, url: 'https://gujarati.oneindia.com/business/' },
        ]
    },
    {
        name: 'OneIndia Bengali',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/oneindia.png',
        type: new web_reader_1.OneIndiaWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
        is_partner: false,
        links: [
            { stream: CONST_1.STREAM.FIRST_PAGE, url: 'https://bengali.oneindia.com/news/kolkata/' },
            { stream: CONST_1.STREAM.COUNTRY, url: 'https://bengali.oneindia.com/news/india/' },
            { stream: CONST_1.STREAM.FIRST_PAGE, url: 'https://bengali.oneindia.com/news/kolkata/' },
            { stream: CONST_1.STREAM.STATE, url: 'https://bengali.oneindia.com/news/west-bengal/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, url: 'https://bengali.oneindia.com/news/international/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, url: 'https://bengali.oneindia.com/news/movies/' },
        ]
    },
    {
        name: 'OneIndia Hindi',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/oneindia.png',
        type: new web_reader_1.OneIndiaWebReader(),
        lang: CONST_1.LANG.IN_HINDI,
        is_active: true,
        is_partner: false,
        links: [
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '#containerMain .newsBlock a', url: 'https://hindi.oneindia.com/' },
            { stream: CONST_1.STREAM.COUNTRY, url: 'https://hindi.oneindia.com/news/india/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, url: 'https://hindi.oneindia.com/news/international/' },
        ]
    },
];
//# sourceMappingURL=oneindia.js.map