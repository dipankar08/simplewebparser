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
var PratidinConfig = /** @class */ (function (_super) {
    __extends(PratidinConfig, _super);
    function PratidinConfig() {
        return _super.call(this, "Pratidin") || this;
    }
    PratidinConfig.prototype.getLang = function () {
        return CONST_1.LANG.BENGALI;
    };
    PratidinConfig.prototype.getLimit = function () {
        return 10;
    };
    PratidinConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: '.container .hot_news h1', type: crawler_1.Type.TEXT },
            { name: 'details', selector: '.container .news_content_area > p', type: crawler_1.Type.TEXT },
            { name: 'img', selector: '.container img.hot_news_image', type: crawler_1.Type.IMAGE },
        ];
    };
    PratidinConfig.prototype.getTestPageUrl = function () {
        return "https://www.sangbadpratidin.in/world/pakistan-turns-aggressive-constructs-airfield-in-pok/";
    };
    PratidinConfig.prototype.getListConfig = function (stream) {
        switch (stream) {
            case CONST_1.STREAM.HEADLINE: return {
                'url': null,
                'selectors': []
            };
            case CONST_1.STREAM.FIRST_PAGE: return {
                'url': 'https://www.sangbadpratidin.in/latest-update/',
                'selectors': ['ul.more_news_list li > a']
            };
            case CONST_1.STREAM.COUNTRY: return {
                'url': null,
                'selectors': []
            };
            case CONST_1.STREAM.STATE: return {
                'url': null,
                'selectors': []
            };
            case CONST_1.STREAM.INTERNATIONAL: return {
                'url': null,
                'selectors': []
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
                'url': null,
                'selectors': []
            };
            case CONST_1.STREAM.LIFESTYLE: return {
                'url': null,
                'selectors': []
            };
        }
    };
    return PratidinConfig;
}(baseconfig_1.BaseConfig));
exports.PratidinConfig = PratidinConfig;
//# sourceMappingURL=pratidin.js.map