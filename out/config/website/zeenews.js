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
var crawler_1 = require("../../crawler");
var CONST_1 = require("../CONST");
var ZeeNewsBengaliConfig = /** @class */ (function (_super) {
    __extends(ZeeNewsBengaliConfig, _super);
    function ZeeNewsBengaliConfig() {
        return _super.call(this, "") || this;
    }
    ZeeNewsBengaliConfig.prototype.getLang = function () {
        return CONST_1.LANG.IN_BENGALI;
    };
    ZeeNewsBengaliConfig.prototype.getRootConfig = function () {
        return {
            ignoreUrlRegex: ['/video/'],
            defaultImg: 'https://english.cdn.zeenews.com/images/logo/zeenewslogo_nav.png',
            title: "Zee News",
        };
    };
    ZeeNewsBengaliConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: '.content h1', type: crawler_1.Type.TEXT },
            { name: 'img', selector: '.article-image-block img', type: crawler_1.Type.IMAGE },
            { name: 'details', selector: '.content .article', type: crawler_1.Type.TEXT },
        ];
    };
    ZeeNewsBengaliConfig.prototype.getTestPageUrl = function () {
        return "https://zeenews.india.com/bengali/kolkata/bjp-protest-against-state-government-over-nabanna-abhijan_277198.html";
    };
    ZeeNewsBengaliConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.COUNTRY, selector: '.maincontent .section-article > a', url: 'https://zeenews.india.com/bengali/nation' },
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.maincontent .section-article > a', url: 'https://zeenews.india.com/bengali/state' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.maincontent .section-article > a', url: 'https://zeenews.india.com/bengali/world' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.maincontent .section-article > a', url: 'https://zeenews.india.com/bengali/entertainment' },
            { stream: CONST_1.STREAM.LIFESTYLE, selector: '.maincontent .section-article > a', url: 'https://zeenews.india.com/bengali/lifestyle' },
        ];
    };
    return ZeeNewsBengaliConfig;
}(baseconfig_1.BaseConfig));
exports.ZeeNewsBengaliConfig = ZeeNewsBengaliConfig;
var ZeeNewsEnglishConfig = /** @class */ (function (_super) {
    __extends(ZeeNewsEnglishConfig, _super);
    function ZeeNewsEnglishConfig() {
        return _super.call(this, "") || this;
    }
    ZeeNewsEnglishConfig.prototype.getLang = function () {
        return CONST_1.LANG.IN_ENGLISH;
    };
    ZeeNewsEnglishConfig.prototype.getRootConfig = function () {
        return {
            ignoreUrlRegex: ['/video/'],
            defaultImg: 'https://english.cdn.zeenews.com/images/logo/zeenewslogo_nav.png',
            title: "Zee News",
        };
    };
    ZeeNewsEnglishConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: '.content h1', type: crawler_1.Type.TEXT },
            { name: 'img', selector: '.article-image-block img', type: crawler_1.Type.IMAGE },
            { name: 'details', selector: '.content .article', type: crawler_1.Type.TEXT },
        ];
    };
    ZeeNewsEnglishConfig.prototype.getTestPageUrl = function () {
        return "https://zeenews.india.com/india/enough-is-enough-ayodhya-case-hearing-to-conclude-by-5-pm-says-cji-ranjan-gogoi-2240424.html";
    };
    ZeeNewsEnglishConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.lead-block a', url: 'https://zeenews.india.com/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.four-col-block  a', url: 'https://zeenews.india.com/entertainment' },
            { stream: CONST_1.STREAM.LIFESTYLE, selector: '.four-col-block  a', url: 'https://zeenews.india.com/lifestyle' },
            { stream: CONST_1.STREAM.BUSINESS, selector: '.four-col-block  a', url: 'https://zeenews.india.com/business' },
            { stream: CONST_1.STREAM.SCIENCE, selector: '.four-col-block  a', url: 'https://zeenews.india.com/science-environment' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: '.four-col-block  a', url: 'https://zeenews.india.com/technology' },
            { stream: CONST_1.STREAM.COUNTRY, selector: '.four-col-block  a', url: 'https://zeenews.india.com/india' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.maincontent a', url: 'https://zeenews.india.com/World' },
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.four-col-block  a', url: 'https://zeenews.india.com/state' },
        ];
    };
    return ZeeNewsEnglishConfig;
}(baseconfig_1.BaseConfig));
exports.ZeeNewsEnglishConfig = ZeeNewsEnglishConfig;
var ZeeNewsHindiConfig = /** @class */ (function (_super) {
    __extends(ZeeNewsHindiConfig, _super);
    function ZeeNewsHindiConfig() {
        return _super.call(this, "") || this;
    }
    ZeeNewsHindiConfig.prototype.getLang = function () {
        return CONST_1.LANG.IN_HINDI;
    };
    ZeeNewsHindiConfig.prototype.getRootConfig = function () {
        return {
            ignoreUrlRegex: ['/video/'],
            defaultImg: 'https://english.cdn.zeenews.com/images/logo/zeenewslogo_nav.png',
            title: "Zee News",
        };
    };
    ZeeNewsHindiConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: '.content h1', type: crawler_1.Type.TEXT },
            { name: 'img', selector: '.article-image-block img', type: crawler_1.Type.IMAGE },
            { name: 'details', selector: '.content .article', type: crawler_1.Type.TEXT },
        ];
    };
    ZeeNewsHindiConfig.prototype.getTestPageUrl = function () {
        return "https://zeenews.india.com/hindi/india/up-uttarakhand/ayodhya-case-hearing-40th-day-live-proceedings/585506";
    };
    ZeeNewsHindiConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.lead-block a', url: 'https://zeenews.india.com/hindi' },
            { stream: CONST_1.STREAM.COUNTRY, selector: '.maincontent a', url: 'https://zeenews.india.com/hindi/india' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.maincontent a', url: 'https://zeenews.india.com/hindi/world' },
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.maincontent a', url: 'https://zeenews.india.com/hindi/india/states' },
            { stream: CONST_1.STREAM.SPORTS, selector: '.maincontent a', url: 'https://zeenews.india.com/hindi/sports' },
            { stream: CONST_1.STREAM.BUSINESS, selector: '.maincontent a', url: 'https://zeenews.india.com/hindi/business' },
            { stream: CONST_1.STREAM.MOVIE, selector: '.maincontent a', url: 'https://zeenews.india.com/hindi/bollywood' },
            { stream: CONST_1.STREAM.SCIENCE, selector: '.maincontent a', url: 'https://zeenews.india.com/hindi/science' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: '.maincontent a', url: 'https://zeenews.india.com/hindi/technology' },
        ];
    };
    return ZeeNewsHindiConfig;
}(baseconfig_1.BaseConfig));
exports.ZeeNewsHindiConfig = ZeeNewsHindiConfig;
//# sourceMappingURL=zeenews.js.map