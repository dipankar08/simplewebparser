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
var AnandabazarConfig = /** @class */ (function (_super) {
    __extends(AnandabazarConfig, _super);
    function AnandabazarConfig() {
        return _super.call(this, "anandabazar") || this;
    }
    AnandabazarConfig.prototype.getLang = function () {
        return CONST_1.LANG.BENGALI;
    };
    AnandabazarConfig.prototype.getRootConfig = function () {
        return {
            ignoreUrlRegex: ['/photogallery/'],
            ignoreLineRegex: ['পড়ুন:']
        };
    };
    AnandabazarConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: '#story_container h1', type: crawler_1.Type.TEXT },
            { name: 'details', selector: '#story_container .articleBody', type: crawler_1.Type.TEXT },
            { name: 'img', selector: '#story_container  img', type: crawler_1.Type.IMAGE },
        ];
    };
    AnandabazarConfig.prototype.getTestPageUrl = function () {
        return "https://www.anandabazar.com/state/cbi-vs-rajeev-kumar-cbi-continues-search-operation-to-locate-rajeev-kumar-dgtl-1.1049774";
    };
    AnandabazarConfig.prototype.getListConfig = function (stream) {
        switch (stream) {
            case CONST_1.STREAM.HEADLINE: return {
                'url': 'https://www.anandabazar.com/',
                'selectors': ['.abp-homepage-lead-story-wrap a']
            };
            case CONST_1.STREAM.FIRST_PAGE: return {
                'url': null,
                'selectors': []
            };
            case CONST_1.STREAM.COUNTRY: return {
                'url': null,
                'selectors': ['.sectionstoryinside-sub >div>a']
            };
            case CONST_1.STREAM.STATE: return {
                'url': 'https://www.anandabazar.com/state',
                'selectors': ['.sectionstoryinside-sub >div>a']
            };
            case CONST_1.STREAM.INTERNATIONAL: return {
                'url': 'https://www.anandabazar.com/international',
                'selectors': ['.sectionstoryinside-sub >div>a']
            };
            case CONST_1.STREAM.BUSINESS: return {
                'url': 'https://www.anandabazar.com/business',
                'selectors': ['.sectionstoryinside-sub >div>a']
            };
            case CONST_1.STREAM.SCIENCE: return {
                'url': 'https://www.anandabazar.com/others/science',
                'selectors': ['.sectionstoryinside-sub >div>a']
            };
            case CONST_1.STREAM.ENTERTAINMENT: return {
                'url': 'https://www.anandabazar.com/entertainment',
                'selectors': ['.sectionstoryinside-sub >div>a']
            };
            case CONST_1.STREAM.MOVIE: return {
                'url': null,
                'selectors': ['.sectionstoryinside-sub >div>a']
            };
            case CONST_1.STREAM.LIFESTYLE: return {
                'url': 'https://www.anandabazar.com/others/science',
                'selectors': ['.sectionstoryinside-sub >div>a']
            };
            case CONST_1.STREAM.SHORT_STORY: return {
                'url': 'https://www.anandabazar.com/topic/short-story',
                'selectors': ['.row .article-image > a']
            };
            case CONST_1.STREAM.TRAVEL: return {
                'url': 'https://www.anandabazar.com/travel',
                'selectors': ['.carousel-inner .item a']
            };
            case CONST_1.STREAM.NONE: return {
                'url': '',
                'selectors': []
            };
        }
    };
    return AnandabazarConfig;
}(baseconfig_1.BaseConfig));
exports.AnandabazarConfig = AnandabazarConfig;
//# sourceMappingURL=anandabazar.js.map