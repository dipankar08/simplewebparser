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
    BbcBengaliConfig.prototype.getRootConfig = function () {
        return {
            'title': 'BCC Bangla'
        };
    };
    BbcBengaliConfig.prototype.getLang = function () {
        return CONST_1.LANG.IN_BENGALI;
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
    BbcBengaliConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.eagle .eagle-item > a', url: 'https://www.bbc.com/bengali/news' },
        ];
    };
    return BbcBengaliConfig;
}(baseconfig_1.BaseConfig));
exports.BbcBengaliConfig = BbcBengaliConfig;
//# sourceMappingURL=bbc_bengali.js.map