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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var request = require('async-request'), response;
var cheerio = require('cheerio');
var Url = require('url-parse');
var Type;
(function (Type) {
    Type[Type["TEXT"] = 0] = "TEXT";
    Type[Type["IMAGE"] = 1] = "IMAGE";
    Type[Type["MULTI_TEXT"] = 2] = "MULTI_TEXT";
})(Type || (Type = {}));
var Crawler = /** @class */ (function () {
    function Crawler(config) {
        this.config = config;
    }
    Crawler.prototype.parse = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var result, url1, resp, $, _i, _a, item, error_1;
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
                        return [4 /*yield*/, request(url)];
                    case 2:
                        resp = _b.sent();
                        result['hostname'] = url1.hostname;
                        $ = cheerio.load(resp.body);
                        for (_i = 0, _a = this.config; _i < _a.length; _i++) {
                            item = _a[_i];
                            switch (item.type) {
                                case Type.TEXT:
                                    result[item.name] = this.cleanHtmlData($(item.selector).text().trim());
                                    break;
                                case Type.IMAGE:
                                    result[item.name] = this.absUrl(url, $(item.selector).attr('src'));
                                    break;
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, result];
                }
            });
        });
    };
    Crawler.prototype.parseMany = function (url, selector, limit) {
        if (limit === void 0) { limit = 5; }
        return __awaiter(this, void 0, void 0, function () {
            var resp, $, url_list1, url_list2, _i, url_list1_1, u, result, _a, url_list2_1, u, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        console.log(url);
                        return [4 /*yield*/, request(url)];
                    case 1:
                        resp = _d.sent();
                        $ = cheerio.load(resp.body);
                        url_list1 = $(selector).slice(0, limit);
                        url_list2 = [];
                        for (_i = 0, url_list1_1 = url_list1; _i < url_list1_1.length; _i++) {
                            u = url_list1_1[_i];
                            url_list2.push(this.absUrl(url, u.attribs.href));
                        }
                        console.log(url_list2);
                        result = [];
                        _a = 0, url_list2_1 = url_list2;
                        _d.label = 2;
                    case 2:
                        if (!(_a < url_list2_1.length)) return [3 /*break*/, 5];
                        u = url_list2_1[_a];
                        _c = (_b = result).push;
                        return [4 /*yield*/, this.parse(u)];
                    case 3:
                        _c.apply(_b, [_d.sent()]);
                        _d.label = 4;
                    case 4:
                        _a++;
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
        str = str.replace(/\s+/g, " ");
        str = str.replace(/[\r\n]+/g, '\n');
        str = str.trim();
        return str;
    };
    return Crawler;
}());
(function () { return __awaiter(_this, void 0, void 0, function () {
    var bartaman, anandabazar, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                bartaman = new Crawler([
                    { name: 'title', selector: '.head-news h4', type: Type.TEXT },
                    { name: 'details', selector: '.head-news .content', type: Type.TEXT },
                    { name: 'img', selector: '.head-news .thumbnail img', type: Type.IMAGE },
                ]);
                anandabazar = new Crawler([
                    { name: 'title', selector: '#story_container h1', type: Type.TEXT },
                    { name: 'details', selector: '#story_container .articleBody', type: Type.TEXT },
                    { name: 'img', selector: '#story_container  img', type: Type.IMAGE },
                ]);
                return [4 /*yield*/, anandabazar.parseMany('https://anandabazar.com', '.container .abp-homepage-top-right-story-wrap > a', 5)];
            case 1:
                res = _a.sent();
                console.log(res);
                return [2 /*return*/];
        }
    });
}); })();
//# sourceMappingURL=simplewebparser.js.map