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
var TechCrunchConfig = /** @class */ (function (_super) {
    __extends(TechCrunchConfig, _super);
    function TechCrunchConfig() {
        return _super.call(this, "") || this;
    }
    TechCrunchConfig.prototype.getRootConfig = function () {
        return {
            'title': 'Tech Crunch',
            is_active: true,
        };
    };
    TechCrunchConfig.prototype.getLang = function () {
        return CONST_1.LANG.IN_ENGLISH;
    };
    TechCrunchConfig.prototype.getPageParseConfig = function () {
        return [
            { name: 'title', selector: 'article h1', type: crawler_1.Type.TEXT },
            { name: 'img', selector: 'article .article__featured-image-wrapper  img', type: crawler_1.Type.IMAGE },
            { name: 'details', selector: 'article .article-content > p', type: crawler_1.Type.TEXT },
        ];
    };
    TechCrunchConfig.prototype.getTestPageUrl = function () {
        return "https://techcrunch.com/2019/10/17/luna-display-now-supports-older-macs-as-a-secondary-screen/";
    };
    TechCrunchConfig.prototype.getStoryListConfig = function () {
        return [
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: 'a.post-block__title__link', url: 'https://techcrunch.com/apps/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: 'a.post-block__title__link', url: 'https://techcrunch.com/startups/' },
            { stream: CONST_1.STREAM.TECHNOLOGY, selector: 'a.post-block__title__link', url: 'https://techcrunch.com/gadgets/' },
        ];
    };
    return TechCrunchConfig;
}(baseconfig_1.BaseConfig));
exports.TechCrunchConfig = TechCrunchConfig;
//# sourceMappingURL=techcrunch.js.map