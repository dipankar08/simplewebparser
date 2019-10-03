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
//# sourceMappingURL=kolkata247.js.map