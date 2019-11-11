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
var rp = require('request-promise');
var cheerio = require('cheerio');
var dlog_1 = require("./../utils/dlog");
var analytics_1 = require("../../analytics");
var CONST_1 = require("../CONST");
var Url = require('url-parse');
var WebElementType;
(function (WebElementType) {
    WebElementType[WebElementType["TEXT"] = 0] = "TEXT";
    WebElementType[WebElementType["IMAGE"] = 1] = "IMAGE";
    WebElementType[WebElementType["MULTI_TEXT"] = 2] = "MULTI_TEXT";
    WebElementType[WebElementType["TEXT_MULTI"] = 3] = "TEXT_MULTI";
    WebElementType[WebElementType["INNER_TEXT"] = 4] = "INNER_TEXT";
    WebElementType[WebElementType["URL_LIST"] = 5] = "URL_LIST";
})(WebElementType = exports.WebElementType || (exports.WebElementType = {}));
function findAllImage(url, selector) {
    return __awaiter(this, void 0, void 0, function () {
        var $, e_1, data, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    dlog_1.d("Fetching " + url + " ...");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, rp.get({ url: url, transform: function (body) {
                                return cheerio.load(body);
                            } })];
                case 2:
                    $ = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    analytics_1.Analytics.hit_tracker({ 'action': CONST_1.TELEMETRY_NETWORK_ERROR, url: url });
                    return [2 /*return*/, []];
                case 4:
                    data = $(selector).toArray().map(function (x) {
                        if (x.attribs) {
                            return { url: x.attribs.src, filename: x.attribs.title.toLowerCase().replace(/ /g, '_') + '.png' };
                        }
                        else {
                            return null;
                        }
                    });
                    return [2 /*return*/, data];
                case 5:
                    e_2 = _a.sent();
                    console.log(e_2);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function findAllUrls(url, selector) {
    return __awaiter(this, void 0, void 0, function () {
        var $, e_3, data, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    dlog_1.d("Fetching " + url + " ...");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, rp.get({ url: url, transform: function (body) {
                                return cheerio.load(body);
                            } })];
                case 2:
                    $ = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_3 = _a.sent();
                    analytics_1.Analytics.hit_tracker({ 'action': CONST_1.TELEMETRY_NETWORK_ERROR, url: url });
                    return [2 /*return*/, []];
                case 4:
                    data = $(selector).toArray().map(function (x) {
                        if (x.attribs) {
                            return { url: x.attribs.href, title: x.attribs.title.toLowerCase().replace(/ /g, '_') };
                        }
                        else {
                            return null;
                        }
                    });
                    return [2 /*return*/, data];
                case 5:
                    e_4 = _a.sent();
                    console.log(e_4);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/, []];
            }
        });
    });
}
// find a object of information form a page.
function findAllData(url, config_list, $) {
    if ($ === void 0) { $ = null; }
    return __awaiter(this, void 0, void 0, function () {
        var e_5, res, _i, config_list_1, k, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    if (!($ == null)) return [3 /*break*/, 4];
                    dlog_1.d("Fetching " + url + " ...");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, rp.get({ url: url, transform: function (body) {
                                return cheerio.load(body);
                            } })];
                case 2:
                    $ = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_5 = _a.sent();
                    analytics_1.Analytics.hit_tracker({ 'action': CONST_1.TELEMETRY_NETWORK_ERROR, url: url });
                    return [2 /*return*/, []];
                case 4:
                    res = {};
                    for (_i = 0, config_list_1 = config_list; _i < config_list_1.length; _i++) {
                        k = config_list_1[_i];
                        res[k.name] = parseWebElements(url, $, $('html'), k);
                    }
                    return [2 /*return*/, res];
                case 5:
                    e_6 = _a.sent();
                    console.log(e_6);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/, {}];
            }
        });
    });
}
exports.findAllData = findAllData;
// find a list of object of information form a page.
function findAllDataList(url, list_selector, entries, $) {
    if ($ === void 0) { $ = null; }
    return __awaiter(this, void 0, void 0, function () {
        var e_7, data, e_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    if (!($ == null)) return [3 /*break*/, 4];
                    dlog_1.d("Fetching " + url + " ...");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, rp.get({ url: url, transform: function (body) {
                                return cheerio.load(body);
                            } })];
                case 2:
                    $ = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_7 = _a.sent();
                    analytics_1.Analytics.hit_tracker({ 'action': CONST_1.TELEMETRY_NETWORK_ERROR, url: url });
                    return [2 /*return*/, []];
                case 4:
                    data = $(list_selector).toArray().map(function (x) {
                        var res = {
                            'url': url
                        };
                        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                            var k = entries_1[_i];
                            res[k.name] = parseWebElements(url, $, $(x), k);
                        }
                        return res;
                    });
                    return [2 /*return*/, data];
                case 5:
                    e_8 = _a.sent();
                    console.log(e_8);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/, []];
            }
        });
    });
}
exports.findAllDataList = findAllDataList;
//tested
function parseWebElements(url, $, entry, config) {
    try {
        switch (config.type) {
            case WebElementType.URL_LIST:
                var url_list = [];
                for (var _i = 0, _a = $(config.selector); _i < _a.length; _i++) {
                    var n = _a[_i];
                    url_list.push(n.attribs.href);
                }
                url_list = url_list.map(function (x) { return absUrl(url.toString(), x); });
                return url_list;
            case WebElementType.INNER_TEXT:
                return entry.find(config.selector)[0].next.data;
            case WebElementType.TEXT:
                return cleanHtmlData(url, entry.find(config.selector).text());
            case WebElementType.TEXT_MULTI:
                var val = cleanHtmlData(url, entry.find(config.selector).toArray().map(function (x) { return $(x).text(); }).join('\n'));
                return val;
            case WebElementType.IMAGE:
                if (!config.attr) {
                    config.attr = 'src';
                }
                return absUrl(url, entry.find(config.selector).attr(config.attr));
        }
    }
    catch (e) {
        dlog_1.ex(e);
    }
    return null;
}
// this function will clean the data.
function cleanHtmlData(url, str) {
    str = str.trim();
    str = str.replace(/[\t ]+/g, " ");
    str = str.replace(/[\r\n]+/g, '\n');
    str = str.replace(/[\n]+/g, '\n');
    // somehow replace consecutive replace doesn't work
    str = str.split("\n").filter(function (x) {
        if (x.trim().length < 1) {
            return false;
        }
        return true;
    }).join("\n");
    if (str.length == 0) {
        dlog_1.d("Empty Data found");
    }
    return str;
}
exports.cleanHtmlData = cleanHtmlData;
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
//# sourceMappingURL=htmlparser.js.map