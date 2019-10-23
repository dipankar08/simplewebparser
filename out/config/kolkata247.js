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
    Kolkata247.prototype.getRootConfig = function () {
        return {
            'title': 'Kolkata 24X7'
        };
    };
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
    Kolkata247.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.HEADLINE, selector: '.td_module_4 .td-module-thumb > a', url: 'https://www.kolkata24x7.com/', limit: 5 },
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.td-module-thumb > a', url: 'https://www.kolkata24x7.com/', limit: 30 },
            { stream: CONST_1.STREAM.STATE, selector: '.td-module-thumb > a', url: 'https://www.kolkata24x7.com/category/kolkata/' },
            { stream: CONST_1.STREAM.COUNTRY, selector: '.td-module-thumb > a', url: 'https://www.kolkata24x7.com/category/national-news/' },
            { stream: CONST_1.STREAM.STATE, selector: '.td-module-thumb > a', url: 'https://www.kolkata24x7.com/category/west-bengal/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.td-module-thumb > a', url: 'https://www.kolkata24x7.com/category/international-news/' },
            { stream: CONST_1.STREAM.SCIENCE, selector: '.td-module-thumb > a', url: 'https://www.kolkata24x7.com/category/tech-news/' },
        ];
    };
    return Kolkata247;
}(baseconfig_1.BaseConfig));
exports.Kolkata247 = Kolkata247;
var KolkataTimes24 = /** @class */ (function (_super) {
    __extends(KolkataTimes24, _super);
    function KolkataTimes24() {
        return _super.call(this, "") || this;
    }
    KolkataTimes24.prototype.getRootConfig = function () {
        return {
            'title': 'Kolkata Times 24',
            is_active: true
        };
    };
    KolkataTimes24.prototype.getLang = function () {
        return CONST_1.LANG.BENGALI;
    };
    KolkataTimes24.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: 'article header h1', type: crawler_1.Type.TEXT },
            { name: 'img', selector: 'article  .td-post-featured-image img', type: crawler_1.Type.IMAGE },
            { name: 'details', selector: 'article .td-post-content > p', type: crawler_1.Type.TEXT },
        ];
    };
    KolkataTimes24.prototype.getTestPageUrl = function () {
        return "https://kolkatatimes24.com/west-bengal/21026/tmc-counsellor-of-kharagpur-stop-durga-idol-immersion-for-chhat-puja/?relatedposts_hit=1&relatedposts_origin=22890&relatedposts_position=0";
    };
    KolkataTimes24.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.OFF_BEAT, selector: '.td-module-thumb > a', url: 'https://kolkatatimes24.com/category/offbeat/' },
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.td-module-thumb > a', url: 'https://kolkatatimes24.com/category/kolkata/', limit: 5 },
            { stream: CONST_1.STREAM.STATE, selector: '.td-module-thumb > a', url: 'https://kolkatatimes24.com/category/west-bengal/' },
            { stream: CONST_1.STREAM.COUNTRY, selector: '.td-module-thumb > a', url: 'https://kolkatatimes24.com/category/national/' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.td-module-thumb > a', url: 'https://kolkatatimes24.com/category/world/' },
            { stream: CONST_1.STREAM.POLITICS, selector: '.td-module-thumb > a', url: 'https://kolkatatimes24.com/category/politics/' },
            { stream: CONST_1.STREAM.SPORTS, selector: '.td-module-thumb > a', url: 'https://kolkatatimes24.com/category/sports/' },
            { stream: CONST_1.STREAM.BUSINESS, selector: '.td-module-thumb > a', url: 'https://kolkatatimes24.com/category/business-and-economy/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: '.td-module-thumb > a', url: 'https://kolkatatimes24.com/category/technology/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.td-module-thumb > a', url: 'https://kolkatatimes24.com/category/entertainment/' },
        ];
    };
    return KolkataTimes24;
}(baseconfig_1.BaseConfig));
exports.KolkataTimes24 = KolkataTimes24;
//# sourceMappingURL=kolkata247.js.map