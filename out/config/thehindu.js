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
var TheHinduConfig = /** @class */ (function (_super) {
    __extends(TheHinduConfig, _super);
    function TheHinduConfig() {
        var _this = _super.call(this, "TheHindu") || this;
        _this.commonSelector = [
            '.main .story1-3x100-container > a',
            '.main .spc33x3-1story-container > a',
            '.main .story-card-33 > a'
        ];
        return _this;
    }
    TheHinduConfig.prototype.getRootConfig = function () {
        return {
            'title': 'The Hindu'
        };
    };
    TheHinduConfig.prototype.getLang = function () {
        return CONST_1.LANG.ENGLISH;
    };
    TheHinduConfig.prototype.getLimit = function () {
        return 4;
    };
    TheHinduConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: '.article h1.title', type: crawler_1.Type.TEXT },
            { name: 'details', selector: '.article-cont p', type: crawler_1.Type.TEXT },
            { name: 'img', selector: '.article picture > source', type: crawler_1.Type.IMAGE, attr: 'srcset' },
        ];
    };
    TheHinduConfig.prototype.getTestPageUrl = function () {
        return "https://www.thehindu.com/news/cities/mumbai/choose-between-nationalistic-and-family-oriented-parties-says-amit-shah/article29481003.ece?homepage=true";
    };
    TheHinduConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: '.main .story1-3x100-container > a', url: 'https://www.thehindu.com/sci-tech/technology/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: '.main .spc33x3-1story-container > a', url: 'https://www.thehindu.com/sci-tech/technology/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: '.main .story-card-33 > a', url: 'https://www.thehindu.com/sci-tech/technology/' },
            { stream: CONST_1.STREAM.SCIENCE, selector: '.main .story1-3x100-container > a', url: 'https://www.thehindu.com/sci-tech/science/' },
            { stream: CONST_1.STREAM.SCIENCE, selector: '.main .spc33x3-1story-container > a', url: 'https://www.thehindu.com/sci-tech/science/' },
            { stream: CONST_1.STREAM.SCIENCE, selector: '.main .story-card-33 > a', url: 'https://www.thehindu.com/sci-tech/science/' },
            { stream: CONST_1.STREAM.ENTERTAINMENT, selector: '.slick-initialized .slick-slide > a', url: 'https://www.thehindu.com/entertainment/' },
            { stream: CONST_1.STREAM.BUSINESS, selector: '.slick-initialized .slick-slide > a', url: 'https://www.thehindu.com/business/' },
            { stream: CONST_1.STREAM.SPORTS, selector: '.slick-initialized .slick-slide > a', url: 'https://www.thehindu.com/sport/' },
            { stream: CONST_1.STREAM.HEADLINE, selector: '.slick-initialized .slick-slide > a', url: 'https://www.thehindu.com/news/' },
        ];
    };
    return TheHinduConfig;
}(baseconfig_1.BaseConfig));
exports.TheHinduConfig = TheHinduConfig;
//# sourceMappingURL=thehindu.js.map