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
var DainikStatesmanConfig = /** @class */ (function (_super) {
    __extends(DainikStatesmanConfig, _super);
    function DainikStatesmanConfig() {
        return _super.call(this, "") || this;
    }
    DainikStatesmanConfig.prototype.getRootConfig = function () {
        return {
            'title': 'Statesman Bengali'
        };
    };
    DainikStatesmanConfig.prototype.getLang = function () {
        return CONST_1.LANG.IN_BENGALI;
    };
    DainikStatesmanConfig.prototype.getLimit = function () {
        return 3;
    };
    DainikStatesmanConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: '.storybox h1', type: crawler_1.Type.TEXT },
            { name: 'img', selector: '.storybox .imgholder  img', type: crawler_1.Type.IMAGE },
            { name: 'details', selector: '.storybox .content-body > p', type: crawler_1.Type.TEXT },
        ];
    };
    DainikStatesmanConfig.prototype.getTestPageUrl = function () {
        return "https://www.dainikstatesmannews.com/india/babul-assures-ju-attackers-mother-of-no-harm/8988";
    };
    DainikStatesmanConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.COUNTRY, selector: '.newslistbx h3 > a', url: 'https://www.dainikstatesmannews.com/india' },
            { stream: CONST_1.STREAM.INTERNATIONAL, selector: '.newslistbx h3 > a', url: 'https://www.dainikstatesmannews.com/world' },
            { stream: CONST_1.STREAM.FIRST_PAGE, selector: '.newslistbx h3 > a', url: 'https://www.dainikstatesmannews.com/bengal' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.newslistbx h3 > a', url: 'https://www.dainikstatesmannews.com/binodan' },
            { stream: CONST_1.STREAM.SPORTS, selector: '.newslistbx h3 > a', url: 'https://www.dainikstatesmannews.com/sports' },
            { stream: CONST_1.STREAM.EDITORIAL, selector: '.newslistbx h3 > a', url: 'https://www.dainikstatesmannews.com/editorial' },
            { stream: CONST_1.STREAM.FOOD, selector: '.newslistbx h3 > a', url: 'https://www.dainikstatesmannews.com/food' },
            { stream: CONST_1.STREAM.OTHER, selector: '.newslistbx h3 > a', url: 'https://www.dainikstatesmannews.com/bichitra' },
        ];
    };
    return DainikStatesmanConfig;
}(baseconfig_1.BaseConfig));
exports.DainikStatesmanConfig = DainikStatesmanConfig;
//# sourceMappingURL=dainikstatesman.js.map