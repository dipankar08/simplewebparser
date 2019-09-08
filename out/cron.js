"use strict";
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
var cron = require('node-cron');
var fetch = require('node-fetch');
var crawler_1 = require("./crawler");
var LIMIT = 2;
var LANG;
(function (LANG) {
    LANG[LANG["BENGALI"] = 0] = "BENGALI";
    LANG[LANG["ENGLISH"] = 1] = "ENGLISH";
    LANG[LANG["HINDI"] = 2] = "HINDI";
})(LANG || (LANG = {}));
var bartaman = new crawler_1.Crawler([
    { name: 'title', selector: '.head-news h4', type: crawler_1.Type.TEXT },
    { name: 'details', selector: '.head-news .content', type: crawler_1.Type.TEXT },
    { name: 'img', selector: '.head-news .thumbnail img', type: crawler_1.Type.IMAGE },
]);
var anandabazar = new crawler_1.Crawler([
    { name: 'title', selector: '#story_container h1', type: crawler_1.Type.TEXT },
    { name: 'details', selector: '#story_container .articleBody', type: crawler_1.Type.TEXT },
    { name: 'img', selector: '#story_container  img', type: crawler_1.Type.IMAGE },
]);
// -- ZEE NEWS --
var zeenews = new crawler_1.Crawler([
    { name: 'title', selector: '.content h1', type: crawler_1.Type.TEXT },
    { name: 'details', selector: '.content .article', type: crawler_1.Type.TEXT },
    { name: 'img', selector: '.article-image-block img', type: crawler_1.Type.IMAGE },
]);
var zeenews_bengali = {
    root_url: 'https://zeenews.india.com/bengali/',
    a_selector_list: ['.mini-list-story > a'],
    extra: { 'lang': LANG[LANG.BENGALI] },
    limit: LIMIT,
};
var zeenews_hindi = {
    root_url: 'https://zeenews.india.com/hindi/',
    a_selector_list: ['.mini-list-story .mini-con  a'],
    extra: { 'lang': LANG[LANG.HINDI] },
    limit: LIMIT,
};
var zeenews_english = {
    root_url: 'https://zeenews.india.com/',
    a_selector_list: ['.mini-list-story .mini-con  a'],
    extra: { 'lang': LANG[LANG.ENGLISH] },
    limit: LIMIT,
};
// news18
var news18 = new crawler_1.Crawler([
    { name: 'title', selector: '#article h1', type: crawler_1.Type.TEXT },
    { name: 'details', selector: '#article .storypara', type: crawler_1.Type.TEXT },
    { name: 'img', selector: '#article .articleimg img', type: crawler_1.Type.IMAGE },
]);
var news18_cra1 = new crawler_1.Crawler([
    { name: 'title', selector: '.article_box h1', type: crawler_1.Type.TEXT },
    { name: 'details', selector: '.article_box #article_body p', type: crawler_1.Type.TEXT },
    { name: 'img', selector: '.article_box .articleimg img', type: crawler_1.Type.IMAGE },
]);
var news18_bengali = {
    root_url: 'https://bengali.news18.com/',
    a_selector_list: ['.ld-story-rgt li  a'],
    extra: { 'lang': LANG[LANG.BENGALI] },
    limit: LIMIT,
};
var news18_hindi = {
    root_url: 'https://hindi.news18.com/',
    a_selector_list: ['#hp-breaknews > a', '.ld-story-rgt li  a'],
    extra: { 'lang': LANG[LANG.HINDI] },
    limit: LIMIT,
};
var news18_english = {
    root_url: 'https://www.news18.com/',
    a_selector_list: ['.lead-mstory li  a'],
    extra: { 'lang': LANG[LANG.ENGLISH] },
    limit: LIMIT,
};
function save(res) {
    return __awaiter(this, void 0, void 0, function () {
        var body;
        return __generator(this, function (_a) {
            body = { '_payload': res };
            fetch('http://simplestore.dipankar.co.in/api/news/bulk_insert', {
                method: 'post',
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' },
            })
                .then(function (res) { return res.json(); })
                .then(function (json) { return console.log(json); });
            return [2 /*return*/];
        });
    });
}
function execute() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = save;
                    return [4 /*yield*/, zeenews.parseMany(zeenews_bengali)];
                case 1:
                    _a.apply(void 0, [_c.sent()]);
                    _b = save;
                    return [4 /*yield*/, news18_cra1.parseMany(news18_bengali)];
                case 2:
                    _b.apply(void 0, [_c.sent()]);
                    return [2 /*return*/];
            }
        });
    });
}
function start() {
    cron.schedule('*/2 * * * *', function () {
        console.log(Date.now() + " Running a task every two minutes");
        execute();
    });
}
start();
//# sourceMappingURL=cron.js.map