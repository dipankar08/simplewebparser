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
var AjjKalConfig = /** @class */ (function (_super) {
    __extends(AjjKalConfig, _super);
    function AjjKalConfig() {
        return _super.call(this, "") || this;
    }
    AjjKalConfig.prototype.getLang = function () {
        return CONST_1.LANG.BENGALI;
    };
    AjjKalConfig.prototype.getLimit = function () {
        return 3;
    };
    AjjKalConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: '#banner h1', type: crawler_1.Type.TEXT },
            { name: 'img', selector: '#banner .image-holder img', type: crawler_1.Type.IMAGE },
            { name: 'details', selector: '.blog-detail   .blog-detail-excep > p', type: crawler_1.Type.TEXT },
        ];
    };
    AjjKalConfig.prototype.getTestPageUrl = function () {
        return "https://aajkaal.in/news/northbengal/jungle-safari-bgdc";
    };
    AjjKalConfig.prototype.getListConfig = function (stream) {
        switch (stream) {
            case CONST_1.STREAM.HEADLINE: return {
                'url': 'https://aajkaal.in/kolkata',
                'selectors': ['.news-tabe .col-md-4 .image-holder > a']
            };
            case CONST_1.STREAM.STATE: return {
                'url': 'https://aajkaal.in/state',
                'selectors': ['.news-tabe .col-md-4 .image-holder > a']
            };
            case CONST_1.STREAM.COUNTRY: return {
                'url': 'https://aajkaal.in/national',
                'selectors': ['.news-tabe .col-md-4 .image-holder > a']
            };
            case CONST_1.STREAM.INTERNATIONAL: return {
                'url': 'https://aajkaal.in/international',
                'selectors': ['.news-tabe .col-md-4 .image-holder > a']
            };
            case CONST_1.STREAM.BUSINESS: return {
                'url': 'https://aajkaal.in/business',
                'selectors': ['.news-tabe .col-md-4 .image-holder > a']
            };
            case CONST_1.STREAM.ENTERTAINMENT: return {
                'url': 'https://aajkaal.in/entertainment',
                'selectors': ['.news-tabe .col-md-4 .image-holder > a']
            };
            case CONST_1.STREAM.SPORTS: return {
                'url': 'https://aajkaal.in/sports',
                'selectors': ['.news-tabe .col-md-4 .image-holder > a']
            };
            case CONST_1.STREAM.LIFESTYLE: return {
                'url': 'https://aajkaal.in/lifestyle',
                'selectors': ['.news-tabe .col-md-4 .image-holder > a']
            };
            case CONST_1.STREAM.OFF_BEAT: return {
                'url': 'https://aajkaal.in/offbeat',
                'selectors': ['.news-tabe .col-md-4 .image-holder > a']
            };
            case CONST_1.STREAM.TOUR: return {
                'url': 'https://aajkaal.in/tour',
                'selectors': ['.news-tabe .col-md-4 .image-holder > a']
            };
            case CONST_1.STREAM.SCIENCE: return {
                'url': 'https://aajkaal.in/sciencetechnology',
                'selectors': ['.news-tabe .col-md-4 .image-holder > a']
            };
            case CONST_1.STREAM.EDUCATION: return {
                'url': 'https://aajkaal.in/helth',
                'selectors': ['.news-tabe .col-md-4 .image-holder > a']
            };
        }
    };
    return AjjKalConfig;
}(baseconfig_1.BaseConfig));
exports.AjjKalConfig = AjjKalConfig;
//# sourceMappingURL=ajjkal.js.map