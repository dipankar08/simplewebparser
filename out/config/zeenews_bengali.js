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
var ZeeNewsConfig = /** @class */ (function (_super) {
    __extends(ZeeNewsConfig, _super);
    function ZeeNewsConfig() {
        return _super.call(this, "zeenews") || this;
    }
    ZeeNewsConfig.prototype.getLang = function () {
        return CONST_1.LANG.BENGALI;
    };
    ZeeNewsConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: '.content h1', type: crawler_1.Type.TEXT },
            { name: 'details', selector: '.content .article', type: crawler_1.Type.TEXT },
            { name: 'img', selector: '.article-image-block img', type: crawler_1.Type.IMAGE },
        ];
    };
    ZeeNewsConfig.prototype.getTestPageUrl = function () {
        return "https://zeenews.india.com/bengali/kolkata/bjp-protest-against-state-government-over-nabanna-abhijan_277198.html";
    };
    ZeeNewsConfig.prototype.getListConfig = function (stream) {
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
                'url': 'https://zeenews.india.com/bengali/nation',
                'selectors': ['.maincontent .section-article > a']
            };
            case CONST_1.STREAM.STATE: return {
                'url': 'https://zeenews.india.com/bengali/state',
                'selectors': ['.maincontent .section-article > a']
            };
            case CONST_1.STREAM.INTERNATIONAL: return {
                'url': 'https://zeenews.india.com/bengali/world',
                'selectors': ['.maincontent .section-article > a']
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
                'url': 'https://zeenews.india.com/bengali/entertainment',
                'selectors': ['.maincontent .section-article > a']
            };
            case CONST_1.STREAM.MOVIE: return {
                'url': null,
                'selectors': []
            };
            case CONST_1.STREAM.LIFESTYLE: return {
                'url': 'https://zeenews.india.com/bengali/lifestyle',
                'selectors': ['.maincontent .section-article > a']
            };
        }
    };
    return ZeeNewsConfig;
}(baseconfig_1.BaseConfig));
exports.ZeeNewsConfig = ZeeNewsConfig;
//# sourceMappingURL=zeenews_bengali.js.map