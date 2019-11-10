"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CONST_1 = require("../../CONST");
var web_reader_1 = require("../web_reader");
var htmlparser_1 = require("../htmlparser");
var rss_reader_1 = require("../../rss/rss_reader");
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
    // It has RSS - Please move it RSS.
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
];
//# sourceMappingURL=other_lang.js.map