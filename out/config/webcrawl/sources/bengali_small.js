"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CONST_1 = require("../../CONST");
var web_reader_1 = require("../web_reader");
exports.urlList = [
    {
        name: 'Darkari Tips',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/darkari_tips.png',
        type: new web_reader_1.WordPressWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
        is_partner: true,
        links: [
            { stream: CONST_1.STREAM.HEADLINE, url: 'https://www.darkaritips.com/headline/' },
            { stream: CONST_1.STREAM.HEALTH, url: 'https://www.darkaritips.com/category/health-message/' },
            { stream: CONST_1.STREAM.LIFESTYLE, url: 'https://www.darkaritips.com/category/lifestyle/' },
        ]
    },
    {
        name: 'GNE Bangla',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/gnebangla.png',
        type: new web_reader_1.WordPressWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
        is_partner: true,
        links: [
            { stream: CONST_1.STREAM.VIRAL, url: 'https://gnebangla.in/category/viral-news/' },
            { stream: CONST_1.STREAM.STATE, url: 'https://gnebangla.in/category/local-news/' },
            { stream: CONST_1.STREAM.STATE, url: 'https://gnebangla.in/category/west-bengal/' },
            { stream: CONST_1.STREAM.NATIONAL, url: 'https://gnebangla.in/category/national-news/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, url: 'https://gnebangla.in/category/international/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, url: 'https://gnebangla.in/category/technology/' },
            { stream: CONST_1.STREAM.SPORTS, url: 'https://gnebangla.in/category/sports-news/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, url: 'https://gnebangla.in/category/entertainment/' },
        ]
    },
    // TODO: PLEASE FIX THIS
    {
        name: 'Kolkata 24X7',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/kolkata_24x7.png',
        type: new web_reader_1.WordPressWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: false,
        is_partner: true,
        links: [
            { stream: CONST_1.STREAM.HEADLINE, url: 'https://www.kolkata24x7.com/' },
            { stream: CONST_1.STREAM.FIRST_PAGE, url: 'https://www.kolkata24x7.com/' },
            { stream: CONST_1.STREAM.STATE, url: 'https://www.kolkata24x7.com/category/kolkata/' },
            { stream: CONST_1.STREAM.NATIONAL, url: 'https://www.kolkata24x7.com/category/national-news/' },
            { stream: CONST_1.STREAM.STATE, url: 'https://www.kolkata24x7.com/category/west-bengal/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, url: 'https://www.kolkata24x7.com/category/international-news/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, url: 'https://www.kolkata24x7.com/category/tech-news/' },
        ]
    },
    {
        name: 'Aaj Bangla',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/aj_bangla_tv.png',
        type: new web_reader_1.WordPressWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
        is_partner: false,
        links: [
            { stream: CONST_1.STREAM.COUNTRY, url: 'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%a6%e0%a7%87%e0%a6%b6/' },
            { stream: CONST_1.STREAM.HEADLINE, url: 'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%95%e0%a6%b2%e0%a6%95%e0%a6%be%e0%a6%a4%e0%a6%be/' },
            { stream: CONST_1.STREAM.STATE, url: 'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%b0%e0%a6%be%e0%a6%9c%e0%a7%8d%e0%a6%af/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, url: 'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%8d%e0%a6%ac/' },
            { stream: CONST_1.STREAM.BANGLADESH, url: 'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%be%e0%a6%82%e0%a6%b2%e0%a6%be%e0%a6%a6%e0%a7%87%e0%a6%b6/' },
            { stream: CONST_1.STREAM.SPORTS, url: 'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%96%e0%a7%87%e0%a6%b2%e0%a6%be/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, url: 'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%bf%e0%a6%a8%e0%a7%8b%e0%a6%a6%e0%a6%a8/' },
            { stream: CONST_1.STREAM.HOROSCOPE, url: 'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c%e0%a6%95%e0%a7%87%e0%a6%b0-%e0%a6%a6%e0%a6%bf%e0%a6%a8/' },
            { stream: CONST_1.STREAM.LIFESTYLE, url: 'https://www.aajbangla.in/category/%e0%a6%b2%e0%a6%be%e0%a6%87%e0%a6%ab%e0%a6%b8%e0%a7%8d%e0%a6%9f%e0%a6%be%e0%a6%87%e0%a6%b2/' },
            { stream: CONST_1.STREAM.TOUR, url: 'https://www.aajbangla.in/category/%e0%a6%ad%e0%a7%8d%e0%a6%b0%e0%a6%ae%e0%a6%a3/' },
        ]
    },
    {
        name: 'Totka 24X7',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/totka_24x7.png',
        type: new web_reader_1.WordPressWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
        is_partner: true,
        links: [
            { stream: CONST_1.STREAM.LIFESTYLE, url: 'https://www.totka24x7.com/archives/category/lifestyle' },
            { stream: CONST_1.STREAM.BUSINESS, url: 'https://www.totka24x7.com/archives/category/earn-money' },
            { stream: CONST_1.STREAM.VIRAL, url: 'https://www.totka24x7.com/archives/category/viral' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, url: 'https://www.totka24x7.com/archives/category/entertainment' },
            { stream: CONST_1.STREAM.INTERNATIONAL, url: 'https://www.totka24x7.com/archives/category/international' },
            { stream: CONST_1.STREAM.TECHNOLOGY, url: 'https://www.totka24x7.com/archives/category/technology' },
            { stream: CONST_1.STREAM.HEADLINE, url: 'https://www.totka24x7.com/archives/category/headlines' },
            { stream: CONST_1.STREAM.ASTROLOGY, url: 'https://www.totka24x7.com/archives/category/astrology' },
            { stream: CONST_1.STREAM.OFF_BEAT, url: 'https://www.totka24x7.com/archives/category/different-news' },
        ]
    },
    {
        name: 'Bharat Barta',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/bharat_barta.png',
        type: new web_reader_1.WordPressWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
        is_partner: true,
        links: [
            { stream: CONST_1.STREAM.VIRAL, url: 'https://www.bharatbarta.com/category/vairal/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, url: 'https://www.bharatbarta.com/category/entertainment/' },
            { stream: CONST_1.STREAM.FIRST_PAGE, url: 'https://www.bharatbarta.com/category/news/' },
            { stream: CONST_1.STREAM.POLITICS, url: 'https://www.bharatbarta.com/category/politics-news/' },
            { stream: CONST_1.STREAM.LIFESTYLE, url: 'https://www.bharatbarta.com/category/lifestyle/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, url: 'https://www.bharatbarta.com/category/technology/' },
            { stream: CONST_1.STREAM.SPORTS, url: 'https://www.bharatbarta.com/category/sports/' },
            { stream: CONST_1.STREAM.OFF_BEAT, url: 'https://www.bharatbarta.com/category/bb-special/' },
        ]
    },
    {
        name: 'Banglar Pran',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/banglar_pran.png',
        type: new web_reader_1.WordPressWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
        is_partner: true,
        links: [
            { stream: CONST_1.STREAM.BANGLADESH, url: 'https://www.banglarpran.com/archives/category/dooars' },
            { stream: CONST_1.STREAM.STATE, url: 'https://www.banglarpran.com/archives/category/state' },
            { stream: CONST_1.STREAM.POLITICS, url: 'https://www.banglarpran.com/archives/category/politics' },
            { stream: CONST_1.STREAM.COUNTRY, url: 'https://www.banglarpran.com/archives/category/india' },
            { stream: CONST_1.STREAM.INTERNATIONAL, url: 'https://www.banglarpran.com/archives/category/internation' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, url: 'https://www.banglarpran.com/archives/category/entertrainment' },
            { stream: CONST_1.STREAM.LIFESTYLE, url: 'https://www.banglarpran.com/archives/category/lifestyle' },
        ]
    },
];
//# sourceMappingURL=bengali_small.js.map