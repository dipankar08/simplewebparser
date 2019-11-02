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
var CONST_1 = require("../CONST");
var analytics_1 = require("../../analytics");
var request = require('async-request'), // TODO: move to const request = require("request-promise");
response;
var cheerio = require('cheerio');
var Url = require('url-parse');
var WebElementType;
(function (WebElementType) {
    WebElementType[WebElementType["TEXT"] = 0] = "TEXT";
    WebElementType[WebElementType["IMAGE"] = 1] = "IMAGE";
    WebElementType[WebElementType["MULTI_TEXT"] = 2] = "MULTI_TEXT";
})(WebElementType = exports.WebElementType || (exports.WebElementType = {}));
function parseStory(url, config) {
    return __awaiter(this, void 0, void 0, function () {
        var result, url1, body, resp, error_1, $_1, _i, _a, item, val, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    result = {};
                    result['url'] = url;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 9, , 10]);
                    console.log("[DEBUG] Try fetching... " + url);
                    url1 = new Url(url);
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 7, , 8]);
                    if (!config.networkFetcher) return [3 /*break*/, 4];
                    return [4 /*yield*/, config.networkFetcher(url)];
                case 3:
                    body = _b.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, request(url)];
                case 5:
                    resp = _b.sent();
                    body = resp.body;
                    _b.label = 6;
                case 6: return [3 /*break*/, 8];
                case 7:
                    error_1 = _b.sent();
                    analytics_1.Analytics.exception(error_1);
                    return [2 /*return*/, {}];
                case 8:
                    console.log("[INFO Fetching done!");
                    result['hostname'] = url1.hostname;
                    $_1 = cheerio.load(body);
                    for (_i = 0, _a = config.storyParseConfig; _i < _a.length; _i++) {
                        item = _a[_i];
                        switch (item.type) {
                            case WebElementType.TEXT:
                                val = cleanHtmlData(url, $_1(item.selector).toArray().map(function (x) { return $_1(x).text(); }).join('\n'), config);
                                result[item.name.toString()] = val;
                                break;
                            case WebElementType.IMAGE:
                                if (!item.attr) {
                                    item.attr = 'src';
                                }
                                result[item.name.toString()] = absUrl(url, $_1(item.selector).attr(item.attr));
                                if (!result[item.name.toString()]) {
                                    result[item.name.toString()] = config.profileDefaultImg;
                                }
                                break;
                        }
                    }
                    return [3 /*break*/, 10];
                case 9:
                    error_2 = _b.sent();
                    analytics_1.Analytics.exception(error_2, result);
                    console.log("[ERROR] article parse failed for URL:" + url + ", Error is: " + error_2);
                    console.log(error_2);
                    return [3 /*break*/, 10];
                case 10: return [2 /*return*/, result];
            }
        });
    });
}
exports.parseStory = parseStory;
function parseStoreList(url, config) {
    return __awaiter(this, void 0, void 0, function () {
        var urlList, resp, body, $, url_list, _i, _a, n, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("[INFO] Total Story List count: " + url.length);
                    urlList = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    console.log("[INFO] Fetching link " + url);
                    return [4 /*yield*/, request(url)];
                case 2:
                    resp = _b.sent();
                    body = resp.body;
                    $ = cheerio.load(body);
                    url_list = [];
                    for (_i = 0, _a = $(config.list_selector); _i < _a.length; _i++) {
                        n = _a[_i];
                        url_list.push(n.attribs.href);
                    }
                    url_list = url_list.map(function (x) { return absUrl(url.toString(), x); });
                    console.log("[INFO] LinkFound/all: " + url_list.length);
                    url_list = Array.from(new Set(url_list));
                    console.log("[INFO] LinkFound/unique: " + url_list.length);
                    url_list = getFilteredUrl(url, url_list, config);
                    console.log("[INFO] LinkFound/filter: " + url_list.length);
                    url_list = url_list.slice(0, config.list_limit ? config.list_limit : CONST_1.LIMIT);
                    console.log("[INFO] LinkFound/slice: " + url_list.length);
                    // first we will slice and then make a reverse to ensure we cut latest news and then insert in reverse order.
                    url_list = url_list.reverse();
                    if (url_list.length == 0) {
                        analytics_1.Analytics.action("error_parse_root_url", url);
                    }
                    return [2 /*return*/, url_list];
                case 3:
                    err_1 = _b.sent();
                    analytics_1.Analytics.action("error_parse_root_url", url);
                    analytics_1.Analytics.exception(err_1, { "url": url });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.parseStoreList = parseStoreList;
function absUrl(root, url) {
    if (url == null || url.length == 0) {
        return null;
    }
    // https or http://
    if (url.startsWith("http")) {
        return url;
    }
    if (url.startsWith("www")) {
        return url;
    }
    //  starts with //abc.face
    if (url[0] == '/' && url[1] == '/') {
        return Url(root).protocol + url;
    }
    // syarts with /abc/def
    if (url[0] == '/') {
        return (new Url(root)).origin + url;
    }
    // sarts with anything else like "detailsnews?..."
    return Url(root).origin + "/" + url;
}
exports.absUrl = absUrl;
function getFilteredUrl(root_url, urls_abs, config) {
    var url_filtered = [];
    for (var _i = 0, urls_abs_1 = urls_abs; _i < urls_abs_1.length; _i++) {
        var u = urls_abs_1[_i];
        if (Url(u).hostname != Url(root_url).hostname) {
            console.log("[INFO] Ignore url " + u + " for out of domain fetch");
            continue;
        }
        if (config.ignoreUrlRegex && config.ignoreUrlRegex.length > 0) {
            var flag = 0;
            for (var _a = 0, _b = config.ignoreUrlRegex; _a < _b.length; _a++) {
                var ic = _b[_a];
                if (u.indexOf(ic) != -1) {
                    console.log("[INFO] Ignoring url " + u + " as it is getting ignored by rootConfig");
                    flag = 1;
                    break;
                }
            }
            if (flag == 1) {
                continue;
            }
        }
        url_filtered.push(u);
    }
    return url_filtered;
}
exports.getFilteredUrl = getFilteredUrl;
// this function will clean the data.
function cleanHtmlData(url, str, config) {
    str = str.trim();
    str = str.replace(/[\t ]+/g, " ");
    str = str.replace(/[\r\n]+/g, '\n');
    str = str.replace(/[\n]+/g, '\n');
    // somehow replace consecutive replace doesn't work
    str = str.split("\n").filter(function (x) {
        if (x.trim().length < 1) {
            return false;
        }
        var shouldNotIgnore = true;
        if (config.ignoreLineRegex != null) {
            for (var _i = 0, _a = config.ignoreLineRegex; _i < _a.length; _i++) {
                var regex = _a[_i];
                if (x.indexOf(regex) != -1) {
                    shouldNotIgnore = false;
                    break;
                }
            }
        }
        return shouldNotIgnore;
    }).join("\n");
    if (str.length == 0) {
        console.log("\n\n[ERROR] $$$$ Parse returns an empty data . please have a look $$$$");
    }
    return str;
}
exports.cleanHtmlData = cleanHtmlData;
//# sourceMappingURL=network.js.map