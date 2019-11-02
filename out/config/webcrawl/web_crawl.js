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
var helper_1 = require("../utils/helper");
var web_reader_1 = require("./web_reader");
var cron = require('node-cron');
var WebCrawler = /** @class */ (function () {
    function WebCrawler() {
        this.reader_map = new Map();
        // add your reader here.
        var mylist = [new web_reader_1.WordPressWebReader()];
        for (var _i = 0, mylist_1 = mylist; _i < mylist_1.length; _i++) {
            var l = mylist_1[_i];
            this.reader_map.set(l.getType(), l);
        }
    }
    WebCrawler.prototype.crawl = function (list) {
        return __awaiter(this, void 0, void 0, function () {
            var result, current, _i, list_1, l;
            return __generator(this, function (_a) {
                result = [];
                current = list[0];
                for (_i = 0, list_1 = list; _i < list_1.length; _i++) {
                    l = list_1[_i];
                    // detect a host complete 
                    if (helper_1.getHostNameFromUrl(l.url) != helper_1.getHostNameFromUrl(current.url)) {
                        this.processURLList(result, current);
                        result = [];
                        current = l;
                    }
                    try {
                    }
                    catch (e) {
                        analytics_1.Analytics.action('rss_link_broken', helper_1.getHostNameFromUrl(l.url), { "url": l.url });
                    }
                }
                this.processURLList(result, current);
                return [2 /*return*/];
            });
        });
    };
    // send a list of URLs
    WebCrawler.prototype.processURLList = function (urlList, config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return WebCrawler;
}());
exports.WebCrawler = WebCrawler;
//# sourceMappingURL=web_crawl.js.map