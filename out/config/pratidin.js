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
var PratidinConfig = /** @class */ (function (_super) {
    __extends(PratidinConfig, _super);
    function PratidinConfig() {
        return _super.call(this, "Pratidin") || this;
    }
    PratidinConfig.prototype.getRootConfig = function () {
        return {
            'title': 'Pratidin'
        };
    };
    PratidinConfig.prototype.getLang = function () {
        return CONST_1.LANG.IN_BENGALI;
    };
    PratidinConfig.prototype.getLimit = function () {
        return 10;
    };
    PratidinConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: '.container .hot_news h1', type: crawler_1.Type.TEXT },
            { name: 'details', selector: '.container .news_content_area > p', type: crawler_1.Type.TEXT },
            { name: 'img', selector: '.container img.hot_news_image', type: crawler_1.Type.IMAGE },
        ];
    };
    PratidinConfig.prototype.getTestPageUrl = function () {
        return "https://www.sangbadpratidin.in/world/pakistan-turns-aggressive-constructs-airfield-in-pok/";
    };
    PratidinConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.HEADLINE, selector: '.carousel  .scale_img_block > a', url: 'https://www.sangbadpratidin.in/', limit: 15 },
            { stream: CONST_1.STREAM.HEADLINE, selector: '.daily-news  .scale_img_block > a', url: 'https://www.sangbadpratidin.in/', limit: 10 },
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.tatka_update_list  .scale_img a', url: 'https://www.sangbadpratidin.in/', limit: 10 },
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: 'ul.more_news_list li > a', url: 'https://www.sangbadpratidin.in/latest-update/' },
        ];
    };
    return PratidinConfig;
}(baseconfig_1.BaseConfig));
exports.PratidinConfig = PratidinConfig;
//# sourceMappingURL=pratidin.js.map