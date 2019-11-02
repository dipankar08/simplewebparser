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
var crawler_1 = require("../../crawler");
var CONST_1 = require("../CONST");
var NilkonthoConfig = /** @class */ (function (_super) {
    __extends(NilkonthoConfig, _super);
    function NilkonthoConfig() {
        return _super.call(this, "") || this;
    }
    NilkonthoConfig.prototype.getRootConfig = function () {
        return {
            'title': 'NilKontho',
            is_active: true,
        };
    };
    NilkonthoConfig.prototype.getLang = function () {
        return CONST_1.LANG.IN_BENGALI;
    };
    NilkonthoConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: 'article .post-inner h1', type: crawler_1.Type.TEXT },
            { name: 'img', selector: 'article .single-post-thumb img', type: crawler_1.Type.IMAGE },
            { name: 'details', selector: 'article .post-inner .entry > p ', type: crawler_1.Type.TEXT },
        ];
    };
    NilkonthoConfig.prototype.getTestPageUrl = function () {
        return "https://www.nilkantho.in/palaniappan-chidambaram-10/";
    };
    NilkonthoConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.post-listing article h2 > a', url: 'https://www.nilkantho.in/category/news/kolkata/' },
            { stream: CONST_1.STREAM.STATE, selector: '.post-listing article h2 > a', url: 'https://www.nilkantho.in/category/news/state/' },
            { stream: CONST_1.STREAM.COUNTRY, selector: '.post-listing article h2 > a', url: 'https://www.nilkantho.in/category/news/national/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.post-listing article h2 > a', url: 'https://www.nilkantho.in/category/news/world/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.post-listing article h2 > a', url: 'https://www.nilkantho.in/category/news/entertainment/' },
            { stream: CONST_1.STREAM.SPORTS, selector: '.post-listing article h2 > a', url: 'https://www.nilkantho.in/category/news/sports/' },
            { stream: CONST_1.STREAM.BUSINESS, selector: '.post-listing article h2 > a', url: 'https://www.nilkantho.in/category/news/business/' },
            { stream: CONST_1.STREAM.SCIENCE, selector: '.post-listing article h2 > a', url: 'https://www.nilkantho.in/category/news/scitech/' },
            { stream: CONST_1.STREAM.LIFESTYLE, selector: '.post-listing article h2 > a', url: 'https://www.nilkantho.in/category/lifestyle/' },
            { stream: CONST_1.STREAM.LIFESTYLE, selector: '.post-listing article h2 > a', url: 'https://www.nilkantho.in/category/health' },
        ];
    };
    return NilkonthoConfig;
}(baseconfig_1.BaseConfig));
exports.NilkonthoConfig = NilkonthoConfig;
//# sourceMappingURL=nilkontho.js.map