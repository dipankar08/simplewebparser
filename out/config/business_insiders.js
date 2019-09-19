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
var BusinessInsidersConfig = /** @class */ (function (_super) {
    __extends(BusinessInsidersConfig, _super);
    function BusinessInsidersConfig() {
        return _super.call(this, "BusinessInsiders") || this;
    }
    BusinessInsidersConfig.prototype.getLang = function () {
        return CONST_1.LANG.ENGLISH;
    };
    BusinessInsidersConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: '.ArticleCont article h1', type: crawler_1.Type.TEXT },
            { name: 'details', selector: '.ArticleCont .article_content .story-text', type: crawler_1.Type.TEXT },
            { name: 'img', selector: '.ArticleCont img', type: crawler_1.Type.IMAGE, attr: 'data-original' },
        ];
    };
    BusinessInsidersConfig.prototype.getTestPageUrl = function () {
        return "https://www.businessinsider.in/yes-bank-promoters-seek-probe-against-short-sellers-hammering-the-stock/articleshow/71108464.cms";
    };
    BusinessInsidersConfig.prototype.getListConfig = function (stream) {
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
                'url': "https://www.businessinsider.in/business",
                'selectors': [".toplist_stories figure > a"]
            };
            case CONST_1.STREAM.SCIENCE: return {
                'url': "https://www.businessinsider.in/science",
                'selectors': [".toplist_stories figure > a"]
            };
            case CONST_1.STREAM.TECHNOLOGY: return {
                'url': "https://www.businessinsider.in/sai",
                'selectors': [".toplist_stories figure > a"]
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
    return BusinessInsidersConfig;
}(baseconfig_1.BaseConfig));
exports.BusinessInsidersConfig = BusinessInsidersConfig;
//# sourceMappingURL=business_insiders.js.map