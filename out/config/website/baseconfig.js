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
var crawler_1 = require("../../crawler");
var CONST_1 = require("../CONST");
var analytics_1 = require("../../analytics");
var SummaryManager_1 = require("../summary/SummaryManager");
var request = require("request-promise");
var BaseConfig = /** @class */ (function () {
    function BaseConfig(tag) {
        this.tag = tag;
    }
    BaseConfig.prototype.getListConfig = function (STREAM) {
        return null;
    };
    BaseConfig.prototype.getLimit = function () { return CONST_1.LIMIT; };
    BaseConfig.prototype.getStoryListConfig = function () {
        return [];
    };
    BaseConfig.prototype.test = function () {
        return __awaiter(this, void 0, void 0, function () {
            var crawler, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("[" + this.tag + "] Test started");
                        crawler = new crawler_1.Crawler(this.getRootConfig(), this.getPageParseConfig());
                        return [4 /*yield*/, crawler.parse(this.getTestPageUrl().toString())];
                    case 1:
                        res = _a.sent();
                        console.log(res.title);
                        console.log(res.details);
                        console.log(res.img);
                        if (res.title.length > 10 && res.details.length > 10 && res.img != undefined && res.img.length > 10) {
                            console.log("[" + this.tag + "] Test Passed");
                        }
                        else {
                            console.log("[" + this.tag + "] Test Failed for url: " + this.getTestPageUrl());
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseConfig.prototype.execute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var crawler, newConfig, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("[" + this.tag + "] Execution started for " + this.getRootConfig());
                        crawler = new crawler_1.Crawler(this.getRootConfig(), this.getPageParseConfig());
                        newConfig = this.getStoryListConfig().map(function (x) {
                            x.extra = { 'lang': CONST_1.LANG[_this.getLang()] };
                            x.extra['stream'] = CONST_1.STREAM[x.stream];
                            x.extra['is_active'] = "1";
                            return x;
                        });
                        _a = this.save;
                        return [4 /*yield*/, crawler.parseStoryList(newConfig)];
                    case 1: return [4 /*yield*/, _a.apply(this, [_b.sent()])];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseConfig.prototype.save = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            var res1, sb, body, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (res == null) {
                            return [2 /*return*/];
                        }
                        res1 = res.filter(function (x) {
                            if (x && x.title && x.details && x.img && x.title.length > 0 && x.details.length > 0 && x.img.length > 0) {
                                return true;
                            }
                            else {
                                analytics_1.Analytics.action("error_empty_data", x.url);
                                console.log(">>>>>>>>>>>> [ERROR] Empty data receiced so NOT saving this, URL: " + x.url + " <<<<<<<<<<<<<<<");
                                return false;
                            }
                        });
                        if (res1.length == 0) {
                            return [2 /*return*/];
                        }
                        sb = new SummaryManager_1.SummeryBuilder();
                        res1 = res1.map(function (x) {
                            switch (x.lang) {
                                case CONST_1.LANG[CONST_1.LANG.BENGALI]:
                                    x['summary'] = sb.buildSummary(x.details, SummaryManager_1.SummaryStrategy.BENAGLI);
                                    break;
                                case CONST_1.LANG[CONST_1.LANG.ENGLISH]:
                                    x['summary'] = sb.buildSummary(x.details, SummaryManager_1.SummaryStrategy.ENGLISH);
                                    break;
                                case CONST_1.LANG[CONST_1.LANG.HINDI]:
                                    x['summary'] = sb.buildSummary(x.details, SummaryManager_1.SummaryStrategy.HINDI);
                                    break;
                            }
                            return x;
                        });
                        body = { '_payload': res1 };
                        console.log("[INFO]: Uisng URL for insert is : " + CONST_1.DB_URL);
                        return [4 /*yield*/, request({
                                uri: CONST_1.DB_URL + "/bulk_insert",
                                method: 'POST',
                                body: body,
                                json: true
                            })];
                    case 1:
                        resp = _a.sent();
                        console.log(resp);
                        if ((resp.status == 'error')) {
                            analytics_1.Analytics.action('error_saving_data', resp);
                        }
                        else {
                            console.log("[Debug] Data saved properly in the server: " + resp.msg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return BaseConfig;
}());
exports.BaseConfig = BaseConfig;
//# sourceMappingURL=baseconfig.js.map