"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Parser = require('rss-parser');
var parser = new Parser();
var db_helper_1 = require("../utils/db_helper");
var node_html_parser_1 = require("node-html-parser");
var fastparser = require('fast-xml-parser');
var analytics_1 = require("../../analytics");
var CONST_1 = require("../CONST");
var dlog_1 = require("../utils/dlog");
var htmlparser_1 = require("./htmlparser");
var request = require('request-promise');
var BaseRSSReader = /** @class */ (function () {
    function BaseRSSReader() {
    }
    return BaseRSSReader;
}());
exports.BaseRSSReader = BaseRSSReader;
var WordPressRssReader = /** @class */ (function (_super) {
    __extends(WordPressRssReader, _super);
    function WordPressRssReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WordPressRssReader.prototype.read = function (url, extra) {
        return __awaiter(this, void 0, void 0, function () {
            var feed, e_1, result, _i, _a, item, link, hostname, html;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // fetch URL and then read.
                        dlog_1.d("[RSS] Start redding RSS " + url);
                        feed = null;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, parser.parseURL(url)];
                    case 2:
                        feed = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        analytics_1.Analytics.hit_tracker({ 'action': CONST_1.TELEMETRY_NETWORK_ERROR, url: url });
                        return [2 /*return*/, []];
                    case 4:
                        result = [];
                        for (_i = 0, _a = feed.items; _i < _a.length; _i++) {
                            item = _a[_i];
                            link = item.link;
                            hostname = db_helper_1.getHostNameFromUrl(link);
                            try {
                                html = node_html_parser_1.parse(item['content:encoded']);
                                result.push({
                                    title: item.title,
                                    img: this.getImgFromHTML(hostname, html),
                                    details: html.text,
                                    url: item.link,
                                    hostname: db_helper_1.getHostNameFromUrl(url),
                                    stream: extra.stream
                                });
                            }
                            catch (e) {
                                dlog_1.ex(e);
                                analytics_1.Analytics.hit_tracker({ "action": CONST_1.TELEMETRY_RSS_LINK_BROKEN, "url": link });
                            }
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    WordPressRssReader.prototype.getImgFromHTML = function (hostname, html) {
        if (html.querySelector("img")) {
            return html.querySelector("img").attributes.src;
        }
        else {
            analytics_1.Analytics.hit_tracker({ 'action': CONST_1.TELEMETRY_RSS_IMAGE_NOT_FOUND, hostname: hostname });
            return null;
        }
    };
    return WordPressRssReader;
}(BaseRSSReader));
exports.WordPressRssReader = WordPressRssReader;
var RssTwoReader = /** @class */ (function (_super) {
    __extends(RssTwoReader, _super);
    function RssTwoReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RssTwoReader.prototype.read = function (url, extra) {
        return __awaiter(this, void 0, void 0, function () {
            var feed, e_2, result, _i, _a, item, link, hostname, html;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // fetch URL and then read.
                        dlog_1.d("[RSS] Start redding RSS " + url);
                        feed = null;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, parser.parseURL(url)];
                    case 2:
                        feed = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _b.sent();
                        analytics_1.Analytics.hit_tracker({ 'action': CONST_1.TELEMETRY_NETWORK_ERROR, url: url });
                        return [2 /*return*/, []];
                    case 4:
                        result = [];
                        for (_i = 0, _a = feed.items; _i < _a.length; _i++) {
                            item = _a[_i];
                            link = item.link;
                            hostname = db_helper_1.getHostNameFromUrl(link);
                            try {
                                html = node_html_parser_1.parse(item['content']);
                                result.push({
                                    title: item.title,
                                    img: this.getImgFromHTML(hostname, html),
                                    details: html.text,
                                    url: item.link,
                                    hostname: db_helper_1.getHostNameFromUrl(url),
                                    stream: extra.stream
                                });
                            }
                            catch (e) {
                                dlog_1.ex(e);
                                analytics_1.Analytics.hit_tracker({ "action": CONST_1.TELEMETRY_RSS_LINK_BROKEN, "url": link });
                            }
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    RssTwoReader.prototype.getImgFromHTML = function (hostname, html) {
        if (html.querySelector("img")) {
            return html.querySelector("img").attributes.src;
        }
        else {
            analytics_1.Analytics.hit_tracker({ 'action': CONST_1.TELEMETRY_RSS_IMAGE_NOT_FOUND, hostname: hostname });
            return null;
        }
    };
    return RssTwoReader;
}(BaseRSSReader));
exports.RssTwoReader = RssTwoReader;
var YouTubeRssReader = /** @class */ (function (_super) {
    __extends(YouTubeRssReader, _super);
    function YouTubeRssReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YouTubeRssReader.prototype.read = function (url, extra) {
        return __awaiter(this, void 0, void 0, function () {
            var rawdata, e_3, feed, result, _i, _a, item;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // fetch URL and then read.
                        dlog_1.d("[RSS] Start redding RSS " + url);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, request.get(url)];
                    case 2:
                        rawdata = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _b.sent();
                        analytics_1.Analytics.hit_tracker({ 'action': CONST_1.TELEMETRY_NETWORK_ERROR, url: url });
                        return [2 /*return*/, []];
                    case 4:
                        feed = null;
                        try {
                            feed = fastparser.parse(rawdata, { ignoreAttributes: false });
                        }
                        catch (e) {
                            analytics_1.Analytics.hit_tracker({ 'action': CONST_1.TELEMETRY_NETWORK_ERROR, url: url });
                            return [2 /*return*/, []];
                        }
                        result = [];
                        for (_i = 0, _a = feed.feed.entry; _i < _a.length; _i++) {
                            item = _a[_i];
                            try {
                                result.push({
                                    title: item.title,
                                    img: item['media:group']['media:thumbnail']['@_url'],
                                    details: item.title,
                                    url: item.link['@_href'],
                                    hostname: item.author,
                                    lang: extra.lang,
                                });
                            }
                            catch (e) {
                                dlog_1.ex(e);
                                analytics_1.Analytics.action(CONST_1.TELEMETRY_RSS_LINK_BROKEN, db_helper_1.getHostNameFromUrl(item.link['@_href']), { "url": item.link['@_href'] });
                            }
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return YouTubeRssReader;
}(BaseRSSReader));
exports.YouTubeRssReader = YouTubeRssReader;
// some of the RSS encoded over HTML like 
// https://www.dinamani.com/%E0%AE%B5%E0%AE%BF%E0%AE%B3%E0%AF%88%E0%AE%AF%E0%AE%BE%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AF%81/%E0%AE%9A%E0%AF%86%E0%AE%AF%E0%AF%8D%E0%AE%A4%E0%AE%BF%E0%AE%95%E0%AE%B3%E0%AF%8D/rssfeed/?id=480
var HTMLEnCodedRssReader = /** @class */ (function (_super) {
    __extends(HTMLEnCodedRssReader, _super);
    function HTMLEnCodedRssReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLEnCodedRssReader.prototype.read = function (url, extra) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // fetch URL and then read.
                        dlog_1.d("[RSS] Start reading RSS " + url);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, htmlparser_1.findAllDataList(url, 'item', [
                                { name: 'title', selector: 'title', type: htmlparser_1.WebElementType.TEXT },
                                { name: 'img', selector: 'img', type: htmlparser_1.WebElementType.IMAGE },
                                { name: 'details', selector: 'story p', type: htmlparser_1.WebElementType.TEXT_MULTI },
                                { name: 'url', selector: 'link', type: htmlparser_1.WebElementType.INNER_TEXT },
                            ])];
                    case 2:
                        result = _a.sent();
                        result = result.map(function (x) {
                            x['stream'] = extra.stream;
                            return x;
                        });
                        return [2 /*return*/, result];
                    case 3:
                        e_4 = _a.sent();
                        dlog_1.ex(e_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, []];
                }
            });
        });
    };
    return HTMLEnCodedRssReader;
}(BaseRSSReader));
exports.HTMLEnCodedRssReader = HTMLEnCodedRssReader;
//# sourceMappingURL=rss_reader.js.map