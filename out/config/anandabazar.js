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
        return CONST_1.LANG.IN_BENGALI;
    };
    AnandabazarConfig.prototype.getRootConfig = function () {
        return {
            ignoreUrlRegex: ['/photogallery/'],
            ignoreLineRegex: ['পড়ুন:'],
            title: "Anandabazar",
            is_active: true,
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
    AnandabazarConfig.prototype.getStoryListConfig = function () {
        return [
            { url: 'https://www.anandabazar.com/', selector: '.container .abp-homepage-main-story-wrap-new a', stream: CONST_1.STREAM.HEADLINE },
            { url: 'https://www.anandabazar.com/', selector: '.abp-homepage-lead-story-wrap a', stream: CONST_1.STREAM.HEADLINE },
            { url: 'https://www.anandabazar.com/', selector: '.abp-homepage-editor-story-wrap a', stream: CONST_1.STREAM.FIRST_PAGE },
            { url: 'https://www.anandabazar.com/state', selector: '.sectionstoryinside-sub > div > a', stream: CONST_1.STREAM.STATE },
            { url: 'https://www.anandabazar.com/international', selector: '.sectionstoryinside-sub > div > a', stream: CONST_1.STREAM.INTERNATIONAL },
            { url: 'https://www.anandabazar.com/business', selector: '.sectionstoryinside-sub > div > a', stream: CONST_1.STREAM.BUSINESS },
            { url: 'https://www.anandabazar.com/others/science', selector: '.sectionstoryinside-sub > div > a', stream: CONST_1.STREAM.SCIENCE },
            { url: 'https://www.anandabazar.com/entertainment', selector: '.sectionstoryinside-sub > div > a', stream: CONST_1.STREAM.ENTERTAINMENT },
            { url: 'https://www.anandabazar.com/topic/short-story', selector: '.row .article-image > a', stream: CONST_1.STREAM.SHORT_STORY },
            { url: 'https://www.anandabazar.com/travel', selector: '.carousel-inner .item a', stream: CONST_1.STREAM.TRAVEL },
        ];
    };
    return AnandabazarConfig;
}(baseconfig_1.BaseConfig));
exports.AnandabazarConfig = AnandabazarConfig;
//# sourceMappingURL=anandabazar.js.map