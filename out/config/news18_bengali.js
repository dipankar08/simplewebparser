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
var News18Config = /** @class */ (function (_super) {
    __extends(News18Config, _super);
    function News18Config() {
        return _super.call(this, "News18Bangla") || this;
    }
    News18Config.prototype.getLang = function () {
        return CONST_1.LANG.BENGALI;
    };
    News18Config.prototype.getLimit = function () {
        return 5;
    };
    News18Config.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: '.article_box h1', type: crawler_1.Type.TEXT },
            { name: 'details', selector: '.article_box #article_body p', type: crawler_1.Type.TEXT },
            { name: 'img', selector: '.article_box .articleimg img', type: crawler_1.Type.IMAGE },
        ];
    };
    News18Config.prototype.getRootConfig = function () {
        return {
            ignoreUrlRegex: ['/photogallery/', '/videos/'] // any URL contains photogallery will be ignored.
        };
    };
    News18Config.prototype.getTestPageUrl = function () {
        return "https://bengali.news18.com/news/kolkata/biman-basu-on-police-lathicharge-on-left-protesters-dc-368264.html";
    };
    News18Config.prototype.getListConfig = function (stream) {
        switch (stream) {
            case CONST_1.STREAM.HEADLINE: return {
                'url': null,
                'selectors': []
            };
            case CONST_1.STREAM.FIRST_PAGE: return {
                'url': null,
                'selectors': []
            };
            case CONST_1.STREAM.COUNTRY: return {
                'url': 'https://bengali.news18.com/national/',
                'selectors': ['.nwslist-withbrdr li a']
            };
            case CONST_1.STREAM.STATE: return {
                'url': 'https://bengali.news18.com/kolkata/',
                'selectors': ['.nwslist-withbrdr li a']
            };
            case CONST_1.STREAM.INTERNATIONAL: return {
                'url': 'https://bengali.news18.com/international/',
                'selectors': ['.nwslist-withbrdr li a']
            };
            case CONST_1.STREAM.BUSINESS: return {
                'url': null,
                'selectors': []
            };
            case CONST_1.STREAM.SCIENCE: return {
                'url': 'https://bengali.news18.com/technology/',
                'selectors': ['.nwslist-withbrdr li a']
            };
            case CONST_1.STREAM.ENTERTAINMENT: return {
                'url': 'https://bengali.news18.com/entertainment/',
                'selectors': ['.nwslist-withbrdr li a']
            };
            case CONST_1.STREAM.MOVIE: return {
                'url': null,
                'selectors': []
            };
            case CONST_1.STREAM.LIFESTYLE: return {
                'url': 'https://bengali.news18.com/life-style/',
                'selectors': ['.nwslist-withbrdr li a']
            };
        }
    };
    return News18Config;
}(baseconfig_1.BaseConfig));
exports.News18Config = News18Config;
//# sourceMappingURL=news18_bengali.js.map