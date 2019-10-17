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
var News18BengaliConfig = /** @class */ (function (_super) {
    __extends(News18BengaliConfig, _super);
    function News18BengaliConfig() {
        return _super.call(this, "") || this;
    }
    News18BengaliConfig.prototype.getLang = function () {
        return CONST_1.LANG.BENGALI;
    };
    News18BengaliConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: '.article_box h1', type: crawler_1.Type.TEXT },
            { name: 'details', selector: '.article_box #article_body p', type: crawler_1.Type.TEXT },
            { name: 'img', selector: '.article_box .articleimg img', type: crawler_1.Type.IMAGE },
        ];
    };
    News18BengaliConfig.prototype.getRootConfig = function () {
        return {
            ignoreUrlRegex: ['/photogallery/', '/videos/'],
            title: "News18",
        };
    };
    News18BengaliConfig.prototype.getTestPageUrl = function () {
        return "https://hindi.news18.com/news/nation/kashmir-zone-police-says-encounter-underway-at-the-outskirts-of-anantnag-in-jammu-and-kashmir-2519905.html";
    };
    News18BengaliConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.COUNTRY, selector: '.nwslist-withbrdr li a', url: 'https://bengali.news18.com/national/' },
            { stream: CONST_1.STREAM.STATE, selector: '.nwslist-withbrdr li a', url: 'https://bengali.news18.com/kolkata/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.nwslist-withbrdr li a', url: 'https://bengali.news18.com/international/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: '.nwslist-withbrdr li a', url: 'https://bengali.news18.com/technology/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.nwslist-withbrdr li a', url: 'https://bengali.news18.com/entertainment/' },
            { stream: CONST_1.STREAM.LIFESTYLE, selector: '.nwslist-withbrdr li a', url: 'https://bengali.news18.com/life-style/' },
        ];
    };
    return News18BengaliConfig;
}(baseconfig_1.BaseConfig));
exports.News18BengaliConfig = News18BengaliConfig;
var News18EnglishConfig = /** @class */ (function (_super) {
    __extends(News18EnglishConfig, _super);
    function News18EnglishConfig() {
        return _super.call(this, "") || this;
    }
    News18EnglishConfig.prototype.getLang = function () {
        return CONST_1.LANG.ENGLISH;
    };
    News18EnglishConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: '.article-sbox h1', type: crawler_1.Type.TEXT },
            { name: 'img', selector: '.article-sbox .articleimg img', type: crawler_1.Type.IMAGE },
            { name: 'details', selector: '.article-sbox #article_body p', type: crawler_1.Type.TEXT },
        ];
    };
    News18EnglishConfig.prototype.getRootConfig = function () {
        return {
            ignoreUrlRegex: ['/photogallery/', '/videos/'],
            title: "News18"
        };
    };
    News18EnglishConfig.prototype.getTestPageUrl = function () {
        return "https://www.news18.com/news/tech/google-pixel-4-pixel-4-xl-to-launch-today-heres-how-to-watch-the-live-stream-2346447.html";
    };
    News18EnglishConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.HEADLINE, selector: '.lead-story a', url: 'https://www.news18.com/' },
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.hotTopic a', url: 'https://www.news18.com/politics/' },
            { stream: CONST_1.STREAM.COUNTRY, selector: '.hotTopic a', url: 'https://www.news18.com/india/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.hotTopic a', url: 'https://www.news18.com/world/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: '.hotTopic a', url: 'https://www.news18.com/tech/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.hotTopic a', url: 'https://www.news18.com/entertainment/' },
            { stream: CONST_1.STREAM.LIFESTYLE, selector: '.hotTopic a', url: 'https://www.news18.com/lifestyle/' },
            { stream: CONST_1.STREAM.BUSINESS, selector: '.hotTopic a', url: 'https://www.news18.com/business/' },
            { stream: CONST_1.STREAM.MOVIE, selector: '.hotTopic a', url: 'https://www.news18.com/movies/' },
        ];
    };
    return News18EnglishConfig;
}(baseconfig_1.BaseConfig));
exports.News18EnglishConfig = News18EnglishConfig;
var News18HindiConfig = /** @class */ (function (_super) {
    __extends(News18HindiConfig, _super);
    function News18HindiConfig() {
        return _super.call(this, "") || this;
    }
    News18HindiConfig.prototype.getLang = function () {
        return CONST_1.LANG.HINDI;
    };
    News18HindiConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: '#article h1', type: crawler_1.Type.TEXT },
            { name: 'details', selector: '#article .storypara', type: crawler_1.Type.TEXT },
            { name: 'img', selector: '#article_body .articleimg img', type: crawler_1.Type.IMAGE },
        ];
    };
    News18HindiConfig.prototype.getRootConfig = function () {
        return {
            ignoreUrlRegex: ['/photogallery/', '/videos/'],
            title: "News 18"
        };
    };
    News18HindiConfig.prototype.getTestPageUrl = function () {
        return "https://hindi.news18.com/news/nation/kashmir-zone-police-says-encounter-underway-at-the-outskirts-of-anantnag-in-jammu-and-kashmir-2519905.html";
    };
    News18HindiConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.topnews a', url: 'https://hindi.news18.com/' },
            { stream: CONST_1.STREAM.COUNTRY, selector: '.hotTopic a', url: 'https://hindi.news18.com/news/nation/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.hotTopic a', url: 'https://hindi.news18.com/news/world/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: '.hotTopic a', url: 'https://hindi.news18.com/news/tech/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.hotTopic a', url: 'https://hindi.news18.com/news/entertainment/' },
            { stream: CONST_1.STREAM.LIFESTYLE, selector: '.hotTopic a', url: 'https://hindi.news18.com/news/lifestyle/' },
            { stream: CONST_1.STREAM.BUSINESS, selector: '.hotTopic a', url: 'https://hindi.news18.com/news/business/' },
            { stream: CONST_1.STREAM.MOVIE, selector: '.hotTopic a', url: 'https://hindi.news18.com/news/entertainment/film-review/' },
            { stream: CONST_1.STREAM.SPORTS, selector: '.hotTopic a', url: 'https://hindi.news18.com/news/sports/cricket/' },
        ];
    };
    return News18HindiConfig;
}(baseconfig_1.BaseConfig));
exports.News18HindiConfig = News18HindiConfig;
//# sourceMappingURL=news18.js.map