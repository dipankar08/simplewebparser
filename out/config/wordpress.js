"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var baseconfig_1 = require("./baseconfig");
var crawler_1 = require("../crawler");
var CONST_1 = require("./CONST");
var wp = [
    { name: 'title', selector: 'article header h1', type: crawler_1.Type.TEXT },
    { name: 'img', selector: 'article  .td-post-featured-image img', type: crawler_1.Type.IMAGE },
    { name: 'details', selector: 'article .td-post-content > p', type: crawler_1.Type.TEXT },
];
var BanglarPranConfig = /** @class */ (function (_super) {
    __extends(BanglarPranConfig, _super);
    function BanglarPranConfig() {
        return _super.call(this, "") || this;
    }
    BanglarPranConfig.prototype.getRootConfig = function () {
        return {
            'title': 'Banglar Pran',
            is_active: true,
        };
    };
    BanglarPranConfig.prototype.getLang = function () {
        return CONST_1.LANG.BENGALI;
    };
    BanglarPranConfig.prototype.getLimit = function () {
        return 4;
    };
    BanglarPranConfig.prototype.getPageParseConfig = function () {
        return wp;
    };
    BanglarPranConfig.prototype.getTestPageUrl = function () {
        return "https://www.banglarpran.com/archives/54540";
    };
    BanglarPranConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.VIRAL, selector: '.td-main-content .td-module-thumb > a', url: 'https://www.banglarpran.com/archives/category/different-news' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.td-main-content .td-module-thumb > a', url: 'https://www.banglarpran.com/archives/category/entertrainment' },
            { stream: CONST_1.STREAM.HEALTH, selector: '.td-main-content .td-module-thumb > a', url: 'https://www.banglarpran.com/archives/category/health' },
            { stream: CONST_1.STREAM.DOOARS, selector: '.td-main-content .td-module-thumb > a', url: 'hhttps://www.banglarpran.com/archives/category/dooars' },
            { stream: CONST_1.STREAM.STATE, selector: '.td-main-content .td-module-thumb > a', url: 'https://www.banglarpran.com/archives/category/state' },
            { stream: CONST_1.STREAM.POLITICS, selector: '.td-main-content .td-module-thumb > a', url: 'https://www.banglarpran.com/archives/category/politics' },
            { stream: CONST_1.STREAM.COUNTRY, selector: '.td-main-content .td-module-thumb > a', url: 'https://www.banglarpran.com/archives/category/india' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.td-main-content .td-module-thumb > a', url: 'https://www.banglarpran.com/archives/category/internation' },
            { stream: CONST_1.STREAM.SPORTS, selector: '.td-main-content .td-module-thumb > a', url: 'https://www.banglarpran.com/archives/category/sports' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: '.td-main-content .td-module-thumb > a', url: 'https://www.banglarpran.com/archives/category/tech-news' },
        ];
    };
    return BanglarPranConfig;
}(baseconfig_1.BaseConfig));
exports.BanglarPranConfig = BanglarPranConfig;
var DarkariTipsConfig = /** @class */ (function (_super) {
    __extends(DarkariTipsConfig, _super);
    function DarkariTipsConfig() {
        return _super.call(this, "") || this;
    }
    DarkariTipsConfig.prototype.getRootConfig = function () {
        return {
            title: 'Darkari Tips',
            is_active: true,
        };
    };
    DarkariTipsConfig.prototype.getLang = function () {
        return CONST_1.LANG.BENGALI;
    };
    DarkariTipsConfig.prototype.getLimit = function () {
        return 2;
    };
    DarkariTipsConfig.prototype.getPageParseConfig = function () {
        return wp;
    };
    DarkariTipsConfig.prototype.getTestPageUrl = function () {
        return "https://www.darkaritips.com/baby-care/ja-ja-kornio-2/";
    };
    DarkariTipsConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.td-main-content .td-module-thumb > a', url: 'https://www.darkaritips.com/headline/' },
            { stream: CONST_1.STREAM.HEALTH, selector: '.td-main-content .td-module-thumb > a', url: 'https://www.darkaritips.com/category/health-message/' },
            { stream: CONST_1.STREAM.LIFESTYLE, selector: '.td-main-content .td-module-thumb > a', url: 'https://www.darkaritips.com/category/lifestyle/' },
        ];
    };
    return DarkariTipsConfig;
}(baseconfig_1.BaseConfig));
exports.DarkariTipsConfig = DarkariTipsConfig;
var GNEBanglaConfig = /** @class */ (function (_super) {
    __extends(GNEBanglaConfig, _super);
    function GNEBanglaConfig() {
        return _super.call(this, "") || this;
    }
    GNEBanglaConfig.prototype.getRootConfig = function () {
        return {
            'title': 'GNE Bangla',
            is_active: true,
        };
    };
    GNEBanglaConfig.prototype.getLang = function () {
        return CONST_1.LANG.BENGALI;
    };
    GNEBanglaConfig.prototype.getPageParseConfig = function () {
        return wp;
    };
    GNEBanglaConfig.prototype.getTestPageUrl = function () {
        return "https://gnebangla.in/international/2019/10/17/%e0%a6%ad%e0%a6%af%e0%a6%bc%e0%a6%99%e0%a7%8d%e0%a6%95%e0%a6%b0-%e0%a6%ac%e0%a6%bf%e0%a6%aa%e0%a6%a6-%e0%a6%a4%e0%a6%be%e0%a6%87-%e0%a6%8f%e0%a6%87-%e0%a6%ae%e0%a6%be%e0%a6%9b%e0%a6%95%e0%a7%87/";
    };
    GNEBanglaConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.VIRAL, selector: '.td-category-grid .td-module-thumb > a', url: 'https://gnebangla.in/category/viral-news/' },
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.td-category-grid .td-module-thumb > a', url: 'https://gnebangla.in/category/local-news/' },
            { stream: CONST_1.STREAM.STATE, selector: '.td-category-grid .td-module-thumb > a', url: 'https://gnebangla.in/category/west-bengal/' },
            { stream: CONST_1.STREAM.COUNTRY, selector: '.td-category-grid .td-module-thumb > a', url: 'https://gnebangla.in/category/national-news/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.td-category-grid .td-module-thumb > a', url: 'https://gnebangla.in/category/international/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: '.td-category-grid .td-module-thumb > a', url: 'https://gnebangla.in/category/technology/' },
            { stream: CONST_1.STREAM.SPORTS, selector: '.td-category-grid .td-module-thumb > a', url: 'https://gnebangla.in/category/sports-news/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.td-category-grid .td-module-thumb > a', url: 'https://gnebangla.in/category/entertainment/' },
        ];
    };
    return GNEBanglaConfig;
}(baseconfig_1.BaseConfig));
exports.GNEBanglaConfig = GNEBanglaConfig;
var BharatBartaConfig = /** @class */ (function (_super) {
    __extends(BharatBartaConfig, _super);
    function BharatBartaConfig() {
        return _super.call(this, "bharatbarta") || this;
    }
    BharatBartaConfig.prototype.getRootConfig = function () {
        return {
            'title': 'Bharat Barta',
            is_active: true,
        };
    };
    BharatBartaConfig.prototype.getLang = function () {
        return CONST_1.LANG.BENGALI;
    };
    BharatBartaConfig.prototype.getPageParseConfig = function () {
        return wp;
    };
    BharatBartaConfig.prototype.getTestPageUrl = function () {
        return "https://www.bharatbarta.com/silver-ganguly-in-the-title-again-what-he-said-in-the-trinomul-context/";
    };
    BharatBartaConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.VIRAL, selector: '.td-module-thumb > a', url: 'https://www.bharatbarta.com/category/vairal/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.td-module-thumb > a', url: 'https://www.bharatbarta.com/category/entertainment' },
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: ' .td-module-thumb > a', url: 'https://www.bharatbarta.com/category/news' },
            { stream: CONST_1.STREAM.POLITICS, selector: '.td-module-thumb > a', url: 'https://www.bharatbarta.com/category/politics-news' },
            { stream: CONST_1.STREAM.LIFESTYLE, selector: '.td-module-thumb > a', url: 'https://www.bharatbarta.com/category/lifestyle' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: '.td-module-thumb > a', url: 'https://www.bharatbarta.com/category/technology' },
            { stream: CONST_1.STREAM.SPORTS, selector: '.td-module-thumb > a', url: 'https://www.bharatbarta.com/category/sports' },
            { stream: CONST_1.STREAM.OTHER, selector: '.td-module-thumb > a', url: 'https://www.bharatbarta.com/category/bb-special/' },
        ];
    };
    return BharatBartaConfig;
}(baseconfig_1.BaseConfig));
exports.BharatBartaConfig = BharatBartaConfig;
var Totka24X7Config = /** @class */ (function (_super) {
    __extends(Totka24X7Config, _super);
    function Totka24X7Config() {
        return _super.call(this, "") || this;
    }
    Totka24X7Config.prototype.getRootConfig = function () {
        return {
            'title': 'Totka24X7',
            is_active: true,
        };
    };
    Totka24X7Config.prototype.getLang = function () {
        return CONST_1.LANG.BENGALI;
    };
    Totka24X7Config.prototype.getPageParseConfig = function () {
        return wp;
    };
    Totka24X7Config.prototype.getTestPageUrl = function () {
        return "https://www.totka24x7.com/archives/68729";
    };
    Totka24X7Config.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.LIFESTYLE, selector: '.td-module-thumb > a', url: 'https://www.totka24x7.com/archives/category/lifestyle' },
            { stream: CONST_1.STREAM.LS_MONEY, selector: '.td-module-thumb > a', url: 'https://www.totka24x7.com/archives/category/earn-money' },
            { stream: CONST_1.STREAM.LS_VIRAL, selector: '.td-module-thumb > a', url: 'https://www.totka24x7.com/archives/category/viral' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.td-module-thumb > a', url: 'https://www.totka24x7.com/archives/category/entertainment' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.td-module-thumb > a', url: 'https://gnebangla.in/category/international/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: '.td-module-thumb > a', url: 'https://www.totka24x7.com/archives/category/technology' },
            { stream: CONST_1.STREAM.OTHER, selector: '.td-module-thumb > a', url: 'https://www.totka24x7.com/archives/category/headlines' },
            { stream: CONST_1.STREAM.ASTROLOGY, selector: '.td-module-thumb > a', url: 'https://www.totka24x7.com/archives/category/astrology' },
            { stream: CONST_1.STREAM.OTHER, selector: '.td-module-thumb > a', url: 'https://www.totka24x7.com/archives/category/different-news' },
        ];
    };
    return Totka24X7Config;
}(baseconfig_1.BaseConfig));
exports.Totka24X7Config = Totka24X7Config;
//# sourceMappingURL=wordpress.js.map