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
var AjjKalConfig = /** @class */ (function (_super) {
    __extends(AjjKalConfig, _super);
    function AjjKalConfig() {
        return _super.call(this, "") || this;
    }
    AjjKalConfig.prototype.getRootConfig = function () {
        return {
            'title': 'AajKal'
        };
    };
    AjjKalConfig.prototype.getLang = function () {
        return CONST_1.LANG.IN_BENGALI;
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
    AjjKalConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.news-tabe .col-md-4 .image-holder > a', url: 'https://aajkaal.in/kolkata' },
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.news-tabe .col-md-4 .image-holder > a', url: 'https://aajkaal.in/state' },
            { stream: CONST_1.STREAM.COUNTRY, selector: '.news-tabe .col-md-4 .image-holder > a', url: 'https://aajkaal.in/national' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.news-tabe .col-md-4 .image-holder > a', url: 'https://aajkaal.in/international' },
            { stream: CONST_1.STREAM.BUSINESS, selector: '.news-tabe .col-md-4 .image-holder > a', url: 'https://aajkaal.in/business' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.news-tabe .col-md-4 .image-holder > a', url: 'https://aajkaal.in/entertainment' },
            { stream: CONST_1.STREAM.SPORTS, selector: '.news-tabe .col-md-4 .image-holder > a', url: 'https://aajkaal.in/sports' },
            { stream: CONST_1.STREAM.LIFESTYLE, selector: '.news-tabe .col-md-4 .image-holder > a', url: 'https://aajkaal.in/lifestyle' },
            { stream: CONST_1.STREAM.OFF_BEAT, selector: '.news-tabe .col-md-4 .image-holder > a', url: 'https://aajkaal.in/offbeat' },
            { stream: CONST_1.STREAM.TOUR, selector: '.news-tabe .col-md-4 .image-holder > a', url: 'https://aajkaal.in/tour' },
            { stream: CONST_1.STREAM.SCIENCE, selector: '.news-tabe .col-md-4 .image-holder > a', url: 'https://aajkaal.in/sciencetechnology' },
            { stream: CONST_1.STREAM.EDUCATION, selector: '.news-tabe .col-md-4 .image-holder > a', url: 'https://aajkaal.in/helth' },
        ];
    };
    return AjjKalConfig;
}(baseconfig_1.BaseConfig));
exports.AjjKalConfig = AjjKalConfig;
//# sourceMappingURL=ajjkal.js.map