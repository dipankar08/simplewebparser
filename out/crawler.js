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
var analytics_1 = require("./analytics");
var _ = require('lodash');
var request = require('async-request'), response;
var cheerio = require('cheerio');
var Url = require('url-parse');
var Type;
(function (Type) {
    Type[Type["TEXT"] = 0] = "TEXT";
    Type[Type["IMAGE"] = 1] = "IMAGE";
    Type[Type["MULTI_TEXT"] = 2] = "MULTI_TEXT";
})(Type = exports.Type || (exports.Type = {}));
;
;
;
;
;
;
;
;
;
;
var Crawler = /** @class */ (function () {
    function Crawler(rootConfig, config) {
        this.rootConfig = rootConfig;
        this.config = config;
    }
    Crawler.prototype.parse = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var result, url1, resp, error_1, $_1, _i, _a, item, val, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        result = {};
                        result['url'] = url;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 7]);
                        console.log(url);
                        url1 = new Url(url);
                        console.log("[DEBUG] TRY Fetching... " + url);
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, request(url)];
                    case 3:
                        resp = _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        analytics_1.Analytics.exception(error_1);
                        return [2 /*return*/, {}];
                    case 5:
                        result['hostname'] = url1.hostname;
                        $_1 = cheerio.load(resp.body);
                        for (_i = 0, _a = this.config; _i < _a.length; _i++) {
                            item = _a[_i];
                            switch (item.type) {
                                case Type.TEXT:
                                    val = this.cleanHtmlData(url, $_1(item.selector).toArray().map(function (x) { return $_1(x).text(); }).join('\n'));
                                    result[item.name.toString()] = val;
                                    break;
                                case Type.IMAGE:
                                    if (!item.attr) {
                                        item.attr = 'src';
                                    }
                                    result[item.name.toString()] = this.absUrl(url, $_1(item.selector).attr(item.attr));
                                    break;
                            }
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        error_2 = _b.sent();
                        analytics_1.Analytics.exception(error_2, result);
                        console.log("[ERROR] article parse failed for URL:" + url + ", Error is: " + error_2);
                        console.log(error_2);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/, result];
                }
            });
        });
    };
    Crawler.prototype.parseMany = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, e_1, $, url_list1, _i, _a, s, _b, _c, n, urls_abs, url_filtered, _d, urls_abs_1, u, _e, _f, ic, urls_final, result, _g, urls_final_1, u, res;
            var _this = this;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        console.log("[DEBUG] Parse many for : " + config.url);
                        console.log("[DEBUG] TRY Fetching... " + config.url);
                        _h.label = 1;
                    case 1:
                        _h.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, request(config.url)];
                    case 2:
                        resp = _h.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _h.sent();
                        analytics_1.Analytics.exception(e_1);
                        return [2 /*return*/, null];
                    case 4:
                        $ = cheerio.load(resp.body);
                        url_list1 = [];
                        for (_i = 0, _a = config.selectors; _i < _a.length; _i++) {
                            s = _a[_i];
                            for (_b = 0, _c = $(s); _b < _c.length; _b++) {
                                n = _c[_b];
                                url_list1.push(n.attribs.href);
                            }
                        }
                        urls_abs = url_list1.map(function (x) { return _this.absUrl(config.url.toString(), x); });
                        // find unique
                        urls_abs = Array.from(new Set(urls_abs));
                        url_filtered = [];
                        if (this.rootConfig.ignoreUrlRegex && this.rootConfig.ignoreUrlRegex.length > 0) {
                            for (_d = 0, urls_abs_1 = urls_abs; _d < urls_abs_1.length; _d++) {
                                u = urls_abs_1[_d];
                                for (_e = 0, _f = this.rootConfig.ignoreUrlRegex; _e < _f.length; _e++) {
                                    ic = _f[_e];
                                    if (u.indexOf(ic) != -1) {
                                        console.log("[INFO] Ignoring url " + u + " as it is getting ignored by rootConfig");
                                        break;
                                    }
                                    url_filtered.push(u);
                                }
                            }
                        }
                        else {
                            url_filtered = urls_abs;
                        }
                        urls_final = url_filtered.slice(0, config.limit);
                        console.log("[DEBUG] URL LIST : " + urls_final);
                        if (urls_final.length == 0) {
                            analytics_1.Analytics.action('broken_root_url', "Effected URL: " + config.url + " for selector " + config.selectors, { hostname: new Url(config.url).hostname, url: config.url });
                            console.log("[DEBUG] PARSE MANY FAILED: not a single child url found for " + config.url);
                            return [2 /*return*/, []];
                        }
                        result = [];
                        _g = 0, urls_final_1 = urls_final;
                        _h.label = 5;
                    case 5:
                        if (!(_g < urls_final_1.length)) return [3 /*break*/, 8];
                        u = urls_final_1[_g];
                        return [4 /*yield*/, this.parse(u)];
                    case 6:
                        res = _h.sent();
                        if (res != null) {
                            result.push(_.assignIn(res, config.extra));
                        }
                        _h.label = 7;
                    case 7:
                        _g++;
                        return [3 /*break*/, 5];
                    case 8: return [2 /*return*/, result];
                }
            });
        });
    };
    Crawler.prototype.absUrl = function (root, url) {
        if (url == null || url.length == 0) {
            return null;
        }
        if (url[0] == '/' && url[1] == '/') {
            return Url(root).protocol + url;
        }
        if (url[0] != '/') {
            return url;
        }
        return (new Url(root)).origin + url;
    };
    // this function will clean the data.
    Crawler.prototype.cleanHtmlData = function (url, str) {
        var _this = this;
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
            if (_this.rootConfig.ignoreLineRegex != null) {
                for (var _i = 0, _a = _this.rootConfig.ignoreLineRegex; _i < _a.length; _i++) {
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
            analytics_1.Analytics.action("parse_empty_data", url, { "hostname": (new Url(url).hostname) });
        }
        return str;
    };
    return Crawler;
}());
exports.Crawler = Crawler;
//# sourceMappingURL=crawler.js.map