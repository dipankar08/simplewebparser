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
    STREAM[STREAM["HEADLINE"] = 1] = "HEADLINE";
    STREAM[STREAM["FIRST_PAGE"] = 2] = "FIRST_PAGE";
    STREAM[STREAM["STATE"] = 3] = "STATE";
    STREAM[STREAM["COUNTRY"] = 4] = "COUNTRY";
    STREAM[STREAM["INTERNATIONAL"] = 5] = "INTERNATIONAL";
    STREAM[STREAM["BUSINESS"] = 6] = "BUSINESS";
    STREAM[STREAM["SCIENCE"] = 7] = "SCIENCE";
    STREAM[STREAM["ENTERTAINMENT"] = 8] = "ENTERTAINMENT";
    STREAM[STREAM["MOVIE"] = 9] = "MOVIE";
    STREAM[STREAM["LIFESTYLE"] = 10] = "LIFESTYLE";
    STREAM[STREAM["TECHNOLOGY"] = 11] = "TECHNOLOGY";
    STREAM[STREAM["GADGETS"] = 12] = "GADGETS";
    STREAM[STREAM["SPORTS"] = 13] = "SPORTS";
    STREAM[STREAM["MARKETS"] = 14] = "MARKETS";
    STREAM[STREAM["SHORT_STORY"] = 15] = "SHORT_STORY";
    STREAM[STREAM["TRAVEL"] = 16] = "TRAVEL";
    STREAM[STREAM["WOMEN"] = 17] = "WOMEN";
    STREAM[STREAM["OFF_BEAT"] = 18] = "OFF_BEAT";
    STREAM[STREAM["TOUR"] = 19] = "TOUR";
    STREAM[STREAM["EDUCATION"] = 20] = "EDUCATION";
    STREAM[STREAM["EDITORIAL"] = 21] = "EDITORIAL";
    STREAM[STREAM["HEALTH"] = 22] = "HEALTH";
    STREAM[STREAM["FOOD"] = 23] = "FOOD";
    STREAM[STREAM["OTHER"] = 24] = "OTHER";
    STREAM[STREAM["BANGLADESH"] = 25] = "BANGLADESH";
    STREAM[STREAM["HOROSCOPE"] = 26] = "HOROSCOPE";
    STREAM[STREAM["POLITICS"] = 27] = "POLITICS";
    STREAM[STREAM["VIRAL"] = 28] = "VIRAL";
    STREAM[STREAM["DOOARS"] = 29] = "DOOARS";
    STREAM[STREAM["LS_MONEY"] = 30] = "LS_MONEY";
    STREAM[STREAM["LS_VIRAL"] = 31] = "LS_VIRAL";
    STREAM[STREAM["ASTROLOGY"] = 32] = "ASTROLOGY";
    STREAM[STREAM["FESTIVE"] = 33] = "FESTIVE";
    STREAM[STREAM["MYTHOLOGY"] = 34] = "MYTHOLOGY";
    STREAM[STREAM["KOLKATA"] = 35] = "KOLKATA";
    STREAM[STREAM["RECIPE"] = 36] = "RECIPE";
    STREAM[STREAM["LATEST"] = 37] = "LATEST";
    STREAM[STREAM["JOB"] = 38] = "JOB";
    STREAM[STREAM["TRIPURA"] = 39] = "TRIPURA";
    STREAM[STREAM["YOUTUBE"] = 40] = "YOUTUBE";
    STREAM[STREAM["AUDIO_STORY"] = 41] = "AUDIO_STORY";
    STREAM[STREAM["MOTIVATIONAL"] = 42] = "MOTIVATIONAL";
    STREAM[STREAM["COMEDY"] = 43] = "COMEDY";
    STREAM[STREAM["NATIONAL"] = 44] = "NATIONAL";
    STREAM[STREAM["CRIME"] = 45] = "CRIME";
    STREAM[STREAM["RELIGION"] = 46] = "RELIGION";
    STREAM[STREAM["NORTH_BENGAL"] = 47] = "NORTH_BENGAL";
    STREAM[STREAM["BIHAR"] = 48] = "BIHAR";
    STREAM[STREAM["GK"] = 49] = "GK";
    STREAM[STREAM["SPORTS_FEATURE"] = 50] = "SPORTS_FEATURE";
    STREAM[STREAM["SPORTS_MOMENT"] = 51] = "SPORTS_MOMENT";
    STREAM[STREAM["UTTRAKHAND"] = 52] = "UTTRAKHAND";
    STREAM[STREAM["UTTAR_PRADESH"] = 53] = "UTTAR_PRADESH";
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