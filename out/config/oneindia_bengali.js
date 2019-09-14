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
        return _super.call(this, "anandabazar") || this;
    }
    OneIndiaBengaliConfig.prototype.getLang = function () {
        return CONST_1.LANG.BENGALI;
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
    OneIndiaBengaliConfig.prototype.getListConfig = function (stream) {
        switch (stream) {
            case CONST_1.STREAM.HEADLINE: return {
                'url': null,
                'selectors': []
            };
            case CONST_1.STREAM.FIRST_PAGE: return {
                'url': 'https://bengali.oneindia.com/news/kolkata/',
                'selectors': ['article .article-img a']
            };
            case CONST_1.STREAM.COUNTRY: return {
                'url': 'https://bengali.oneindia.com/news/india/',
                'selectors': ['article .article-img a']
            };
            case CONST_1.STREAM.STATE: return {
                'url': 'https://bengali.oneindia.com/news/west-bengal/',
                'selectors': ['article .article-img a']
            };
            case CONST_1.STREAM.INTERNATIONAL: return {
                'url': 'https://bengali.oneindia.com/news/international/',
                'selectors': ['article .article-img a']
            };
            case CONST_1.STREAM.BUSINESS: return {
                'url': null,
                'selectors': []
            };
            case CONST_1.STREAM.SCIENCE: return {
                'url': null,
                'selectors': []
            };
            case CONST_1.STREAM.ENTERTAINMENT: return {
                'url': null,
                'selectors': []
            };
            case CONST_1.STREAM.MOVIE: return {
                'url': 'https://bengali.oneindia.com/movies/',
                'selectors': ['article .article-img a']
            };
            case CONST_1.STREAM.LIFESTYLE: return {
                'url': null,
                'selectors': []
            };
        }
    };
    return OneIndiaBengaliConfig;
}(baseconfig_1.BaseConfig));
exports.OneIndiaBengaliConfig = OneIndiaBengaliConfig;
//# sourceMappingURL=oneindia_bengali.js.map