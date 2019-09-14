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
var BbcBengaliConfig = /** @class */ (function (_super) {
    __extends(BbcBengaliConfig, _super);
    function BbcBengaliConfig() {
        return _super.call(this, "anandabazar") || this;
    }
    BbcBengaliConfig.prototype.getLang = function () {
        return CONST_1.LANG.BENGALI;
    };
    BbcBengaliConfig.prototype.getLimit = function () {
        return 5;
    };
    BbcBengaliConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: '.story-body h1', type: crawler_1.Type.TEXT },
            { name: 'details', selector: '.story-body .story-body__inner > p', type: crawler_1.Type.TEXT },
            { name: 'img', selector: '.story-body figure  img', type: crawler_1.Type.IMAGE },
        ];
    };
    BbcBengaliConfig.prototype.getTestPageUrl = function () {
        return "https://www.bbc.com/bengali/news-49696031";
    };
    BbcBengaliConfig.prototype.getListConfig = function (stream) {
        switch (stream) {
            case CONST_1.STREAM.HEADLINE: return {
                'url': null,
                'selectors': []
            };
            case CONST_1.STREAM.FIRST_PAGE: return {
                'url': 'https://www.bbc.com/bengali/news',
                'selectors': ['.eagle .eagle-item > a']
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
    return BbcBengaliConfig;
}(baseconfig_1.BaseConfig));
exports.BbcBengaliConfig = BbcBengaliConfig;
//# sourceMappingURL=bbc_bengali.js.map