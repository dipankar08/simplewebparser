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
var rss_reader_1 = require("./rss_reader");
var analytics_1 = require("../../analytics");
var db_helper_1 = require("../utils/db_helper");
var CONST_1 = require("../CONST");
var dlog_1 = require("../utils/dlog");
var cron = require('node-cron');
var RssCrawler = /** @class */ (function () {
    function RssCrawler() {
        this.reader_map = new Map();
        // add your reader here.
        var mylist = [new rss_reader_1.WordPressRssReader(), new rss_reader_1.YouTubeRssReader()];
        for (var _i = 0, mylist_1 = mylist; _i < mylist_1.length; _i++) {
            var l = mylist_1[_i];
            this.reader_map.set(l.getType(), l);
        }
    }
    RssCrawler.prototype.crawl = function (list) {
        return __awaiter(this, void 0, void 0, function () {
            var result, hostname, _i, list_1, l, _a, _b, item, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        result = [];
                        hostname = db_helper_1.getHostNameFromUrl(list[0].url);
                        _i = 0, list_1 = list;
                        _c.label = 1;
                    case 1:
                        if (!(_i < list_1.length)) return [3 /*break*/, 9];
                        l = list_1[_i];
                        // detect a host complete 
                        if (db_helper_1.getHostNameFromUrl(l.url) != hostname) {
                            this.save(result);
                            result = [];
                            hostname = db_helper_1.getHostNameFromUrl(l.url);
                        }
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 7, , 8]);
                        _a = 0;
                        return [4 /*yield*/, this.reader_map.get(l.type).read(l.url, l.extra)];
                    case 3:
                        _b = _c.sent();
                        _c.label = 4;
                    case 4:
                        if (!(_a < _b.length)) return [3 /*break*/, 6];
                        item = _b[_a];
                        if (CONST_1.validate(item)) {
                            result.push(item);
                        }
                        _c.label = 5;
                    case 5:
                        _a++;
                        return [3 /*break*/, 4];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        e_1 = _c.sent();
                        dlog_1.ex(e_1);
                        analytics_1.Analytics.action('rss_link_broken', db_helper_1.getHostNameFromUrl(l.url), { "url": l.url });
                        return [3 /*break*/, 8];
                    case 8:
                        _i++;
                        return [3 /*break*/, 1];
                    case 9:
                        this.save(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    RssCrawler.prototype.save = function (list) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // saving item.
                    return [4 /*yield*/, db_helper_1.saveToDB(list)];
                    case 1:
                        // saving item.
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return RssCrawler;
}());
exports.RssCrawler = RssCrawler;
//# sourceMappingURL=rss_crawl.js.map