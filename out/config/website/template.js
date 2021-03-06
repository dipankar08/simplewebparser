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
var AnandabazarConfig = /** @class */ (function (_super) {
    __extends(AnandabazarConfig, _super);
    function AnandabazarConfig() {
        return _super.call(this, "") || this;
    }
    AnandabazarConfig.prototype.getLang = function () {
        return CONST_1.LANG.IN_BENGALI;
    };
    AnandabazarConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: '#story_container h1', type: crawler_1.Type.TEXT },
            { name: 'img', selector: '#story_container  img', type: crawler_1.Type.IMAGE },
            { name: 'details', selector: '#story_container .articleBody', type: crawler_1.Type.TEXT },
        ];
    };
    AnandabazarConfig.prototype.getTestPageUrl = function () {
        return "https://www.anandabazar.com/state/mamata-banerjee-says-that-she-will-accept-pay-commission-recommendation-dgtl-1.1045083";
    };
    AnandabazarConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: 'ul.more_news_list li > a', url: 'https://www.sangbadpratidin.in/latest-update/' },
        ];
    };
    AnandabazarConfig.prototype.getRootConfig = function () {
        //>>>>>>>  FILL IT HERE <<<<<<<<<
        return {
            'title': ''
        };
    };
    return AnandabazarConfig;
}(baseconfig_1.BaseConfig));
exports.AnandabazarConfig = AnandabazarConfig;
//# sourceMappingURL=template.js.map