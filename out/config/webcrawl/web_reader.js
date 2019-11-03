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
var network_1 = require("./network");
var BaseWebReader = /** @class */ (function () {
    function BaseWebReader() {
    }
    return BaseWebReader;
}());
exports.BaseWebReader = BaseWebReader;
var globalBlackListUrl = ['/livetv/', '/photogallery/', '/videos/', '/video/'];
var WordPressWebReader = /** @class */ (function (_super) {
    __extends(WordPressWebReader, _super);
    function WordPressWebReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WordPressWebReader.prototype.getWebConfig = function () {
        return {
            ignoreUrlRegex: globalBlackListUrl,
            list_selector: '.td-main-content .td-module-thumb > a',
            storyParseConfig: [
                { name: 'title', selector: 'article header h1', type: network_1.WebElementType.TEXT },
                { name: 'img', selector: 'article  .td-post-featured-image img', type: network_1.WebElementType.IMAGE },
                { name: 'details', selector: 'article .td-post-content > p', type: network_1.WebElementType.TEXT }
            ]
        };
    };
    return WordPressWebReader;
}(BaseWebReader));
exports.WordPressWebReader = WordPressWebReader;
var ArticleWebReader = /** @class */ (function (_super) {
    __extends(ArticleWebReader, _super);
    function ArticleWebReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArticleWebReader.prototype.getWebConfig = function () {
        return {
            ignoreUrlRegex: globalBlackListUrl,
            list_selector: 'article h2 a',
            storyParseConfig: [
                { name: 'title', selector: 'article h1', type: network_1.WebElementType.TEXT },
                { name: 'img', selector: 'article img', type: network_1.WebElementType.IMAGE },
                { name: 'details', selector: 'article p ', type: network_1.WebElementType.TEXT },
            ]
        };
    };
    return ArticleWebReader;
}(BaseWebReader));
exports.ArticleWebReader = ArticleWebReader;
var News18WebReader = /** @class */ (function (_super) {
    __extends(News18WebReader, _super);
    function News18WebReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    News18WebReader.prototype.getWebConfig = function () {
        return {
            ignoreUrlRegex: globalBlackListUrl,
            list_selector: '.nwslist-withbrdr li a',
            storyParseConfig: [
                { name: 'title', selector: '.article_box h1', type: network_1.WebElementType.TEXT },
                { name: 'details', selector: '.article_box #article_body p', type: network_1.WebElementType.TEXT },
                { name: 'img', selector: '.article_box .articleimg img', type: network_1.WebElementType.IMAGE },
            ]
        };
    };
    return News18WebReader;
}(BaseWebReader));
exports.News18WebReader = News18WebReader;
var OneIndiaWebReader = /** @class */ (function (_super) {
    __extends(OneIndiaWebReader, _super);
    function OneIndiaWebReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OneIndiaWebReader.prototype.getWebConfig = function () {
        return {
            ignoreUrlRegex: globalBlackListUrl,
            list_selector: 'article .article-img a',
            storyParseConfig: [
                { name: 'title', selector: 'article h1', type: network_1.WebElementType.TEXT },
                { name: 'details', selector: 'article .oi-article-lt > p', type: network_1.WebElementType.TEXT },
                { name: 'img', selector: 'article figure  img', type: network_1.WebElementType.IMAGE },
            ]
        };
    };
    return OneIndiaWebReader;
}(BaseWebReader));
exports.OneIndiaWebReader = OneIndiaWebReader;
//# sourceMappingURL=web_reader.js.map