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
var request = require('async-request'), // TODO: move to const request = require("request-promise");
response;
var cheerio = require('cheerio');
var Url = require('url-parse');
var analytics_1 = require("../../analytics");
var db_helper_1 = require("../utils/db_helper");
var CONST_1 = require("../CONST");
var lodash_1 = require("lodash");
var network_1 = require("./network");
var cron = require('node-cron');
var WebCrawler = /** @class */ (function () {
    function WebCrawler() {
    }
    // passing test as true will test one link for each categories
    WebCrawler.prototype.crawl = function (list, isTest) {
        if (isTest === void 0) { isTest = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _loop_1, _i, list_1, web_entry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _loop_1 = function () {
                            var config, top_urls, _i, _a, weblink, urls, notinDb, stories, _b, top_urls_1, link, storyDict, cont, e_1;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        if (!web_entry.is_active) {
                                            console.log("[INFO] Skipping as the info is not active " + web_entry.name);
                                            return [2 /*return*/, "continue"];
                                        }
                                        console.log("====================== P R O C E S S I N G===========================");
                                        config = web_entry.type.getWebConfig();
                                        // override the config
                                        if (web_entry.storyParseConfig) {
                                            config.storyParseConfig = web_entry.storyParseConfig;
                                        }
                                        top_urls = [];
                                        _i = 0, _a = web_entry.links;
                                        _c.label = 1;
                                    case 1:
                                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                                        weblink = _a[_i];
                                        // override the selector.
                                        if (weblink.selector) {
                                            config.list_selector = weblink.selector;
                                        }
                                        return [4 /*yield*/, network_1.parseStoreList(weblink.url, config)];
                                    case 2:
                                        urls = _c.sent();
                                        top_urls = top_urls.concat(urls.map(function (u) {
                                            return { url: u, stream: weblink.stream };
                                        }));
                                        if (isTest) {
                                            return [3 /*break*/, 4];
                                        }
                                        _c.label = 3;
                                    case 3:
                                        _i++;
                                        return [3 /*break*/, 1];
                                    case 4:
                                        if (top_urls.length == 0) {
                                            analytics_1.Analytics.action("empty_root_url", weblink.url);
                                            console.log("[ERROR] $$$$$$$$$$ PLEASE CHECK THIS $$$$$$$$$$$$$");
                                            return [2 /*return*/, "continue"];
                                        }
                                        // remove dups
                                        console.log("++ Link/Merge Total " + top_urls.length);
                                        top_urls = lodash_1.uniqBy(top_urls, 'url');
                                        console.log("++ Link/After Uniques " + top_urls.length);
                                        return [4 /*yield*/, db_helper_1.detectUrlNotInDb(top_urls.map(function (x) { return x.url; }))];
                                    case 5:
                                        notinDb = _c.sent();
                                        if (!isTest) {
                                            top_urls = top_urls.filter(function (x) { return notinDb.indexOf(x.url) != -1; });
                                        }
                                        console.log("++ Link/Not in DB " + top_urls.length);
                                        stories = [];
                                        _b = 0, top_urls_1 = top_urls;
                                        _c.label = 6;
                                    case 6:
                                        if (!(_b < top_urls_1.length)) return [3 /*break*/, 12];
                                        link = top_urls_1[_b];
                                        _c.label = 7;
                                    case 7:
                                        _c.trys.push([7, 9, , 10]);
                                        return [4 /*yield*/, network_1.parseStory(link.url, config)];
                                    case 8:
                                        storyDict = _c.sent();
                                        // append any extra here.
                                        storyDict['lang'] = web_entry.lang;
                                        storyDict['stream'] = link.stream;
                                        storyDict['is_active'] = web_entry.is_active ? "1" : "0";
                                        cont = CONST_1.buildContent(storyDict);
                                        if (CONST_1.validate(cont)) {
                                            stories.push(cont);
                                        }
                                        else {
                                            console.log("[ERROR] $$$$$$$$$$ PLEASE CHECK THIS $$$$$$$$$$$$$");
                                            console.log(cont);
                                            analytics_1.Analytics.action("empty_data_found", storyDict.url);
                                        }
                                        return [3 /*break*/, 10];
                                    case 9:
                                        e_1 = _c.sent();
                                        console.log("[ERROR] $$$$$$$$$$ PLEASE CHECK THIS $$$$$$$$$$$$$");
                                        analytics_1.Analytics.action("exception_while_fetching", link.url);
                                        analytics_1.Analytics.exception(e_1);
                                        return [3 /*break*/, 10];
                                    case 10:
                                        if (isTest) {
                                            return [3 /*break*/, 12];
                                        }
                                        _c.label = 11;
                                    case 11:
                                        _b++;
                                        return [3 /*break*/, 6];
                                    case 12:
                                        console.log("++ Try saving count: " + stories.length);
                                        if (isTest) {
                                            console.log(stories);
                                            if (stories.length == 0) {
                                                throw Error("Please fix this now.");
                                            }
                                            console.log("TEST PASSED - PLEASE CHECK ABOVE");
                                            return [2 /*return*/, "continue"];
                                        }
                                        return [4 /*yield*/, db_helper_1.saveToDB(stories)];
                                    case 13:
                                        _c.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        _i = 0, list_1 = list;
                        _a.label = 1;
                    case 1:
                        if (!(_i < list_1.length)) return [3 /*break*/, 4];
                        web_entry = list_1[_i];
                        return [5 /*yield**/, _loop_1()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return WebCrawler;
}());
exports.WebCrawler = WebCrawler;
//# sourceMappingURL=web_crawl.js.map