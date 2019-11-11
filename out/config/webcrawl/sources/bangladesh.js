"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CONST_1 = require("../../CONST");
var web_reader_1 = require("../web_reader");
var htmlparser_1 = require("../htmlparser");
var rss_reader_1 = require("../../rss/rss_reader");
exports.urlList = [
    {
        name: 'Templates',
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/aajkaal.png',
        type: new web_reader_1.DefaultWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: false,
        is_partner: false,
        links: [
            { stream: CONST_1.STREAM.KOLKATA, url: 'https://www.aajkaal.in/kolkata' },
            { stream: CONST_1.STREAM.STATE, url: 'https://www.aajkaal.in/state' },
        ],
        link_selector: '.image-holder a',
        storyParseConfig: [
            { name: 'title', selector: '.blog-detail-banner h1', type: htmlparser_1.WebElementType.TEXT },
            { name: 'img', selector: '.blog-detail-banner .image-holder  img', type: htmlparser_1.WebElementType.IMAGE },
            { name: 'details', selector: '.blog-detail  p', type: htmlparser_1.WebElementType.TEXT },
        ]
    },
    {
        name: 'Gujarat Samachar',
        lang: CONST_1.LANG.IN_GUJARATI,
        profile_img: 'https://raw.githubusercontent.com/dipankar08/staticcdn/master/img/gujaratsamachar.jgp',
        is_active: false,
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
//# sourceMappingURL=bangladesh.js.map