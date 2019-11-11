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
var analytics_1 = require("../../analytics");
var CONST_1 = require("../CONST");
var lodash_1 = require("lodash");
var dlog_1 = require("./dlog");
var request = require('request-promise');
var Url = require('url-parse');
function getHostNameFromUrl(url) {
    return new Url(url).hostname;
}
exports.getHostNameFromUrl = getHostNameFromUrl;
function saveToDB(res) {
    return __awaiter(this, void 0, void 0, function () {
        var res1, body, resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (res == null) {
                        return [2 /*return*/];
                    }
                    res1 = res.filter(function (x) {
                        if (x && x.title && x.details && x.img && x.title.length > 0 && x.details.length > 0 && x.img.length > 0) {
                            return true;
                        }
                        else {
                            analytics_1.Analytics.hit_tracker({ action: CONST_1.TELEMETRY_DB_IGNORE_INVALID_DATA, url: x.url });
                            dlog_1.d(">>>>>>>>>>>> [ERROR] Empty data received so NOT saving this, URL: " + x.url + " <<<<<<<<<<<<<<<");
                            return false;
                        }
                    });
                    dlog_1.d("[RSS] Before unique " + res1.length);
                    res1 = lodash_1.uniqBy(res1, 'url');
                    dlog_1.d("[RSS] After unique " + res1.length);
                    if (res1.length == 0) {
                        return [2 /*return*/];
                    }
                    body = { '_payload': res1, "_field": 'url' };
                    dlog_1.d("[INFO]: Using URL for insert is : " + CONST_1.DB_URL);
                    return [4 /*yield*/, request({
                            uri: CONST_1.DB_URL + "/insertorupdate",
                            method: 'POST',
                            body: body,
                            json: true
                        })];
                case 1:
                    resp = _a.sent();
                    dlog_1.d(resp);
                    if ((resp.status == 'error')) {
                        analytics_1.Analytics.action(CONST_1.TELEMETRY_DB_ERROR_SAVING, resp);
                    }
                    else {
                        dlog_1.d("[Debug] Data saved properly in the server: " + resp.msg);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.saveToDB = saveToDB;
function detectUrlNotInDb(url_list) {
    return __awaiter(this, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url_list = Array.from(new Set(url_list));
                    if (url_list.length == 0) {
                        return [2 /*return*/, null];
                    }
                    return [4 /*yield*/, request({
                            uri: CONST_1.DB_URL + "/exist",
                            method: 'POST',
                            body: {
                                _field: 'url',
                                _value: url_list
                            },
                            json: true
                        })];
                case 1:
                    resp = _a.sent();
                    if (resp.status == 'success') {
                        url_list = url_list.filter(function (x) { return resp.out.found_list[x] == null; });
                        dlog_1.d("[INFO] Total link which is NOT in DB: " + url_list.length + ", DB Found count: " + resp.out.found_count);
                    }
                    else {
                        return [2 /*return*/];
                    }
                    return [2 /*return*/, url_list];
            }
        });
    });
}
exports.detectUrlNotInDb = detectUrlNotInDb;
function updateProfileToDb(profiles) {
    return __awaiter(this, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request({
                        uri: CONST_1.PROFILE_URL + "/insertorupdate",
                        method: 'POST',
                        body: {
                            _payload: profiles,
                            _field: 'hostname'
                        },
                        json: true
                    })];
                case 1:
                    resp = _a.sent();
                    dlog_1.d(resp);
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateProfileToDb = updateProfileToDb;
//# sourceMappingURL=db_helper.js.map