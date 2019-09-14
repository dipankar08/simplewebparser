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
var Kolkata247 = /** @class */ (function (_super) {
    __extends(Kolkata247, _super);
    function Kolkata247() {
        return _super.call(this, "anandabazar") || this;
    }
    Kolkata247.prototype.getLang = function () {
        return CONST_1.LANG.BENGALI;
    };
    Kolkata247.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: 'h1.entry-title', type: crawler_1.Type.TEXT },
            { name: 'details', selector: '.td-main-content .td-post-content > p', type: crawler_1.Type.TEXT },
            { name: 'img', selector: '.td-main-content .td-post-featured-image  img', type: crawler_1.Type.IMAGE },
        ];
    };
    Kolkata247.prototype.getTestPageUrl = function () {
        return "https://www.kolkata24x7.com/ex-kolkata-police-com-rajiv-kumar-missing-cbi/";
    };
    Kolkata247.prototype.getListConfig = function (stream) {
        switch (stream) {
            case CONST_1.STREAM.HEADLINE: return {
                'url': null,
                'selectors': []
            };
            case CONST_1.STREAM.FIRST_PAGE: return {
                'url': 'https://www.kolkata24x7.com/category/kolkata/',
                'selectors': ['.td-module-thumb > a']
            };
            case CONST_1.STREAM.COUNTRY: return {
                'url': 'https://www.kolkata24x7.com/category/national-news/',
                'selectors': ['.td-module-thumb > a']
            };
            case CONST_1.STREAM.STATE: return {
                'url': 'https://www.kolkata24x7.com/category/west-bengal/',
                'selectors': ['.td-module-thumb > a']
            };
            case CONST_1.STREAM.INTERNATIONAL: return {
                'url': 'https://www.kolkata24x7.com/category/international-news/',
                'selectors': ['.td-module-thumb > a']
            };
            case CONST_1.STREAM.BUSINESS: return {
                'url': null,
                'selectors': []
            };
            case CONST_1.STREAM.SCIENCE: return {
                'url': 'https://www.kolkata24x7.com/category/tech-news/',
                'selectors': ['.td-module-thumb > a']
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
    return Kolkata247;
}(baseconfig_1.BaseConfig));
exports.Kolkata247 = Kolkata247;
//# sourceMappingURL=kolkata247.js.map