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
var helper_1 = require("../utils/helper");
var node_html_parser_1 = require("node-html-parser");
var fastparser = require('fast-xml-parser');
var analytics_1 = require("../../analytics");
var request = require('request-promise');
function validate(c) {
    return c && c.url && c.title && c.img && c.title.length > 10 && c.url.length > 10 && c.details.length > 20;
}
exports.validate = validate;
var RSS_TYPE;
(function (RSS_TYPE) {
    RSS_TYPE[RSS_TYPE["WORD_PRESS"] = 0] = "WORD_PRESS";
    RSS_TYPE[RSS_TYPE["YOUTUBE"] = 1] = "YOUTUBE";
})(RSS_TYPE = exports.RSS_TYPE || (exports.RSS_TYPE = {}));
var BaseReader = /** @class */ (function () {
    function BaseReader() {
    }
    return BaseReader;
}());
exports.BaseReader = BaseReader;
var WordPressRssReader = /** @class */ (function (_super) {
    __extends(WordPressRssReader, _super);
    function WordPressRssReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WordPressRssReader.prototype.getType = function () {
        return RSS_TYPE.WORD_PRESS;
    };
    WordPressRssReader.prototype.read = function (url, extra) {
        return __awaiter(this, void 0, void 0, function () {
            var feed, result, _i, _a, item, link, hostname, html;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // fetch URL and then read.
                        console.log("[RSS] Start redding RSS " + url);
                        return [4 /*yield*/, parser.parseURL(url)];
                    case 1:
                        feed = _b.sent();
                        result = [];
                        for (_i = 0, _a = feed.items; _i < _a.length; _i++) {
                            item = _a[_i];
                            link = item.link;
                            hostname = helper_1.getHostNameFromUrl(link);
                            try {
                                html = node_html_parser_1.parse(item['content:encoded']);
                                result.push({
                                    title: item.title,
                                    img: this.getImgFromHTML(hostname, html),
                                    details: html.text,
                                    url: item.link,
                                    hostname: helper_1.getHostNameFromUrl(url),
                                    lang: extra.lang,
                                    stream: extra.stream
                                });
                            }
                            catch (e) {
                                analytics_1.Analytics.action('rss_link_broken', helper_1.getHostNameFromUrl(item.link), { "url": link });
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
            analytics_1.Analytics.action('rss_image_not_found', hostname);
            return null;
        }
    };
    return WordPressRssReader;
}(BaseReader));
exports.WordPressRssReader = WordPressRssReader;
var YouTubeRssReader = /** @class */ (function (_super) {
    __extends(YouTubeRssReader, _super);
    function YouTubeRssReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YouTubeRssReader.prototype.getType = function () {
        return RSS_TYPE.YOUTUBE;
    };
    YouTubeRssReader.prototype.read = function (url, extra) {
        return __awaiter(this, void 0, void 0, function () {
            var rawdata, feed, result, _i, _a, item;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // fetch URL and then read.
                        console.log("[RSS] Start redding RSS " + url);
                        return [4 /*yield*/, request.get(url)];
                    case 1:
                        rawdata = _b.sent();
                        feed = fastparser.parse(rawdata, { ignoreAttributes: false });
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
                                    stream: extra.stream
                                });
                            }
                            catch (e) {
                                analytics_1.Analytics.action('rss_link_broken', helper_1.getHostNameFromUrl(item.link['@_href']), { "url": item.link['@_href'] });
                            }
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return YouTubeRssReader;
}(BaseReader));
exports.YouTubeRssReader = YouTubeRssReader;
//# sourceMappingURL=rss_reader.js.map