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
var OneIndiaBengaliConfig = /** @class */ (function (_super) {
    __extends(OneIndiaBengaliConfig, _super);
    function OneIndiaBengaliConfig() {
        return _super.call(this, "") || this;
    }
    OneIndiaBengaliConfig.prototype.getLang = function () {
        return CONST_1.LANG.IN_BENGALI;
    };
    OneIndiaBengaliConfig.prototype.getRootConfig = function () {
        return {
            ignoreUrlRegex: ['/videos/'],
            defaultImg: 'https://hindi.oneindia.com/images/hindi-oneindia-logo.svg',
            title: "OneIndia",
        };
    };
    OneIndiaBengaliConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: 'article h1', type: crawler_1.Type.TEXT },
            { name: 'details', selector: 'article .oi-article-lt > p', type: crawler_1.Type.TEXT },
            { name: 'img', selector: 'article figure  img', type: crawler_1.Type.IMAGE },
        ];
    };
    OneIndiaBengaliConfig.prototype.getTestPageUrl = function () {
        return "https://bengali.oneindia.com/news/west-bengal/bjp-councillor-of-garulia-chandrabhan-singh-joins-tmc-in-presence-of-jyotipriya-mallick-061638.html";
    };
    OneIndiaBengaliConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: 'article .article-img a', url: 'https://bengali.oneindia.com/news/kolkata/' },
            { stream: CONST_1.STREAM.COUNTRY, selector: 'article .article-img a', url: 'https://bengali.oneindia.com/news/india/' },
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: 'article .article-img a', url: 'https://bengali.oneindia.com/news/kolkata/' },
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: 'article .article-img a', url: 'https://bengali.oneindia.com/news/west-bengal/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: 'article .article-img a', url: 'https://bengali.oneindia.com/news/international/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: 'article .article-img a', url: 'https://bengali.oneindia.com/news/movies/' },
        ];
    };
    return OneIndiaBengaliConfig;
}(baseconfig_1.BaseConfig));
exports.OneIndiaBengaliConfig = OneIndiaBengaliConfig;
var OneIndiaEnglishConfig = /** @class */ (function (_super) {
    __extends(OneIndiaEnglishConfig, _super);
    function OneIndiaEnglishConfig() {
        return _super.call(this, "") || this;
    }
    OneIndiaEnglishConfig.prototype.getLang = function () {
        return CONST_1.LANG.IN_ENGLISH;
    };
    OneIndiaEnglishConfig.prototype.getRootConfig = function () {
        return {
            ignoreUrlRegex: ['/videos/'],
            defaultImg: 'https://hindi.oneindia.com/images/hindi-oneindia-logo.svg',
            title: "One India",
        };
    };
    OneIndiaEnglishConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: 'article h1', type: crawler_1.Type.TEXT },
            { name: 'details', selector: 'article .oi-article-lt > p', type: crawler_1.Type.TEXT },
            { name: 'img', selector: 'article figure  img', type: crawler_1.Type.IMAGE, attr: "data-pagespeed-lazy-src" },
        ];
    };
    OneIndiaEnglishConfig.prototype.getTestPageUrl = function () {
        return "https://www.oneindia.com/india/ayodhya-case-how-ram-lalla-became-a-party-in-the-court-2962848.html";
    };
    OneIndiaEnglishConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '#containerMain .main-block a', url: 'https://www.oneindia.com/', limit: 30 },
            { stream: CONST_1.STREAM.COUNTRY, selector: 'article .article-img a', url: 'https://www.oneindia.com/india/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: 'article .article-img a', url: 'https://www.oneindia.com/international/' },
            { stream: CONST_1.STREAM.BUSINESS, selector: 'article .article-img a', url: 'https://www.oneindia.com/business/' },
        ];
    };
    return OneIndiaEnglishConfig;
}(baseconfig_1.BaseConfig));
exports.OneIndiaEnglishConfig = OneIndiaEnglishConfig;
var OneIndiaHindiConfig = /** @class */ (function (_super) {
    __extends(OneIndiaHindiConfig, _super);
    function OneIndiaHindiConfig() {
        return _super.call(this, "") || this;
    }
    OneIndiaHindiConfig.prototype.getLang = function () {
        return CONST_1.LANG.IN_HINDI;
    };
    OneIndiaHindiConfig.prototype.getRootConfig = function () {
        return {
            ignoreUrlRegex: ['/videos/'],
            defaultImg: 'https://hindi.oneindia.com/images/hindi-oneindia-logo.svg',
            title: "OneIndia",
        };
    };
    OneIndiaHindiConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: 'article h1', type: crawler_1.Type.TEXT },
            { name: 'details', selector: 'article .oi-article-lt > p', type: crawler_1.Type.TEXT },
            { name: 'img', selector: 'article figure  img', type: crawler_1.Type.IMAGE, attr: "data-pagespeed-lazy-src" },
        ];
    };
    OneIndiaHindiConfig.prototype.getTestPageUrl = function () {
        return "https://hindi.oneindia.com/news/international/australian-pm-s-office-sends-secret-document-to-journalists-528840.html";
    };
    OneIndiaHindiConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '#containerMain .newsBlock a', url: 'https://hindi.oneindia.com/', limit: 30 },
            { stream: CONST_1.STREAM.COUNTRY, selector: 'article .article-img a', url: 'https://hindi.oneindia.com/news/india/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: 'article .article-img a', url: 'https://hindi.oneindia.com/news/international/' },
        ];
    };
    return OneIndiaHindiConfig;
}(baseconfig_1.BaseConfig));
exports.OneIndiaHindiConfig = OneIndiaHindiConfig;
//# sourceMappingURL=oneindia.js.map