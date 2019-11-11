"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CONST_1 = require("../../CONST");
var web_reader_1 = require("../web_reader");
var htmlparser_1 = require("../htmlparser");
var rss_reader_1 = require("../rss_reader");
exports.urlList = [
    // It has RSS - Please move it RSS.
    {
        name: 'Dharitri',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/dharitri.png',
        type: new web_reader_1.News18WebReader(),
        lang: CONST_1.LANG.IN_ORIYA,
        is_active: true,
        is_partner: false,
        rss_feed_url_end: '/feed/',
        links: [
            { stream: CONST_1.STREAM.STATE, url: 'https://www.dharitri.com/category/state-news/' },
            { stream: CONST_1.STREAM.NATIONAL, url: 'https://www.dharitri.com/category/national-news/' },
            { stream: CONST_1.STREAM.FIRST_PAGE, url: 'https://www.dharitri.com/category/metro-news/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, url: 'https://www.dharitri.com/category/international-news/' },
            { stream: CONST_1.STREAM.SPORTS, url: 'https://www.dharitri.com/category/sports-news/' },
            { stream: CONST_1.STREAM.TRAVEL, url: 'https://www.dharitri.com/category/fursat/' },
            { stream: CONST_1.STREAM.BUSINESS, url: 'https://www.dharitri.com/category/business/' },
            { stream: CONST_1.STREAM.LIFESTYLE, url: 'https://www.dharitri.com/category/lifestyle/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, url: 'https://www.dharitri.com/category/entertainment/' },
            { stream: CONST_1.STREAM.CRIME, url: 'https://www.dharitri.com/category/crime-news/' },
        ],
        storyParseConfig: [
            { name: 'title', selector: 'article h1', type: htmlparser_1.WebElementType.TEXT },
            { name: 'img', selector: 'article .post-thumbnail img', type: htmlparser_1.WebElementType.IMAGE },
            { name: 'details', selector: 'article.post p', type: htmlparser_1.WebElementType.TEXT },
        ],
        link_selector: '.thumbnail a',
    },
    {
        name: 'dinamani',
        lang: CONST_1.LANG.IN_TAMIL,
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/dinamani.jgp',
        rsstype: new rss_reader_1.HTMLEnCodedRssReader(),
        is_rss_feed: true,
        is_active: true,
        is_partner: false,
        links: [
            { stream: CONST_1.STREAM.SPORTS, url: 'https://www.dinamani.com/%E0%AE%B5%E0%AE%BF%E0%AE%B3%E0%AF%88%E0%AE%AF%E0%AE%BE%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AF%81/%E0%AE%9A%E0%AF%86%E0%AE%AF%E0%AF%8D%E0%AE%A4%E0%AE%BF%E0%AE%95%E0%AE%B3%E0%AF%8D/rssfeed/?id=480&getXmlFeed=true' },
        ],
    },
    {
        name: 'Asomiya Pratidin',
        lang: CONST_1.LANG.IN_ASSAMESE,
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/asomiyapratidin.jgp',
        is_active: true,
        is_partner: false,
        links: [
            { stream: CONST_1.STREAM.SPORTS, url: 'https://www.asomiyapratidin.in/category/homepage/feed' },
            { stream: CONST_1.STREAM.SPORTS, url: 'https://www.asomiyapratidin.in/category/guwahati/feed' },
            { stream: CONST_1.STREAM.SPORTS, url: 'https://www.asomiyapratidin.in/category/assam/feed' },
            { stream: CONST_1.STREAM.SPORTS, url: 'https://www.asomiyapratidin.in/category/north-east/feed' },
            { stream: CONST_1.STREAM.SPORTS, url: 'https://www.asomiyapratidin.in/category/world/feed' },
            { stream: CONST_1.STREAM.SPORTS, url: 'https://www.asomiyapratidin.in/category/sports/feed' },
            { stream: CONST_1.STREAM.SPORTS, url: 'https://www.asomiyapratidin.in/category/technology/feed' },
            { stream: CONST_1.STREAM.SPORTS, url: 'https://www.asomiyapratidin.in/category/business/feed' }
        ],
        is_rss_feed: true,
        rsstype: new rss_reader_1.WordPressRssReader(),
    },
    {
        name: 'Gujarat Samachar',
        lang: CONST_1.LANG.IN_GUJARATI,
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/gujaratsamachar.jgp',
        is_active: true,
        is_partner: false,
        links: [
            { stream: CONST_1.STREAM.HEADLINE, url: 'https://www.gujaratsamachar.com/rss/top-stories' },
            { stream: CONST_1.STREAM.TECHNOLOGY, url: 'https://www.gujaratsamachar.com/rss/category/science-technology' },
            { stream: CONST_1.STREAM.LIFESTYLE, url: 'https://www.gujaratsamachar.com/rss/category/relationship' },
            { stream: CONST_1.STREAM.LIFESTYLE, url: 'https://www.gujaratsamachar.com/rss/category/lifestyle-fashion' },
            { stream: CONST_1.STREAM.HEALTH, url: 'https://www.gujaratsamachar.com/rss/category/health' },
            { stream: CONST_1.STREAM.ASTROLOGY, url: 'https://www.gujaratsamachar.com/rss/category/astro' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, url: 'https://www.gujaratsamachar.com/rss/category/entertainment' },
            { stream: CONST_1.STREAM.SPORTS, url: 'https://www.gujaratsamachar.com/rss/category/sports' },
            { stream: CONST_1.STREAM.BUSINESS, url: 'https://www.gujaratsamachar.com/rss/category/business' },
            { stream: CONST_1.STREAM.INTERNATIONAL, url: 'https://www.gujaratsamachar.com/rss/category/international' },
            { stream: CONST_1.STREAM.NATIONAL, url: 'https://www.gujaratsamachar.com/rss/category/national' },
        ],
        is_rss_feed: true,
        rsstype: new rss_reader_1.RssTwoReader(),
    },
];
//# sourceMappingURL=other_lang.js.map