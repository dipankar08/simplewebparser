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
var NDTVBanglaConfig = /** @class */ (function (_super) {
    __extends(NDTVBanglaConfig, _super);
    function NDTVBanglaConfig() {
        return _super.call(this, "NDTV") || this;
    }
    NDTVBanglaConfig.prototype.getRootConfig = function () {
        return {
            'title': 'NDTV'
        };
    };
    NDTVBanglaConfig.prototype.getLang = function () {
        return CONST_1.LANG.IN_BENGALI;
    };
    NDTVBanglaConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: '#newsDescriptionContainer .ins_headline h1', type: crawler_1.Type.TEXT },
            { name: 'img', selector: '#newsDescriptionContainer img#story_image_main', type: crawler_1.Type.IMAGE },
            { name: 'details', selector: '#newsDescriptionContainer .ins_storybody > p', type: crawler_1.Type.TEXT },
        ];
    };
    NDTVBanglaConfig.prototype.getLimit = function () {
        return 10;
    };
    NDTVBanglaConfig.prototype.getTestPageUrl = function () {
        return "https://www.ndtv.com/bengali/rajeev-kumar-ex-kolkata-top-cop-fails-to-appear-before-cbi-in-saradha-case-on-saturday-2101135";
    };
    NDTVBanglaConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '#ins_storylist .new_storylising_img > a', url: 'https://www.ndtv.com/bengali/latest' },
        ];
    };
    return NDTVBanglaConfig;
}(baseconfig_1.BaseConfig));
exports.NDTVBanglaConfig = NDTVBanglaConfig;
//# sourceMappingURL=ndtv_bangla.js.map