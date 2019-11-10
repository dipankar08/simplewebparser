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
var analytics_1 = require("../../analytics");
var db_helper_1 = require("../utils/db_helper");
var CONST_1 = require("../CONST");
var lodash_1 = require("lodash");
var network_1 = require("./network");
var dlog_1 = require("../utils/dlog");
var _ = require("lodash");
var htmlparser_1 = require("./htmlparser");
var cheerio = require('cheerio');
var Url = require('url-parse');
var cron = require('node-cron');
var WebCrawler = /** @class */ (function () {
    function WebCrawler() {
    }
    // passing test as true will test one link for each categories
    WebCrawler.prototype.crawl = function (list, isTest, name) {
        if (isTest === void 0) { isTest = false; }
        if (name === void 0) { name = null; }
        return __awaiter(this, void 0, void 0, function () {
            var _i, list_1, web_entry, stories;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, list_1 = list;
                        _a.label = 1;
                    case 1:
                        if (!(_i < list_1.length)) return [3 /*break*/, 8];
                        web_entry = list_1[_i];
                        if (name != null) {
                            if (web_entry.name != name) {
                                return [3 /*break*/, 7];
                            }
                        }
                        if (!web_entry.is_active) {
                            dlog_1.d("[INFO] Skipping as the info is not active " + web_entry.name);
                            return [3 /*break*/, 7];
                        }
                        dlog_1.d("====================== P R O C E S S I N G===========================");
                        stories = null;
                        if (!web_entry.is_rss_feed) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.processRssFeed(web_entry, isTest)];
                    case 2:
                        stories = _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.processWebFeed(web_entry, isTest)];
                    case 4:
                        stories = _a.sent();
                        _a.label = 5;
                    case 5:
                        // build and validate contents
                        stories = stories.map(function (storyDict) {
                            var cont = CONST_1.buildContent(storyDict);
                            if (cont && CONST_1.validate(cont)) {
                                return cont;
                            }
                            else {
                                if (isTest) {
                                    // throw Error("Content validation failed")
                                }
                                dlog_1.d("[ERROR] $$$$$$$$$$ PLEASE CHECK THIS $$$$$$$$$$$$$ " + storyDict.url);
                                dlog_1.d(cont);
                                analytics_1.Analytics.hit_tracker({ 'action': "empty_data_found", 'link': storyDict.url });
                            }
                            return null;
                        });
                        // remove nulls
                        _.remove(stories, function (x) { return x == null; });
                        // remove duplicates
                        _.uniqBy(stories, 'url');
                        // Perform test 
                        dlog_1.d("[INFO] Try saving count: " + stories.length);
                        if (isTest) {
                            dlog_1.d(stories[0]);
                            if (stories.length == 0) {
                                throw Error("Please fix this now.");
                            }
                            dlog_1.d("TEST PASSED - PLEASE CHECK ABOVE");
                            return [3 /*break*/, 7];
                        }
                        if (!(stories.length > 0)) return [3 /*break*/, 7];
                        return [4 /*yield*/, db_helper_1.saveToDB(stories)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 1];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    // makeing RSS Feed call. 
    WebCrawler.prototype.processRssFeed = function (web_entry, isTest) {
        if (isTest === void 0) { isTest = false; }
        return __awaiter(this, void 0, void 0, function () {
            var storyList, _i, _a, link, list, _b, list_2, l, notinDb;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        storyList = [];
                        _i = 0, _a = web_entry.links;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        link = _a[_i];
                        return [4 /*yield*/, web_entry.rsstype.read(link.url, { stream: link.stream })];
                    case 2:
                        list = _c.sent();
                        for (_b = 0, list_2 = list; _b < list_2.length; _b++) {
                            l = list_2[_b];
                            storyList.push(this.addExtra(l, web_entry));
                        }
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        dlog_1.d("[INFO] LINK/ALL " + storyList.length);
                        // remove duplicates
                        _.uniqBy(storyList, 'url');
                        dlog_1.d("[INFO] LINK/AFTER_UNIQUE " + storyList.length);
                        return [4 /*yield*/, db_helper_1.detectUrlNotInDb(storyList.map(function (x) { return x.url; }))];
                    case 5:
                        notinDb = _c.sent();
                        if (notinDb.length != 0) {
                            storyList = storyList.filter(function (x) { return notinDb.indexOf(x.url) != -1; });
                        }
                        dlog_1.d("[INFO] LINK/NOT_IN_DB " + storyList.length);
                        return [2 /*return*/, storyList];
                }
            });
        });
    };
    // making web call.
    WebCrawler.prototype.processWebFeed = function (web_entry, isTest) {
        if (isTest === void 0) { isTest = false; }
        return __awaiter(this, void 0, void 0, function () {
            var config, top_urls, _i, _a, weblink, list_selector, $, body, parseResult, url_list, notinDb, stories, _b, top_urls_1, link, $, body, storyDict, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        config = web_entry.type.getWebConfig();
                        // override the config
                        if (web_entry.storyParseConfig) {
                            config.storyParseConfig = web_entry.storyParseConfig;
                        }
                        if (web_entry.link_selector) {
                            config.list_selector = web_entry.link_selector;
                        }
                        top_urls = [];
                        _i = 0, _a = web_entry.links;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        weblink = _a[_i];
                        list_selector = config.list_selector;
                        if (weblink.selector) {
                            list_selector = weblink.selector;
                        }
                        $ = null;
                        if (!config.networkFetcher) return [3 /*break*/, 3];
                        dlog_1.d("custom fetch " + weblink.url);
                        return [4 /*yield*/, config.networkFetcher(weblink.url)];
                    case 2:
                        body = _c.sent();
                        $ = cheerio.load(body);
                        _c.label = 3;
                    case 3: return [4 /*yield*/, htmlparser_1.findAllData(weblink.url, [{ name: 'urls', selector: list_selector, type: htmlparser_1.WebElementType.URL_LIST }], $)];
                    case 4:
                        parseResult = _c.sent();
                        url_list = parseResult['urls'];
                        dlog_1.d("[INFO] LinkFound/all: " + url_list.length);
                        url_list = Array.from(new Set(url_list));
                        dlog_1.d("[INFO] LinkFound/unique: " + url_list.length);
                        url_list = network_1.getFilteredUrl(weblink.url, url_list, config);
                        dlog_1.d("[INFO] LinkFound/filter: " + url_list.length);
                        url_list = url_list.slice(0, config.list_limit ? config.list_limit : CONST_1.LIMIT);
                        dlog_1.d("[INFO] LinkFound/slice: " + url_list.length);
                        // first we will slice and then make a reverse to ensure we cut latest news and then insert in reverse order.
                        url_list = url_list.reverse();
                        if (url_list.length == 0) {
                            analytics_1.Analytics.action("error_parse_root_url", weblink.url);
                        }
                        top_urls = top_urls.concat(url_list.map(function (u) {
                            return { url: u, stream: weblink.stream };
                        }));
                        if (isTest) {
                            return [3 /*break*/, 6];
                        }
                        _c.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6:
                        // STEP 2: FETCHING ALL STORIES ONE BY ONE. 
                        if (top_urls.length == 0) {
                            analytics_1.Analytics.hit_tracker({ 'action': "empty_root_url", 'link': weblink.url });
                            dlog_1.d("[ERROR] $$$$$$$$$$ PLEASE CHECK THIS $$$$$$$$$$$$$ " + weblink.url);
                            return [2 /*return*/, []];
                        }
                        // remove dups
                        dlog_1.d("[INFO] Link/Merge Total " + top_urls.length);
                        top_urls = lodash_1.uniqBy(top_urls, 'url');
                        dlog_1.d("[INFO] Link/After Uniques " + top_urls.length);
                        return [4 /*yield*/, db_helper_1.detectUrlNotInDb(top_urls.map(function (x) { return x.url; }))];
                    case 7:
                        notinDb = _c.sent();
                        if (!isTest) {
                            top_urls = top_urls.filter(function (x) { return notinDb.indexOf(x.url) != -1; });
                        }
                        dlog_1.d("[INFO] Link/Not in DB " + top_urls.length);
                        stories = [];
                        _b = 0, top_urls_1 = top_urls;
                        _c.label = 8;
                    case 8:
                        if (!(_b < top_urls_1.length)) return [3 /*break*/, 16];
                        link = top_urls_1[_b];
                        _c.label = 9;
                    case 9:
                        _c.trys.push([9, 13, , 14]);
                        $ = null;
                        if (!config.networkFetcher) return [3 /*break*/, 11];
                        dlog_1.d("custom fetch " + weblink.url);
                        return [4 /*yield*/, config.networkFetcher(weblink.url)];
                    case 10:
                        body = _c.sent();
                        $ = cheerio.load(body);
                        _c.label = 11;
                    case 11: return [4 /*yield*/, htmlparser_1.findAllData(link.url, config.storyParseConfig, $)];
                    case 12:
                        storyDict = _c.sent();
                        storyDict['stream'] = link.stream;
                        storyDict['url'] = link.url;
                        this.addExtra(storyDict, web_entry);
                        stories.push(storyDict);
                        return [3 /*break*/, 14];
                    case 13:
                        e_1 = _c.sent();
                        dlog_1.ex(e_1);
                        dlog_1.d("[ERROR] $$$$$$$$$$ PLEASE CHECK THIS $$$$$$$$$$$$$ :" + link.url);
                        analytics_1.Analytics.hit_tracker({ 'action': "exception_while_fetching", 'link': link.url });
                        analytics_1.Analytics.exception(e_1);
                        return [3 /*break*/, 14];
                    case 14:
                        if (isTest) {
                            return [3 /*break*/, 16];
                        }
                        _c.label = 15;
                    case 15:
                        _b++;
                        return [3 /*break*/, 8];
                    case 16: return [2 /*return*/, stories];
                }
            });
        });
    };
    // adding extra element in each story.
    WebCrawler.prototype.addExtra = function (storyDict, web_entry) {
        // append any extra here.
        storyDict['lang'] = web_entry.lang;
        storyDict['hostname'] = db_helper_1.getHostNameFromUrl(storyDict.url);
        storyDict['is_active'] = web_entry.is_active ? "1" : "0";
        storyDict['is_partner'] = web_entry.is_partner;
        if (!storyDict.img) {
            storyDict.img = web_entry.profile_img;
        }
        return storyDict;
    };
    return WebCrawler;
}());
exports.WebCrawler = WebCrawler;
//# sourceMappingURL=web_crawl.js.map