"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var web_reader_1 = require("./web_reader");
var CONST_1 = require("../CONST");
var web_crawl_1 = require("./web_crawl");
var analytics_1 = require("../../analytics");
var db_helper_1 = require("../utils/db_helper");
var _ = require("lodash");
var network_1 = require("./network");
var cron = require('node-cron');
exports.urlList = [
    {
        name: 'OneIndia Bengali',
        type: new web_reader_1.OneIndiaWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
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
        name: 'OneIndia English',
        type: new web_reader_1.OneIndiaWebReader(),
        lang: CONST_1.LANG.IN_ENGLISH,
        is_active: true,
        links: [
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '#containerMain .main-block a', url: 'https://www.oneindia.com/' },
            { stream: CONST_1.STREAM.COUNTRY, url: 'https://www.oneindia.com/india/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, url: 'https://www.oneindia.com/international/' },
            { stream: CONST_1.STREAM.BUSINESS, url: 'https://www.oneindia.com/business/' },
        ]
    },
    {
        name: 'OneIndia Hindi',
        type: new web_reader_1.OneIndiaWebReader(),
        lang: CONST_1.LANG.IN_HINDI,
        is_active: true,
        links: [
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '#containerMain .newsBlock a', url: 'https://hindi.oneindia.com/' },
            { stream: CONST_1.STREAM.COUNTRY, url: 'https://hindi.oneindia.com/news/india/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, url: 'https://hindi.oneindia.com/news/international/' },
        ]
    },
    {
        name: 'News18 Bengali',
        type: new web_reader_1.News18WebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
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
        name: 'News18 English',
        type: new web_reader_1.News18WebReader(),
        lang: CONST_1.LANG.IN_ENGLISH,
        is_active: true,
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
            { name: 'title', selector: '.article-sbox h1', type: network_1.WebElementType.TEXT },
            { name: 'img', selector: '.article-sbox .articleimg img', type: network_1.WebElementType.IMAGE },
            { name: 'details', selector: '.article-sbox #article_body p', type: network_1.WebElementType.TEXT },
        ]
    },
    {
        name: 'News18 Hindi',
        type: new web_reader_1.News18WebReader(),
        lang: CONST_1.LANG.IN_HINDI,
        is_active: true,
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
            { name: 'title', selector: '#article h1', type: network_1.WebElementType.TEXT },
            { name: 'details', selector: '#article .storypara', type: network_1.WebElementType.TEXT },
            { name: 'img', selector: '#article_body .articleimg img', type: network_1.WebElementType.IMAGE },
        ]
    },
    {
        name: 'Nilkontho',
        type: new web_reader_1.ArticleWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
        links: [
            { stream: CONST_1.STREAM.FIRST_PAGE, url: 'https://www.nilkantho.in/category/news/kolkata/' },
            { stream: CONST_1.STREAM.STATE, url: 'https://www.nilkantho.in/category/news/state/' },
            { stream: CONST_1.STREAM.COUNTRY, url: 'https://www.nilkantho.in/category/news/national/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, url: 'https://www.nilkantho.in/category/news/world/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, url: 'https://www.nilkantho.in/category/news/entertainment/' },
            { stream: CONST_1.STREAM.SPORTS, url: 'https://www.nilkantho.in/category/news/sports/' },
            { stream: CONST_1.STREAM.BUSINESS, url: 'https://www.nilkantho.in/category/news/business/' },
            { stream: CONST_1.STREAM.SCIENCE, url: 'https://www.nilkantho.in/category/news/scitech/' },
            { stream: CONST_1.STREAM.LIFESTYLE, url: 'https://www.nilkantho.in/category/lifestyle/' },
            { stream: CONST_1.STREAM.LIFESTYLE, url: 'https://www.nilkantho.in/category/health' },
        ]
    },
    // Wordpress here..
    {
        name: 'Darkari Tips',
        type: new web_reader_1.WordPressWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
        links: [
            { stream: CONST_1.STREAM.HEADLINE, url: 'https://www.darkaritips.com/headline/' },
            { stream: CONST_1.STREAM.HEALTH, url: 'https://www.darkaritips.com/category/health-message/' },
            { stream: CONST_1.STREAM.LIFESTYLE, url: 'https://www.darkaritips.com/category/lifestyle/' },
        ]
    },
    {
        name: 'GNE Bangla',
        type: new web_reader_1.WordPressWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
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
    {
        name: 'Kolkata 24X7',
        type: new web_reader_1.WordPressWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
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
        type: new web_reader_1.WordPressWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
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
        type: new web_reader_1.WordPressWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
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
        type: new web_reader_1.WordPressWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
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
        type: new web_reader_1.WordPressWebReader(),
        lang: CONST_1.LANG.IN_BENGALI,
        is_active: true,
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
function updateProfile(list) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_helper_1.updateProfileToDb(list.map(function (x) {
                        return {
                            title: x.name,
                            lang: CONST_1.LANG[x.lang],
                            hostname: db_helper_1.getHostNameFromUrl(x.links[0].url),
                            img: x.profile_img,
                            streams: _.uniq(x.links.map(function (y) { return CONST_1.STREAM[y.stream]; })),
                            count_followers: 0,
                            is_active: x.is_active ? "1" : "0"
                        };
                    }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function startCrawl() {
    return __awaiter(this, void 0, void 0, function () {
        var c;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    c = new web_crawl_1.WebCrawler();
                    return [4 /*yield*/, updateProfile(exports.urlList)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, c.crawl(exports.urlList, true /*if this */)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// function. 
function webCronJob() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            analytics_1.Analytics.launch("crawler_web");
            // await updateprofile()
            cron.schedule('*/30 * * * *', function () {
                console.log(Date.now() + " Running a task every 30 minutes");
                startCrawl();
            });
            // run now too.
            startCrawl();
            return [2 /*return*/];
        });
    });
}
exports.webCronJob = webCronJob;
//# sourceMappingURL=web_entrypoints.js.map