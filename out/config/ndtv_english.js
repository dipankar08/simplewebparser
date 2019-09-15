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
var NDTVEnglishConfig = /** @class */ (function (_super) {
    __extends(NDTVEnglishConfig, _super);
    function NDTVEnglishConfig() {
        return _super.call(this, "NDTV") || this;
    }
    NDTVEnglishConfig.prototype.getLang = function () {
        return CONST_1.LANG.ENGLISH;
    };
    NDTVEnglishConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: '#newsDescriptionContainer .ins_headline h1', type: crawler_1.Type.TEXT },
            { name: 'img', selector: '#newsDescriptionContainer img#story_image_main', type: crawler_1.Type.IMAGE },
            { name: 'details', selector: '#newsDescriptionContainer .ins_storybody > p', type: crawler_1.Type.TEXT },
        ];
    };
    NDTVEnglishConfig.prototype.getLimit = function () {
        return 10;
    };
    NDTVEnglishConfig.prototype.getTestPageUrl = function () {
        return "https://www.ndtv.com/india-news/blame-game-starts-as-wheels-come-off-indias-auto-sector-foreign-media-2101144";
    };
    NDTVEnglishConfig.prototype.getListConfig = function (stream) {
        switch (stream) {
            case CONST_1.STREAM.HEADLINE: return {
                'url': null,
                'selectors': []
            };
            case CONST_1.STREAM.FIRST_PAGE: return {
                'url': 'https://www.ndtv.com/latest',
                'selectors': ['#ins_storylist .new_storylising_img > a']
            };
            case CONST_1.STREAM.COUNTRY: return {
                'url': 'https://www.ndtv.com/india',
                'selectors': ['#ins_storylist .new_storylising_img > a']
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
    return NDTVEnglishConfig;
}(baseconfig_1.BaseConfig));
exports.NDTVEnglishConfig = NDTVEnglishConfig;
//# sourceMappingURL=ndtv_english.js.map