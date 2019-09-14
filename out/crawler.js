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
    function Crawler(config) {
        this.config = config;
    }
    Crawler.prototype.parse = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var result, url1, resp, $, _i, _a, item, val, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        result = {};
                        result['url'] = url;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        console.log(url);
                        url1 = new Url(url);
                        console.log("[DEBUG] TRY Fetching... " + url);
                        return [4 /*yield*/, request(url)];
                    case 2:
                        resp = _b.sent();
                        result['hostname'] = url1.hostname;
                        $ = cheerio.load(resp.body);
                        for (_i = 0, _a = this.config; _i < _a.length; _i++) {
                            item = _a[_i];
                            switch (item.type) {
                                case Type.TEXT:
                                    val = this.cleanHtmlData($(item.selector).text().trim());
                                    result[item.name.toString()] = val;
                                    break;
                                case Type.IMAGE:
                                    result[item.name.toString()] = this.absUrl(url, $(item.selector).attr('src'));
                                    break;
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        console.log("[ERROR] article parse failed for URL:" + url + ", Error is: " + error_1);
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, result];
                }
            });
        });
    };
    Crawler.prototype.parseMany = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, $, url_list1, _i, _a, s, _b, _c, n, url_list2, _d, url_list1_1, u, result, _e, url_list2_1, u, res;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        console.log("[DEBUG] Parse many for : " + config.url);
                        console.log("[DEBUG] TRY Fetching... " + config.url);
                        return [4 /*yield*/, request(config.url)];
                    case 1:
                        resp = _f.sent();
                        $ = cheerio.load(resp.body);
                        url_list1 = [];
                        for (_i = 0, _a = config.selectors; _i < _a.length; _i++) {
                            s = _a[_i];
                            for (_b = 0, _c = $(s); _b < _c.length; _b++) {
                                n = _c[_b];
                                url_list1.push(n);
                            }
                        }
                        url_list1 = url_list1.slice(0, config.limit);
                        url_list2 = [];
                        for (_d = 0, url_list1_1 = url_list1; _d < url_list1_1.length; _d++) {
                            u = url_list1_1[_d];
                            url_list2.push(this.absUrl(config.url.toString(), u.attribs.href));
                        }
                        console.log("[DEBUG] URL LIST : " + url_list2);
                        if (url_list2.length == 0) {
                            console.log("[DEBUG] PARSE MANY FAILED: not a single child url found for " + config.url);
                            return [2 /*return*/, []];
                        }
                        result = [];
                        _e = 0, url_list2_1 = url_list2;
                        _f.label = 2;
                    case 2:
                        if (!(_e < url_list2_1.length)) return [3 /*break*/, 5];
                        u = url_list2_1[_e];
                        return [4 /*yield*/, this.parse(u)];
                    case 3:
                        res = _f.sent();
                        if (res != null) {
                            result.push(_.assignIn(res, config.extra));
                        }
                        _f.label = 4;
                    case 4:
                        _e++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, result];
                }
            });
        });
    };
    Crawler.prototype.absUrl = function (root, url) {
        if (url[0] == '/' && url[1] == '/') {
            return Url(root).protocol + url;
        }
        if (url[0] != '/') {
            return url;
        }
        return (new Url(root)).origin + url;
    };
    // this function will clean the data.
    Crawler.prototype.cleanHtmlData = function (str) {
        str = str.replace(/[\t ]+/g, " ");
        str = str.replace(/[\r\n]+/g, '\n');
        str = str.trim();
        if (str.length == 0) {
            console.log("\n\n[ERROR] $$$$ Parse returns an empty data . please have a look $$$$");
        }
        return str;
    };
    return Crawler;
}());
exports.Crawler = Crawler;
//# sourceMappingURL=crawler.js.map