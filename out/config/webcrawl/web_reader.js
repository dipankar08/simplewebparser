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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var network_1 = require("./network");
var request = require('request-promise');
var BaseWebReader = /** @class */ (function () {
    function BaseWebReader() {
    }
    return BaseWebReader;
}());
exports.BaseWebReader = BaseWebReader;
var globalBlackListUrl = ['/livetv/', '/photogallery/', '/videos/', '/video/', '/videos/', '/photos/', '/photo/'];
var DefaultWebReader = /** @class */ (function (_super) {
    __extends(DefaultWebReader, _super);
    function DefaultWebReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultWebReader.prototype.getWebConfig = function () {
        return {
            ignoreUrlRegex: globalBlackListUrl,
            list_selector: 'body a',
            storyParseConfig: [
                { name: 'title', selector: 'body h1', type: network_1.WebElementType.TEXT },
                { name: 'img', selector: 'body img', type: network_1.WebElementType.IMAGE },
                { name: 'details', selector: 'body p', type: network_1.WebElementType.TEXT }
            ]
        };
    };
    return DefaultWebReader;
}(BaseWebReader));
exports.DefaultWebReader = DefaultWebReader;
var BartamanWebReader = /** @class */ (function (_super) {
    __extends(BartamanWebReader, _super);
    function BartamanWebReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BartamanWebReader.prototype.getWebConfig = function () {
        return {
            ignoreUrlRegex: globalBlackListUrl,
            list_selector: '.firstSection a.bisad',
            networkFetcher: this.getDataFromUrl,
            storyParseConfig: [
                { name: 'title', selector: '.head-news h4', type: network_1.WebElementType.TEXT },
                { name: 'img', selector: '.head-news .thumbnail  img', type: network_1.WebElementType.IMAGE },
                { name: 'details', selector: '.head-news .content', type: network_1.WebElementType.TEXT },
            ]
        };
    };
    BartamanWebReader.prototype.getDataFromUrl = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request({ method: 'GET',
                            uri: url,
                            gzip: true
                        })];
                    case 1:
                        resp = _a.sent();
                        return [2 /*return*/, resp];
                }
            });
        });
    };
    return BartamanWebReader;
}(BaseWebReader));
exports.BartamanWebReader = BartamanWebReader;
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
var IndiaTimesWebReader = /** @class */ (function (_super) {
    __extends(IndiaTimesWebReader, _super);
    function IndiaTimesWebReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndiaTimesWebReader.prototype.getWebConfig = function () {
        return {
            ignoreUrlRegex: globalBlackListUrl,
            list_selector: '.artlisting li .imgsec > a',
            storyParseConfig: [
                { name: 'title', selector: '.leftmain h1', type: network_1.WebElementType.TEXT },
                { name: 'img', selector: '.leftmain .article  .articleImage img', type: network_1.WebElementType.IMAGE },
                { name: 'details', selector: '.leftmain arttextxml', type: network_1.WebElementType.TEXT },
            ]
        };
    };
    return IndiaTimesWebReader;
}(BaseWebReader));
exports.IndiaTimesWebReader = IndiaTimesWebReader;
//# sourceMappingURL=web_reader.js.map