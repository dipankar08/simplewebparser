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
var anandabazar_1 = require("./config/anandabazar");
var zeenews_bengali_1 = require("./config/zeenews_bengali");
var news18_bengali_1 = require("./config/news18_bengali");
var oneindia_bengali_1 = require("./config/oneindia_bengali");
var bbc_bengali_1 = require("./config/bbc_bengali");
var kolkata247_1 = require("./config/kolkata247");
var ndtv_english_1 = require("./config/ndtv_english");
var ndtv_hindi_1 = require("./config/ndtv_hindi");
var business_insiders_1 = require("./config/business_insiders");
var analytics_1 = require("./analytics");
var configList = [
    // BENGALI
    new anandabazar_1.AnandabazarConfig(),
    new zeenews_bengali_1.ZeeNewsConfig(),
    new news18_bengali_1.News18Config(),
    new oneindia_bengali_1.OneIndiaBengaliConfig(),
    new bbc_bengali_1.BbcBengaliConfig(),
    new kolkata247_1.Kolkata247(),
    // new NDTVBanglaConfig(), Broken
    // ENGLISH
    new ndtv_english_1.NDTVEnglishConfig(),
    //HINDI
    new ndtv_hindi_1.NDTVHindiConfig(),
    new business_insiders_1.BusinessInsidersConfig(),
];
function prod() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, configList_1, item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    analytics_1.Analytics.action('cron_run', "Started at " + Date.now());
                    _i = 0, configList_1 = configList;
                    _a.label = 1;
                case 1:
                    if (!(_i < configList_1.length)) return [3 /*break*/, 4];
                    item = configList_1[_i];
                    return [4 /*yield*/, item.execute()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// run in every 15 min
function cronJob() {
    analytics_1.Analytics.launch("crawler");
    cron.schedule('*/15 * * * *', function () {
        console.log(Date.now() + " Running a task every 15 minutes");
        prod();
    });
}
cronJob();
//new PratidinConfig().execute()
//# sourceMappingURL=cron.js.map