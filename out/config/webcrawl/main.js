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
var db_helper_1 = require("../utils/db_helper");
var CONST_1 = require("../CONST");
var _ = require("lodash");
var web_crawl_1 = require("./web_crawl");
var analytics_1 = require("../../analytics");
var dlog_1 = require("../utils/dlog");
var cron = require('node-cron');
var config = require('config');
function updateProfile(list) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_helper_1.updateProfileToDb(list.map(function (x) {
                        return {
                            title: x.name,
                            lang: CONST_1.LANG[x.lang],
                            hostname: db_helper_1.getHostNameFromUrl(x.links[0].url),
                            img: x.profile_img,
                            streams: _.uniq(x.links.map(function (y) { return CONST_1.STREAM[y.stream]; })),
                            count_followers: 0,
                            is_active: x.is_active ? "1" : "0"
                        };
                    }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
var urlList = [];
urlList = urlList.concat(require('./sources/bengali_big').urlList); // OK
urlList = urlList.concat(require('./sources/partner_small').urlList); // OK
urlList = urlList.concat(require('./sources/bengali_small').urlList); // 
urlList = urlList.concat(require('./sources/english_big').urlList); // OK
urlList = urlList.concat(require('./sources/other_lang').urlList); // OK
urlList = _.uniqBy(urlList, "name");
function startCrawl() {
    return __awaiter(this, void 0, void 0, function () {
        var c;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    c = new web_crawl_1.WebCrawler();
                    if (!config.get("isProd")) return [3 /*break*/, 2];
                    return [4 /*yield*/, c.crawl(urlList, false)];
                case 1:
                    _a.sent(); // RUN ON PROD.
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, c.crawl(urlList, true /*if this */)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
// function. 
function webCronJob() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    analytics_1.Analytics.launch(CONST_1.TELEMETRY_APP_NAME);
                    return [4 /*yield*/, updateProfile(urlList)];
                case 1:
                    _a.sent();
                    cron.schedule('*/60 * * * *', function () {
                        dlog_1.d(Date.now() + " Running a task every 60 minutes");
                        startCrawl();
                    });
                    // run now too.
                    startCrawl();
                    return [2 /*return*/];
            }
        });
    });
}
exports.webCronJob = webCronJob;
//# sourceMappingURL=main.js.map