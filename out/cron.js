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
var cron = require('node-cron');
var Url = require('url-parse');
var request = require("request-promise");
var anandabazar_1 = require("./config/website/anandabazar");
var CONST_1 = require("./config/CONST");
var zeenews_1 = require("./config/website/zeenews");
var news18_1 = require("./config/website/news18");
var oneindia_1 = require("./config/website/oneindia");
var bbc_bengali_1 = require("./config/website/bbc_bengali");
var kolkata247_1 = require("./config/website/kolkata247");
var business_insiders_1 = require("./config/website/business_insiders");
var analytics_1 = require("./analytics");
var pratidin_1 = require("./config/website/pratidin");
var thehindu_1 = require("./config/website/thehindu");
var ajjkal_1 = require("./config/website/ajjkal");
var dainikstatesman_1 = require("./config/website/dainikstatesman");
var nilkontho_1 = require("./config/website/nilkontho");
var indiatimes_bengali_1 = require("./config/website/indiatimes_bengali");
var bartaman_1 = require("./config/website/bartaman");
var techcrunch_1 = require("./config/website/techcrunch");
var wordpress_1 = require("./config/website/wordpress");
var main_1 = require("./config/webcrawl/main");
var dlog_1 = require("./config/utils/dlog");
var configList = [
    // BENGALI
    new kolkata247_1.KolkataTimes24(),
    new wordpress_1.GNEBanglaConfig(),
    new wordpress_1.DarkariTipsConfig(),
    new wordpress_1.BanglarPranConfig(),
    new anandabazar_1.AnandabazarConfig(),
    new zeenews_1.ZeeNewsBengaliConfig(),
    new news18_1.News18BengaliConfig(),
    new oneindia_1.OneIndiaBengaliConfig(),
    new bbc_bengali_1.BbcBengaliConfig(),
    new kolkata247_1.Kolkata247(),
    new pratidin_1.PratidinConfig(),
    new ajjkal_1.AjjKalConfig(),
    new dainikstatesman_1.DainikStatesmanConfig(),
    // new AajBanglaConfig(), <<< COPY WRITE.>>>
    new nilkontho_1.NilkonthoConfig(),
    new indiatimes_bengali_1.IndiaTimesBengaliConfig(),
    new bartaman_1.BartamanConfig(),
    new wordpress_1.BharatBartaConfig(),
    new wordpress_1.Totka24X7Config(),
    // new NDTVBanglaConfig(), Broken
    // ENGLISH
    //new NDTVEnglishConfig(),
    new thehindu_1.TheHinduConfig(),
    new news18_1.News18EnglishConfig(),
    new oneindia_1.OneIndiaEnglishConfig(),
    new zeenews_1.ZeeNewsEnglishConfig(),
    new techcrunch_1.TechCrunchConfig(),
    //HINDI
    //new NDTVHindiConfig(),
    new business_insiders_1.BusinessInsidersConfig(),
    new news18_1.News18HindiConfig(),
    new oneindia_1.OneIndiaHindiConfig(),
    new zeenews_1.ZeeNewsHindiConfig(),
];
function prod() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, configList_1, item, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    analytics_1.Analytics.action('cron_run_start', "Started at " + Date.now());
                    _i = 0, configList_1 = configList;
                    _a.label = 1;
                case 1:
                    if (!(_i < configList_1.length)) return [3 /*break*/, 5];
                    item = configList_1[_i];
                    if (!item.getRootConfig().is_active) return [3 /*break*/, 3];
                    return [4 /*yield*/, item.execute()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    dlog_1.d("[INFO] Ignored as not active :" + item.getRootConfig().title);
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 1];
                case 5: return [3 /*break*/, 7];
                case 6:
                    err_1 = _a.sent();
                    dlog_1.ex(err_1);
                    analytics_1.Analytics.action("crash", "Server has crashed with error");
                    analytics_1.Analytics.exception(err_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
// run in every 30 min
function cronJob() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    analytics_1.Analytics.launch("crawler");
                    return [4 /*yield*/, updateprofile()];
                case 1:
                    _a.sent();
                    cron.schedule('*/30 * * * *', function () {
                        dlog_1.d(Date.now() + " Running a task every 15 minutes");
                        prod();
                    });
                    // run now too.
                    prod();
                    return [2 /*return*/];
            }
        });
    });
}
function updateprofile() {
    return __awaiter(this, void 0, void 0, function () {
        var payload, _i, configList_2, config, resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    payload = [];
                    for (_i = 0, configList_2 = configList; _i < configList_2.length; _i++) {
                        config = configList_2[_i];
                        payload.push({
                            "lang": CONST_1.LANG[config.getLang()],
                            "hostname": new Url(config.getTestPageUrl()).hostname,
                            "img": config.getRootConfig().defaultImg,
                            "title": config.getRootConfig().title,
                            "streams": Array.from(new Set(config.getStoryListConfig().map(function (x) { return CONST_1.STREAM[x.stream]; }))),
                            "is_active": config.getRootConfig().is_active,
                        });
                    }
                    return [4 /*yield*/, request({
                            uri: CONST_1.PROFILE_URL + "/insertorupdate",
                            method: 'POST',
                            body: {
                                _payload: payload,
                                _field: 'hostname'
                            },
                            json: true
                        })];
                case 1:
                    resp = _a.sent();
                    dlog_1.d(resp);
                    return [2 /*return*/];
            }
        });
    });
}
//cronJob();
main_1.webCronJob();
//new Totka24X7Config().execute()
//# sourceMappingURL=cron.js.map