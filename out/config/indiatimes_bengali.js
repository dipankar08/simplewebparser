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
var IndiaTimesBengaliConfig = /** @class */ (function (_super) {
    __extends(IndiaTimesBengaliConfig, _super);
    function IndiaTimesBengaliConfig() {
        return _super.call(this, "") || this;
    }
    IndiaTimesBengaliConfig.prototype.getLang = function () {
        return CONST_1.LANG.BENGALI;
    };
    IndiaTimesBengaliConfig.prototype.getRootConfig = function () {
        return {
            ignoreUrlRegex: ['videoshow'],
            title: "India Times Bengali"
        };
    };
    IndiaTimesBengaliConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: '.leftmain h1', type: crawler_1.Type.TEXT },
            { name: 'img', selector: '.leftmain .article  .articleImage img', type: crawler_1.Type.IMAGE },
            { name: 'details', selector: '.leftmain arttextxml', type: crawler_1.Type.TEXT },
        ];
    };
    IndiaTimesBengaliConfig.prototype.getTestPageUrl = function () {
        return "https://eisamay.indiatimes.com/west-bengal-news/kolkata-news/massive-fire-breaks-out-in-a-shopping-mall-at-kolkatas-salt-lake-baisakhi-more/articleshow/71423746.cms";
    };
    IndiaTimesBengaliConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.other_main_news1 li> a', url: 'https://eisamay.indiatimes.com/' },
            { stream: CONST_1.STREAM.STATE, selector: '.artlisting li .imgsec > a', url: 'https://eisamay.indiatimes.com/west-bengal-news/kolkata-news/articlelist/15991773.cms' },
            { stream: CONST_1.STREAM.COUNTRY, selector: '.artlisting li .imgsec > a', url: 'https://eisamay.indiatimes.com/nation/articlelist/15819599.cms' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.artlisting li .imgsec > a', url: 'https://eisamay.indiatimes.com/international/articlelist/15819594.cms' },
            { stream: CONST_1.STREAM.BUSINESS, selector: '.artlisting li .imgsec > a', url: 'https://eisamay.indiatimes.com/business/articlelist/15819574.cms' },
            { stream: CONST_1.STREAM.COUNTRY, selector: '.artlisting li .imgsec > a', url: 'https://eisamay.indiatimes.com/nation/articlelist/15819599.cms' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.artlisting li .imgsec > a', url: 'https://eisamay.indiatimes.com/entertainment/cinema/articlelist/15935855.cms' },
        ];
    };
    return IndiaTimesBengaliConfig;
}(baseconfig_1.BaseConfig));
exports.IndiaTimesBengaliConfig = IndiaTimesBengaliConfig;
//# sourceMappingURL=indiatimes_bengali.js.map