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
var BanglarPranConfig = /** @class */ (function (_super) {
    __extends(BanglarPranConfig, _super);
    function BanglarPranConfig() {
        return _super.call(this, "") || this;
    }
    BanglarPranConfig.prototype.getRootConfig = function () {
        return {
            'title': 'Banglar Pran'
        };
    };
    BanglarPranConfig.prototype.getLang = function () {
        return CONST_1.LANG.BENGALI;
    };
    BanglarPranConfig.prototype.getLimit = function () {
        return 4;
    };
    BanglarPranConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: 'article header h1', type: crawler_1.Type.TEXT },
            { name: 'img', selector: 'article  .td-post-featured-image img', type: crawler_1.Type.IMAGE },
            { name: 'details', selector: 'article .td-post-content > p', type: crawler_1.Type.TEXT },
        ];
    };
    BanglarPranConfig.prototype.getTestPageUrl = function () {
        return "https://www.banglarpran.com/archives/54540";
    };
    BanglarPranConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.VIRAL, selector: '.td-main-content .td-module-thumb > a', url: 'https://www.banglarpran.com/archives/category/different-news' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.td-main-content .td-module-thumb > a', url: 'https://www.banglarpran.com/archives/category/entertrainment' },
            { stream: CONST_1.STREAM.HEALTH, selector: '.td-main-content .td-module-thumb > a', url: 'https://www.banglarpran.com/archives/category/health' },
            { stream: CONST_1.STREAM.DOOARS, selector: '.td-main-content .td-module-thumb > a', url: 'hhttps://www.banglarpran.com/archives/category/dooars' },
            { stream: CONST_1.STREAM.STATE, selector: '.td-main-content .td-module-thumb > a', url: 'https://www.banglarpran.com/archives/category/state' },
            { stream: CONST_1.STREAM.POLITICS, selector: '.td-main-content .td-module-thumb > a', url: 'https://www.banglarpran.com/archives/category/politics' },
            { stream: CONST_1.STREAM.COUNTRY, selector: '.td-main-content .td-module-thumb > a', url: 'https://www.banglarpran.com/archives/category/india' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.td-main-content .td-module-thumb > a', url: 'https://www.banglarpran.com/archives/category/internation' },
            { stream: CONST_1.STREAM.SPORTS, selector: '.td-main-content .td-module-thumb > a', url: 'https://www.banglarpran.com/archives/category/sports' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: '.td-main-content .td-module-thumb > a', url: 'https://www.banglarpran.com/archives/category/tech-news' },
        ];
    };
    return BanglarPranConfig;
}(baseconfig_1.BaseConfig));
exports.BanglarPranConfig = BanglarPranConfig;
//# sourceMappingURL=banglarpran.js.map