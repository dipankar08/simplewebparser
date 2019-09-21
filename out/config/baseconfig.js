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
var crawler_1 = require("../crawler");
var CONST_1 = require("./CONST");
var fetch_req = require('node-fetch');
var BaseConfig = /** @class */ (function () {
    function BaseConfig(tag) {
        this.tag = tag;
    }
    BaseConfig.prototype.getRootConfig = function () { return {}; };
    ;
    BaseConfig.prototype.getLimit = function () { return CONST_1.LIMIT; };
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
                        if (res.title.length > 10 && res.details.length > 10 && res.img.length > 10) {
                            console.log("[" + this.tag + "] Test Passed");
                        }
                        else {
                            console.log("[" + this.tag + "] Test Failed for url: " + this.getTestPageUrl());
                            console.log(res);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BaseConfig.prototype.execute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var crawler, _i, _a, item, config, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log("[" + this.tag + "] Execution started");
                        crawler = new crawler_1.Crawler(this.getRootConfig(), this.getPageParseConfig());
                        _i = 0, _a = Object.values(CONST_1.STREAM);
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        item = _a[_i];
                        config = this.getListConfig(item);
                        if (config == null || config.url == null) {
                            console.log("[" + this.tag + "] Ignoring config for " + item);
                            return [3 /*break*/, 4];
                        }
                        _b = this.save;
                        return [4 /*yield*/, crawler.parseMany({
                                url: config.url,
                                selectors: config.selectors,
                                limit: this.getLimit(),
                                extra: {
                                    'lang': CONST_1.LANG[this.getLang()],
                                    'stream': CONST_1.STREAM[item]
                                }
                            })];
                    case 2: return [4 /*yield*/, _b.apply(this, [_c.sent()])];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    BaseConfig.prototype.save = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            var res1, body;
            return __generator(this, function (_a) {
                if (res == null) {
                    return [2 /*return*/];
                }
                res1 = res.filter(function (x) {
                    if (x && x.title && x.details && x.img && x.title.length > 0 && x.details.length > 0 && x.img.length > 0) {
                        return true;
                    }
                    else {
                        console.log(">>>>>>>>>>>> [ERROR] Empty data receiced so NOT saving this, URL: " + x.url + " <<<<<<<<<<<<<<<");
                        return false;
                    }
                });
                body = { '_payload': res1 };
                fetch_req('http://simplestore.dipankar.co.in/api/news/bulk_insert', {
                    method: 'post',
                    body: JSON.stringify(body),
                    headers: { 'Content-Type': 'application/json' },
                })
                    .then(function (res) { return res.json(); })
                    .then(function (json) { return console.log(json); });
                return [2 /*return*/];
            });
        });
    };
    return BaseConfig;
}());
exports.BaseConfig = BaseConfig;
//# sourceMappingURL=baseconfig.js.map