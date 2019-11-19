"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SummaryManager_1 = require("./summary/SummaryManager");
var dlog_1 = require("./utils/dlog");
var analytics_1 = require("../analytics");
var config = require('config');
exports.TELEMETRY_APP_NAME = "crawler2";
exports.TELEMETRY_NETWORK_ERROR = "TELEMETRY_NETWORK_ERROR";
exports.TELEMETRY_RSS_LINK_BROKEN = "TELEMETRY_RSS_LINK_BROKEN";
exports.TELEMETRY_RSS_IMAGE_NOT_FOUND = "TELEMETRY_RSS_IMAGE_NOT_FOUND";
exports.TELEMETRY_RSS_LINK_HAS_EMPTY_DATA = "TELEMETRY_RSS_LINK_HAS_EMPTY_DATA";
exports.TELEMETRY_MISSING_SUMMARY = "TELEMETRY_MISSING_SUMMARY";
exports.TELEMETRY_HTML_ROOT_LINK_HAS_NO_LISTING = "TELEMETRY_HTML_ROOT_LINK_HAS_NO_LISTING";
exports.TELEMETRY_HTML_EXCEPTION_WHILE_FETCHING_STORY = "TELEMETRY_HTML_EXCEPTION_WHILE_FETCHING_STORY";
exports.TELEMETRY_DB_IGNORE_INVALID_DATA = "TELEMETRY_DB_IGNORE_INVALID_DATA";
exports.TELEMETRY_DB_ERROR_SAVING = "TELEMETRY_DB_ERROR_SAVING";
exports.TELEMETRY_CRAWLER_EMPTY_DATA = "TELEMETRY_CRAWLER_EMPTY_DATA";
exports.TELEMETRY_CRAWLER_EXCEPTION_FOR_PUBLISHER = "TELEMETRY_CRAWLER_EXCEPTION_FOR_PUBLISHER";
exports.LIMIT = 10;
var LANG;
(function (LANG) {
    LANG[LANG["IN_ENGLISH"] = 0] = "IN_ENGLISH";
    LANG[LANG["IN_HINDI"] = 1] = "IN_HINDI";
    LANG[LANG["IN_BENGALI"] = 2] = "IN_BENGALI";
    LANG[LANG["IN_ASSAMESE"] = 3] = "IN_ASSAMESE";
    LANG[LANG["IN_ORIYA"] = 4] = "IN_ORIYA";
    LANG[LANG["IN_MARATHI"] = 5] = "IN_MARATHI";
    LANG[LANG["IN_GUJARATI"] = 6] = "IN_GUJARATI";
    LANG[LANG["IN_TAMIL"] = 7] = "IN_TAMIL";
    LANG[LANG["IN_TELUGU"] = 8] = "IN_TELUGU";
    LANG[LANG["IN_MALAYALAM"] = 9] = "IN_MALAYALAM";
    LANG[LANG["BD_BENGALI"] = 10] = "BD_BENGALI";
    LANG[LANG["BD_ENGLISH"] = 11] = "BD_ENGLISH";
})(LANG = exports.LANG || (exports.LANG = {}));
var CATEGORIES;
(function (CATEGORIES) {
    CATEGORIES[CATEGORIES["NEWS"] = 0] = "NEWS";
    CATEGORIES[CATEGORIES["VIRAL"] = 1] = "VIRAL";
    CATEGORIES[CATEGORIES["VIDEO"] = 2] = "VIDEO";
})(CATEGORIES = exports.CATEGORIES || (exports.CATEGORIES = {}));
var STREAM;
(function (STREAM) {
    STREAM[STREAM["NONE"] = 0] = "NONE";
    // HEADLINE, // USE FIRSTPAGE
    STREAM[STREAM["FIRST_PAGE"] = 1] = "FIRST_PAGE";
    // STATE, // USER FIRSTPAGE
    STREAM[STREAM["COUNTRY"] = 2] = "COUNTRY";
    STREAM[STREAM["INTERNATIONAL"] = 3] = "INTERNATIONAL";
    STREAM[STREAM["BUSINESS"] = 4] = "BUSINESS";
    STREAM[STREAM["SCIENCE"] = 5] = "SCIENCE";
    STREAM[STREAM["ENTERTAINMENT"] = 6] = "ENTERTAINMENT";
    STREAM[STREAM["MOVIE"] = 7] = "MOVIE";
    STREAM[STREAM["LIFESTYLE"] = 8] = "LIFESTYLE";
    STREAM[STREAM["TECHNOLOGY"] = 9] = "TECHNOLOGY";
    STREAM[STREAM["GADGETS"] = 10] = "GADGETS";
    STREAM[STREAM["SPORTS"] = 11] = "SPORTS";
    STREAM[STREAM["MARKETS"] = 12] = "MARKETS";
    STREAM[STREAM["SHORT_STORY"] = 13] = "SHORT_STORY";
    STREAM[STREAM["TRAVEL"] = 14] = "TRAVEL";
    STREAM[STREAM["WOMEN"] = 15] = "WOMEN";
    STREAM[STREAM["OFF_BEAT"] = 16] = "OFF_BEAT";
    STREAM[STREAM["TOUR"] = 17] = "TOUR";
    STREAM[STREAM["EDUCATION"] = 18] = "EDUCATION";
    STREAM[STREAM["EDITORIAL"] = 19] = "EDITORIAL";
    STREAM[STREAM["HEALTH"] = 20] = "HEALTH";
    STREAM[STREAM["FOOD"] = 21] = "FOOD";
    STREAM[STREAM["OTHER"] = 22] = "OTHER";
    STREAM[STREAM["BANGLADESH"] = 23] = "BANGLADESH";
    STREAM[STREAM["HOROSCOPE"] = 24] = "HOROSCOPE";
    STREAM[STREAM["POLITICS"] = 25] = "POLITICS";
    STREAM[STREAM["VIRAL"] = 26] = "VIRAL";
    STREAM[STREAM["DOOARS"] = 27] = "DOOARS";
    STREAM[STREAM["LS_MONEY"] = 28] = "LS_MONEY";
    STREAM[STREAM["LS_VIRAL"] = 29] = "LS_VIRAL";
    STREAM[STREAM["ASTROLOGY"] = 30] = "ASTROLOGY";
    STREAM[STREAM["FESTIVE"] = 31] = "FESTIVE";
    STREAM[STREAM["MYTHOLOGY"] = 32] = "MYTHOLOGY";
    STREAM[STREAM["KOLKATA"] = 33] = "KOLKATA";
    STREAM[STREAM["RECIPE"] = 34] = "RECIPE";
    STREAM[STREAM["LATEST"] = 35] = "LATEST";
    STREAM[STREAM["JOB"] = 36] = "JOB";
    STREAM[STREAM["TRIPURA"] = 37] = "TRIPURA";
    STREAM[STREAM["YOUTUBE"] = 38] = "YOUTUBE";
    STREAM[STREAM["AUDIO_STORY"] = 39] = "AUDIO_STORY";
    STREAM[STREAM["MOTIVATIONAL"] = 40] = "MOTIVATIONAL";
    STREAM[STREAM["COMEDY"] = 41] = "COMEDY";
    STREAM[STREAM["NATIONAL"] = 42] = "NATIONAL";
    STREAM[STREAM["CRIME"] = 43] = "CRIME";
    STREAM[STREAM["RELIGION"] = 44] = "RELIGION";
    STREAM[STREAM["NORTH_BENGAL"] = 45] = "NORTH_BENGAL";
    STREAM[STREAM["BIHAR"] = 46] = "BIHAR";
    STREAM[STREAM["GK"] = 47] = "GK";
    STREAM[STREAM["SPORTS_FEATURE"] = 48] = "SPORTS_FEATURE";
    STREAM[STREAM["SPORTS_MOMENT"] = 49] = "SPORTS_MOMENT";
    STREAM[STREAM["UTTRAKHAND"] = 50] = "UTTRAKHAND";
    STREAM[STREAM["UTTAR_PRADESH"] = 51] = "UTTAR_PRADESH";
})(STREAM = exports.STREAM || (exports.STREAM = {}));
function validate(c) {
    if (!c) {
        dlog_1.e('Missing content');
        return false;
    }
    if (!(c.img && c.img.length > 5)) {
        dlog_1.e('Missing img');
        return false;
    }
    if (!(c.title && c.title.length > 5)) {
        dlog_1.e('Missing title');
        return false;
    }
    if (!(c.details && c.details.length > 5)) {
        dlog_1.e('Missing details');
        return false;
    }
    if (!(c.summary && c.summary.length > 100)) {
        analytics_1.Analytics.hit_tracker({ 'action': exports.TELEMETRY_MISSING_SUMMARY, url: c.url });
        dlog_1.e('Missing summary');
        return false;
    }
    if (!(c.hostname && c.hostname.length > 5)) {
        dlog_1.e('Missing hostname');
        return false;
    }
    if (!(c.stream && c.stream.length > 0)) {
        dlog_1.e('Missing stream');
        return false;
    }
    if (!(c.lang && c.lang.length > 5)) {
        dlog_1.e('Missing lang');
        return false;
    }
    return true;
}
exports.validate = validate;
function buildContent(dict) {
    var sb = new SummaryManager_1.SummeryBuilder();
    switch (dict.lang) {
        case LANG.IN_BENGALI:
            dict['summary'] = sb.buildSummary(dict.details, SummaryManager_1.SummaryStrategy.BENAGLI);
            break;
        case LANG.IN_ENGLISH:
            dict['summary'] = sb.buildSummary(dict.details, SummaryManager_1.SummaryStrategy.ENGLISH);
            break;
        case LANG.IN_HINDI:
            dict['summary'] = sb.buildSummary(dict.details, SummaryManager_1.SummaryStrategy.HINDI);
            break;
        default:
            dict['summary'] = sb.buildSummary(dict.details, SummaryManager_1.SummaryStrategy.DEFAULT);
    }
    var cont = {
        title: dict.title,
        img: dict.img,
        details: dict.details,
        summary: dict.summary,
        is_active: dict.is_active,
        url: dict.url,
        hostname: dict.hostname,
        lang: LANG[dict.lang],
        stream: STREAM[dict.stream],
        is_partner: dict.is_partner,
    };
    if (validate(cont)) {
        return cont;
    }
    else {
        return null;
    }
}
exports.buildContent = buildContent;
exports.DB_URL = config.get("isProd") ? 'http://simplestore.dipankar.co.in/api/news1' : 'http://simplestore.dipankar.co.in/api/news_test';
exports.PROFILE_URL = config.get("isProd") ? 'http://simplestore.dipankar.co.in/api/news_profile1' : 'http://simplestore.dipankar.co.in/api/news_profile_test';
dlog_1.d("Using Root URL: " + exports.DB_URL);
//# sourceMappingURL=CONST.js.map