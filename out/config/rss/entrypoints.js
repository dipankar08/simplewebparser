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
var rss_reader_1 = require("./rss_reader");
var CONST_1 = require("../CONST");
var rss_crawl_1 = require("./rss_crawl");
var analytics_1 = require("../../analytics");
var dlog_1 = require("../utils/dlog");
var cron = require('node-cron');
exports.urlList = [
    /*
        // TimesNews
        {url:'http://eisamay.indiatimes.com/city/rssfeedsection/15819618.cms', extra:{'stream':STREAM.KOLKATA, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'http://eisamay.indiatimes.com/state/rssfeedsection/15819609.cms', extra:{'stream':STREAM.STATE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'http://eisamay.indiatimes.com/nation/rssfeedsection/15819599.cms', extra:{'stream':STREAM.COUNTRY, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'http://eisamay.indiatimes.com/international/rssfeedsection/15819594.cms', extra:{'stream':STREAM.INTERNATIONAL, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'http://eisamay.indiatimes.com/sports/rssfeedsection/23000116.cms', extra:{'stream':STREAM.SPORTS, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'http://eisamay.indiatimes.com/business/rssfeedsection/15819574.cms', extra:{'stream':STREAM.BUSINESS, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'http://eisamay.indiatimes.com/entertainment/rssfeedsection/15819570.cms', extra:{'stream':STREAM.ENTERTAINMENT, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'http://eisamay.indiatimes.com/lifestyle/rssfeedsection/15992436.cms', extra:{'stream':STREAM.LIFESTYLE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    
        // OneIndia
        {url:'https://bengali.oneindia.com/rss/astrology-fb.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://bengali.oneindia.com/rss/business-fb.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://bengali.oneindia.com/rss/cricket-fb.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://bengali.oneindia.com/rss/jokes-fb.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://bengali.oneindia.com/rss/kolkata-fb.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://bengali.oneindia.com/rss/movies-fb.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://bengali.oneindia.com/rss/news-fb.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://bengali.oneindia.com/rss/travel-fb.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://bengali.oneindia.com/rss/west-bengal-news-fb.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    
        // Zee News
        {url:'http://zeenews.india.com/bengali/rssfeed/nation.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'http://zeenews.india.com/bengali/rssfeed/world.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'http://zeenews.india.com/bengali/rssfeed/kolkata.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'http://zeenews.india.com/bengali/rssfeed/zila.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'http://zeenews.india.com/bengali/rssfeed/sports.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'http://zeenews.india.com/bengali/rssfeed/entertainment.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'http://zeenews.india.com/bengali/health.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'http://zeenews.india.com/bengali/lifestyle.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    
    
        // News18
        {url:'https://www.bengali.news18.com/rss/national.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://www.bengali.news18.com/rss/international.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://www.bengali.news18.com/rss/sports.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://www.bengali.news18.com/rss/entertainment.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://www.bengali.news18.com/rss/life-style.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://www.bengali.news18.com/rss/business.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://www.bengali.news18.com/rss/technology.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://www.bengali.news18.com/rss/south-bengal.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://www.bengali.news18.com/rss/north-bengal.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://www.bengali.news18.com/rss/kolkata.xml', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    
    
    
        // ABP
        {url:'https://abpananda.abplive.in/home/feed', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://abpananda.abplive.in/kolkata-news/feed', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://abpananda.abplive.in/india-news/feed', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://abpananda.abplive.in/world-news/feed', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://abpananda.abplive.in/sports/feed', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://abpananda.abplive.in/entertainment/feed', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://abpananda.abplive.in/aaj-focus-e/feed', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    
    
        // AajBangla
        {url:'https://www.aajbangla.in/category/aajkolkata/feed', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%b0%e0%a6%be%e0%a6%9c%e0%a7%8d%e0%a6%af/feed', extra:{'stream':STREAM.STATE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%a6%e0%a7%87%e0%a6%b6/feed', extra:{'stream':STREAM.COUNTRY, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%a4%e0%a7%8d%e0%a6%b0%e0%a6%bf%e0%a6%aa%e0%a7%81%e0%a6%b0%e0%a6%be/feed', extra:{'stream':STREAM.TRIPURA, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%8d%e0%a6%ac-aaj-world-news/feed', extra:{'stream':STREAM.INTERNATIONAL, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%96%e0%a7%87%e0%a6%b2%e0%a6%be/feed', extra:{'stream':STREAM.SPORTS, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%bf%e0%a6%a8%e0%a7%8b%e0%a6%a6%e0%a6%a8/feed', extra:{'stream':STREAM.ENTERTAINMENT, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c%e0%a6%95%e0%a7%87%e0%a6%b0-%e0%a6%a6%e0%a6%bf%e0%a6%a8/feed', extra:{'stream':STREAM.ASTROLOGY, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%87%e0%a6%b7/feed', extra:{'stream':STREAM.OFF_BEAT, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://www.aajbangla.in/category/%e0%a6%b2%e0%a6%be%e0%a6%87%e0%a6%ab%e0%a6%b8%e0%a7%8d%e0%a6%9f%e0%a6%be%e0%a6%87%e0%a6%b2/', extra:{'stream':STREAM.LIFESTYLE, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://www.aajbangla.in/category/%e0%a6%ad%e0%a7%8d%e0%a6%b0%e0%a6%ae%e0%a6%a3/', extra:{'stream':STREAM.TOUR, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
        {url:'https://www.aajbangla.in/feed', extra:{'stream':STREAM.LATEST, 'lang':LANG.IN_BENGALI,'categories':CATEGORIES.NEWS}, type:RSS_TYPE.WORD_PRESS},
    */
    // https://www.master24.in
    { url: 'https://www.master24.in/archives/category/politics/feed', extra: { 'stream': CONST_1.STREAM.POLITICS, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.master24.in/archives/category/state/feed', extra: { 'stream': CONST_1.STREAM.STATE, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.master24.in/archives/category/national/feed', extra: { 'stream': CONST_1.STREAM.COUNTRY, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.master24.in/archives/category/international/feed', extra: { 'stream': CONST_1.STREAM.INTERNATIONAL, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.master24.in/archives/category/lifestyle/feed', extra: { 'stream': CONST_1.STREAM.LIFESTYLE, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.master24.in/archives/category/editorial/feed', extra: { 'stream': CONST_1.STREAM.EDITORIAL, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.master24.in/archives/category/tech-news/feed', extra: { 'stream': CONST_1.STREAM.TECHNOLOGY, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.master24.in/archives/category/job-and-business/feed', extra: { 'stream': CONST_1.STREAM.JOB, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.master24.in/archives/category/sports/feed', extra: { 'stream': CONST_1.STREAM.SPORTS, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.master24.in/feed', extra: { 'stream': CONST_1.STREAM.LATEST, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    // darkaritips
    { url: 'https://www.darkaritips.com/category/pregnancy-care/', extra: { 'stream': CONST_1.STREAM.HEALTH, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.darkaritips.com/category/health-message/', extra: { 'stream': CONST_1.STREAM.HEALTH, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.darkaritips.com/category/lifestyle/', extra: { 'stream': CONST_1.STREAM.LIFESTYLE, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.darkaritips.com/category/recipe/', extra: { 'stream': CONST_1.STREAM.RECIPE, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.darkaritips.com/category/tech-tips/', extra: { 'stream': CONST_1.STREAM.TECHNOLOGY, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.darkaritips.com/category/viral-news/', extra: { 'stream': CONST_1.STREAM.VIRAL, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.darkaritips.com/category/health-nutrition/', extra: { 'stream': CONST_1.STREAM.HEALTH, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.darkaritips.com/category/health-beauty/', extra: { 'stream': CONST_1.STREAM.HEALTH, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.darkaritips.com/category/luck/', extra: { 'stream': CONST_1.STREAM.LIFESTYLE, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.darkaritips.com/feed', extra: { 'stream': CONST_1.STREAM.LIFESTYLE, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    // totka24x7
    { url: 'https://www.totka24x7.com/archives/category/lifestyle/feed', extra: { 'stream': CONST_1.STREAM.LIFESTYLE, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.totka24x7.com/archives/category/earn-money/feed', extra: { 'stream': CONST_1.STREAM.BUSINESS, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.totka24x7.com/archives/category/viral/feed', extra: { 'stream': CONST_1.STREAM.VIRAL, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.totka24x7.com/archives/category/entertainment/feed', extra: { 'stream': CONST_1.STREAM.ENTERTAINMENT, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.totka24x7.com/archives/category/technology/feed', extra: { 'stream': CONST_1.STREAM.TECHNOLOGY, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.totka24x7.com/archives/category/headlines/feed', extra: { 'stream': CONST_1.STREAM.FIRST_PAGE, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.totka24x7.com/archives/category/astrology/feed', extra: { 'stream': CONST_1.STREAM.ASTROLOGY, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.totka24x7.com/archives/category/different-news/feed', extra: { 'stream': CONST_1.STREAM.OTHER, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.totka24x7.com/feed', extra: { 'stream': CONST_1.STREAM.OTHER, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    // Nilkontho 
    { url: 'https://www.nilkantho.in/category/news/kolkata/feed', extra: { 'stream': CONST_1.STREAM.KOLKATA, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.nilkantho.in/category/news/state/feed', extra: { 'stream': CONST_1.STREAM.STATE, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.nilkantho.in/category/news/national/feed', extra: { 'stream': CONST_1.STREAM.COUNTRY, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.nilkantho.in/category/news/world/feed', extra: { 'stream': CONST_1.STREAM.INTERNATIONAL, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.nilkantho.in/category/news/entertainment/feed', extra: { 'stream': CONST_1.STREAM.ENTERTAINMENT, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.nilkantho.in/category/news/sports/feed', extra: { 'stream': CONST_1.STREAM.SPORTS, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.nilkantho.in/category/news/business/feed', extra: { 'stream': CONST_1.STREAM.BUSINESS, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.nilkantho.in/category/news/scitech/feed', extra: { 'stream': CONST_1.STREAM.TECHNOLOGY, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.nilkantho.in/category/health/feed', extra: { 'stream': CONST_1.STREAM.HEALTH, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.nilkantho.in/category/lifestyle/feed', extra: { 'stream': CONST_1.STREAM.LIFESTYLE, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.nilkantho.in/category/mythology/feed', extra: { 'stream': CONST_1.STREAM.MYTHOLOGY, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.nilkantho.in/category/feature/feed', extra: { 'stream': CONST_1.STREAM.OTHER, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.nilkantho.in/category/lets-go/feed', extra: { 'stream': CONST_1.STREAM.TOUR, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.nilkantho.in/category/festive-mood/feed', extra: { 'stream': CONST_1.STREAM.FESTIVE, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.nilkantho.in/feed', extra: { 'stream': CONST_1.STREAM.FIRST_PAGE, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    // GNE Bangla
    { url: 'https://gnebangla.in/category/local-news/feed', extra: { 'stream': CONST_1.STREAM.FIRST_PAGE, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://gnebangla.in/category/west-bengal/feed', extra: { 'stream': CONST_1.STREAM.STATE, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://gnebangla.in/category/national-news/feed', extra: { 'stream': CONST_1.STREAM.COUNTRY, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://gnebangla.in/category/international/feed', extra: { 'stream': CONST_1.STREAM.INTERNATIONAL, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://gnebangla.in/category/technology/feed', extra: { 'stream': CONST_1.STREAM.TECHNOLOGY, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://gnebangla.in/category/sports-news/feed', extra: { 'stream': CONST_1.STREAM.SPORTS, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://gnebangla.in/category/entertainment/feed', extra: { 'stream': CONST_1.STREAM.ENTERTAINMENT, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://gnebangla.in/category/viral-news/feed', extra: { 'stream': CONST_1.STREAM.VIRAL, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://gnebangla.in/category/lifestyle-news/feed', extra: { 'stream': CONST_1.STREAM.LIFESTYLE, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://gnebangla.in/feed', extra: { 'stream': CONST_1.STREAM.OTHER, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    // KolkataTimes 24 
    { url: 'https://kolkatatimes24.com/category/kolkata/feed', extra: { 'stream': CONST_1.STREAM.FIRST_PAGE, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://kolkatatimes24.com/category/politics/feed', extra: { 'stream': CONST_1.STREAM.POLITICS, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://kolkatatimes24.com/category/west-bengal/feed', extra: { 'stream': CONST_1.STREAM.STATE, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://kolkatatimes24.com/category/technology/feed', extra: { 'stream': CONST_1.STREAM.FIRST_PAGE, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://kolkatatimes24.com/category/business-and-economy/feed', extra: { 'stream': CONST_1.STREAM.BUSINESS, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://kolkatatimes24.com/category/national/feed', extra: { 'stream': CONST_1.STREAM.COUNTRY, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://kolkatatimes24.com/category/world/feed', extra: { 'stream': CONST_1.STREAM.INTERNATIONAL, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://kolkatatimes24.com/category/sports/feed', extra: { 'stream': CONST_1.STREAM.SPORTS, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://kolkatatimes24.com/category/offbeat/feed', extra: { 'stream': CONST_1.STREAM.OFF_BEAT, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://kolkatatimes24.com/category/offbeat/fedd', extra: { 'stream': CONST_1.STREAM.OFF_BEAT, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://kolkatatimes24.com/category/lifestyle/feed', extra: { 'stream': CONST_1.STREAM.LIFESTYLE, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://kolkatatimes24.com/feed/', extra: { 'stream': CONST_1.STREAM.FIRST_PAGE, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    // Bharat barta
    { url: 'https://www.bharatbarta.com/category/entertainment/feed/', extra: { 'stream': CONST_1.STREAM.ENTERTAINMENT, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.bharatbarta.com/category/news/international/feed', extra: { 'stream': CONST_1.STREAM.INTERNATIONAL, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.bharatbarta.com/category/news/kolkata/feed', extra: { 'stream': CONST_1.STREAM.FIRST_PAGE, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.bharatbarta.com/category/news/national/feed', extra: { 'stream': CONST_1.STREAM.COUNTRY, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.bharatbarta.com/category/news/politics-news/feed', extra: { 'stream': CONST_1.STREAM.POLITICS, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.bharatbarta.com/category/news/state/feed', extra: { 'stream': CONST_1.STREAM.STATE, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.bharatbarta.com/category/lifestyle/feed', extra: { 'stream': CONST_1.STREAM.LIFESTYLE, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.bharatbarta.com/category/technology/feed', extra: { 'stream': CONST_1.STREAM.TECHNOLOGY, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.bharatbarta.com/category/sports/feed', extra: { 'stream': CONST_1.STREAM.SPORTS, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.bharatbarta.com/category/vairal/feed', extra: { 'stream': CONST_1.STREAM.VIRAL, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.bharatbarta.com/category/bb-special/feed', extra: { 'stream': CONST_1.STREAM.OFF_BEAT, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    { url: 'https://www.bharatbarta.com/feed/', extra: { 'stream': CONST_1.STREAM.LATEST, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.NEWS }, type: rss_reader_1.RSS_TYPE.WORD_PRESS },
    // banglarpran.
    { url: 'https://www.banglarpran.com/archives/category/dooars/feed', type: rss_reader_1.RSS_TYPE.WORD_PRESS, extra: { 'lang': CONST_1.LANG.IN_BENGALI, 'stream': CONST_1.STREAM.BANGLADESH } },
    { url: 'https://www.banglarpran.com/archives/category/state/feed', type: rss_reader_1.RSS_TYPE.WORD_PRESS, extra: { 'lang': CONST_1.LANG.IN_BENGALI, 'stream': CONST_1.STREAM.STATE } },
    { url: 'https://www.banglarpran.com/archives/category/politics/feed', type: rss_reader_1.RSS_TYPE.WORD_PRESS, extra: { 'lang': CONST_1.LANG.IN_BENGALI, 'stream': CONST_1.STREAM.POLITICS } },
    { url: 'https://www.banglarpran.com/archives/category/india/feed', type: rss_reader_1.RSS_TYPE.WORD_PRESS, extra: { 'lang': CONST_1.LANG.IN_BENGALI, 'stream': CONST_1.STREAM.COUNTRY } },
    { url: 'https://www.banglarpran.com/archives/category/internation/feed', type: rss_reader_1.RSS_TYPE.WORD_PRESS, extra: { 'lang': CONST_1.LANG.IN_BENGALI, 'stream': CONST_1.STREAM.INTERNATIONAL } },
    { url: 'https://www.banglarpran.com/archives/category/entertrainment/feed', type: rss_reader_1.RSS_TYPE.WORD_PRESS, extra: { 'lang': CONST_1.LANG.IN_BENGALI, 'stream': CONST_1.STREAM.ENTERTAINMENT } },
    { url: 'https://www.banglarpran.com/archives/category/lifestyle/feed', type: rss_reader_1.RSS_TYPE.WORD_PRESS, extra: { 'lang': CONST_1.LANG.IN_BENGALI, 'stream': CONST_1.STREAM.LIFESTYLE } },
    { url: 'https://www.banglarpran.com/feed', type: rss_reader_1.RSS_TYPE.WORD_PRESS, extra: { 'lang': CONST_1.LANG.IN_BENGALI, 'stream': CONST_1.STREAM.OTHER } },
    // youtube feed.
    { url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCFaQMPEjeQZk7kcHX2RouBA', type: rss_reader_1.RSS_TYPE.YOUTUBE, extra: { 'stream': CONST_1.STREAM.TECHNOLOGY, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.VIDEO } },
    { url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCxiudYA69dNRFEDgvolDbtA', type: rss_reader_1.RSS_TYPE.YOUTUBE, extra: { 'stream': CONST_1.STREAM.TECHNOLOGY, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.VIDEO } },
    { url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UC9YivGoN6UKWkl0k-8G1qyQ', type: rss_reader_1.RSS_TYPE.YOUTUBE, extra: { 'stream': CONST_1.STREAM.TECHNOLOGY, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.VIDEO } },
    { url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCe_VQEe28mNPEwkBJ_kpxCg', type: rss_reader_1.RSS_TYPE.YOUTUBE, extra: { 'stream': CONST_1.STREAM.EDUCATION, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.VIDEO } },
    { url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCjjyoWPQXhskdLLmv-RyzEQ', type: rss_reader_1.RSS_TYPE.YOUTUBE, extra: { 'stream': CONST_1.STREAM.AUDIO_STORY, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.VIDEO } },
    { url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UC2KhNQ3pAmkN6Kepf8ccFZQ', type: rss_reader_1.RSS_TYPE.YOUTUBE, extra: { 'stream': CONST_1.STREAM.MOTIVATIONAL, 'lang': CONST_1.LANG.IN_BENGALI, 'categories': CONST_1.CATEGORIES.VIDEO } },
    { url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCsv4YOF2RBYh0NQ1vuHQ-hg', type: rss_reader_1.RSS_TYPE.YOUTUBE, extra: { 'stream': CONST_1.STREAM.COMEDY, 'lang': CONST_1.LANG.IN_ENGLISH, 'categories': CONST_1.CATEGORIES.VIDEO } },
];
function startCrawl() {
    return __awaiter(this, void 0, void 0, function () {
        var c;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    c = new rss_crawl_1.RssCrawler();
                    return [4 /*yield*/, c.crawl(exports.urlList)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// function. 
function rssCronJob() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            analytics_1.Analytics.launch("crawler_rss");
            // await updateprofile()
            cron.schedule('*/30 * * * *', function () {
                dlog_1.d(Date.now() + " Running a task every 30 minutes");
                startCrawl();
            });
            // run now too.
            startCrawl();
            return [2 /*return*/];
        });
    });
}
exports.rssCronJob = rssCronJob;
//# sourceMappingURL=entrypoints.js.map