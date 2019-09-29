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
var NDTVHindiConfig = /** @class */ (function (_super) {
    __extends(NDTVHindiConfig, _super);
    function NDTVHindiConfig() {
        return _super.call(this, "NDTV") || this;
    }
    NDTVHindiConfig.prototype.getLang = function () {
        return CONST_1.LANG.HINDI;
    };
    NDTVHindiConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: '#newsDescriptionContainer .ins_headline h1', type: crawler_1.Type.TEXT },
            { name: 'img', selector: '#newsDescriptionContainer img.story_image_main', type: crawler_1.Type.IMAGE },
            { name: 'details', selector: '#newsDescriptionContainer .ins_storybody > p', type: crawler_1.Type.TEXT },
        ];
    };
    NDTVHindiConfig.prototype.getLimit = function () {
        return 10;
    };
    NDTVHindiConfig.prototype.getTestPageUrl = function () {
        return " https://khabar.ndtv.com/news/india/ashok-gehlot-said-pm-modi-cannot-mislead-people-by-taking-the-name-of-pakistan-every-time-2101136";
    };
    NDTVHindiConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.COUNTRY, selector: '.new_storylising .nstory_header > a', url: 'https://khabar.ndtv.com/news/india' },
        ];
    };
    return NDTVHindiConfig;
}(baseconfig_1.BaseConfig));
exports.NDTVHindiConfig = NDTVHindiConfig;
//# sourceMappingURL=ndtv_hindi.js.map