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
var AajBanglaConfig = /** @class */ (function (_super) {
    __extends(AajBanglaConfig, _super);
    function AajBanglaConfig() {
        return _super.call(this, "") || this;
    }
    AajBanglaConfig.prototype.getLang = function () {
        return CONST_1.LANG.BENGALI;
    };
    AajBanglaConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: '.td-main-content .td-post-title h1', type: crawler_1.Type.TEXT },
            { name: 'img', selector: '.td-main-content .td-post-featured-image img', type: crawler_1.Type.IMAGE },
            { name: 'details', selector: '.td-main-content .td-post-content > p', type: crawler_1.Type.TEXT },
        ];
    };
    AajBanglaConfig.prototype.getTestPageUrl = function () {
        return "https://www.aajbangla.in/read-on-to-know-how-to-spend-all-day-2/";
    };
    AajBanglaConfig.prototype.getListConfig = function (stream) {
        switch (stream) {
            case CONST_1.STREAM.COUNTRY: return {
                'url': 'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%a6%e0%a7%87%e0%a6%b6/',
                'selectors': ['.td-category-grid .td-module-thumb > a']
            };
            case CONST_1.STREAM.HEADLINE: return {
                'url': 'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%95%e0%a6%b2%e0%a6%95%e0%a6%be%e0%a6%a4%e0%a6%be/',
                'selectors': ['.td-category-grid .td-module-thumb > a']
            };
            case CONST_1.STREAM.STATE: return {
                'url': 'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%b0%e0%a6%be%e0%a6%9c%e0%a7%8d%e0%a6%af/',
                'selectors': ['.td-category-grid .td-module-thumb > a']
            };
            case CONST_1.STREAM.INTERNATIONAL: return {
                'url': 'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%bf%e0%a6%b6%e0%a7%8d%e0%a6%ac/',
                'selectors': ['.td-category-grid .td-module-thumb > a']
            };
            case CONST_1.STREAM.BANGLADESH: return {
                'url': 'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%be%e0%a6%82%e0%a6%b2%e0%a6%be%e0%a6%a6%e0%a7%87%e0%a6%b6/',
                'selectors': ['.td-category-grid .td-module-thumb > a']
            };
            case CONST_1.STREAM.SPORTS: return {
                'url': 'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%96%e0%a7%87%e0%a6%b2%e0%a6%be/',
                'selectors': ['.td-category-grid .td-module-thumb > a']
            };
            case CONST_1.STREAM.ENTERTAINMENT: return {
                'url': 'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c-%e0%a6%ac%e0%a6%bf%e0%a6%a8%e0%a7%8b%e0%a6%a6%e0%a6%a8/',
                'selectors': ['.td-category-grid .td-module-thumb > a']
            };
            case CONST_1.STREAM.HOROSCOPE: return {
                'url': 'https://www.aajbangla.in/category/%e0%a6%86%e0%a6%9c%e0%a6%95%e0%a7%87%e0%a6%b0-%e0%a6%a6%e0%a6%bf%e0%a6%a8/',
                'selectors': ['.td-category-grid .td-module-thumb > a']
            };
            case CONST_1.STREAM.LIFESTYLE: return {
                'url': 'https://www.aajbangla.in/category/%e0%a6%b2%e0%a6%be%e0%a6%87%e0%a6%ab%e0%a6%b8%e0%a7%8d%e0%a6%9f%e0%a6%be%e0%a6%87%e0%a6%b2/',
                'selectors': ['.td-category-grid .td-module-thumb > a']
            };
            case CONST_1.STREAM.TOUR: return {
                'url': 'https://www.aajbangla.in/category/%e0%a6%ad%e0%a7%8d%e0%a6%b0%e0%a6%ae%e0%a6%a3/',
                'selectors': ['.td-category-grid .td-module-thumb > a']
            };
        }
    };
    return AajBanglaConfig;
}(baseconfig_1.BaseConfig));
exports.AajBanglaConfig = AajBanglaConfig;
//# sourceMappingURL=ajjbangla.js.map