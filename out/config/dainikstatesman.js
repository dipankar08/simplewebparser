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
var DainikStatesmanConfig = /** @class */ (function (_super) {
    __extends(DainikStatesmanConfig, _super);
    function DainikStatesmanConfig() {
        return _super.call(this, "") || this;
    }
    DainikStatesmanConfig.prototype.getLang = function () {
        return CONST_1.LANG.BENGALI;
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
    DainikStatesmanConfig.prototype.getListConfig = function (stream) {
        switch (stream) {
            case CONST_1.STREAM.COUNTRY: return {
                'url': 'https://www.dainikstatesmannews.com/india',
                'selectors': ['.newslistbx h3 > a']
            };
            case CONST_1.STREAM.INTERNATIONAL: return {
                'url': 'https://www.dainikstatesmannews.com/world',
                'selectors': ['.newslistbx h3 > a']
            };
            case CONST_1.STREAM.STATE: return {
                'url': 'https://www.dainikstatesmannews.com/bengal',
                'selectors': ['.newslistbx h3 > a']
            };
            case CONST_1.STREAM.ENTERTAINMENT: return {
                'url': 'https://www.dainikstatesmannews.com/binodan',
                'selectors': ['.newslistbx h3 > a']
            };
            case CONST_1.STREAM.SPORTS: return {
                'url': 'https://www.dainikstatesmannews.com/sports',
                'selectors': ['.newslistbx h3 > a']
            };
            case CONST_1.STREAM.EDITORIAL: return {
                'url': 'https://www.dainikstatesmannews.com/editorial',
                'selectors': ['.newslistbx h3 > a']
            };
            case CONST_1.STREAM.FOOD: return {
                'url': 'https://www.dainikstatesmannews.com/food',
                'selectors': ['.newslistbx h3 > a']
            };
            case CONST_1.STREAM.OTHER: return {
                'url': 'https://www.dainikstatesmannews.com/bichitra',
                'selectors': ['.newslistbx h3 > a']
            };
        }
    };
    return DainikStatesmanConfig;
}(baseconfig_1.BaseConfig));
exports.DainikStatesmanConfig = DainikStatesmanConfig;
//# sourceMappingURL=dainikstatesman.js.map