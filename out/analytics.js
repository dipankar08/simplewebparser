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
//POST => http://{{server}}/api/_analytics/launch => {"app_id":"{{app_id}}","app_version":"1.0","device_os":"android", "device_id":"abc","device_api":"27"} => "session":"(?<session>.*?)"
//POST => http://{{server}}/api/_analytics/action => {"app_id":"{{app_id}}","session":"{{session}}","type":"click", "target_id":"btn1"} => Tracked action
//POST => http://{{server}}/api/_analytics/exception => {"app_id":"{{app_id}}", "session":"{{session}}","type":"RuntimeException", "location":"Main.c:20","stack":"full stack here"} => Tracked exception
//POST => http://{{server}}/api/_analytics/timeit => {"app_id":"{{app_id}}", "session":"{{session}}", "total_time": 10000, "type" :"Activity", "block":"MainActivity"} => Tracked timeit
var fetch_req = require('node-fetch');
var _ = require('underscore');
var Analytics = /** @class */ (function () {
    function Analytics() {
    }
    Analytics.action = function (action, target_id, extra) {
        if (extra === void 0) { extra = {}; }
        var res = {};
        res['type'] = 'action';
        res['action'] = action;
        res['target_id'] = target_id;
        res['tag'] = target_id;
        var obj = _.extend(res, extra);
        this.pump('http://simplestore.dipankar.co.in/api/_analytics/action', obj);
    };
    Analytics.hit_tracker = function (extra) {
        if (extra === void 0) { extra = {}; }
        extra['type'] = 'hit_tracker';
        this.pump('http://simplestore.dipankar.co.in/api/_analytics/hit_tracker', extra);
    };
    Analytics.exception = function (e, extra) {
        if (extra === void 0) { extra = {}; }
        var errObj = { type: "exception", "error": e.name, location: 'Please see the stack', stack: e.stack };
        var obj = _.extend(errObj, extra);
        this.pump('http://simplestore.dipankar.co.in/api/_analytics/exception', obj);
    };
    Analytics.timeitStart = function (tag) {
    };
    Analytics.timeItEnd = function (tag) {
    };
    Analytics.launch = function (napp_id) {
        return __awaiter(this, void 0, void 0, function () {
            var body;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.app_id = napp_id;
                        body = { "type": "launch", "app_id": this.app_id, "app_version": "1.0", "device_os": "linux", "device_id": "linux", "device_api": "0" };
                        return [4 /*yield*/, fetch_req('http://simplestore.dipankar.co.in/api/_analytics/launch', {
                                method: 'post',
                                body: JSON.stringify(body),
                                headers: { 'Content-Type': 'application/json' },
                            })
                                .then(function (res) { return res.json(); })
                                .then(function (json) {
                                console.log(json);
                                _this.session = json.out.session;
                                _this.pumpPending();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Analytics.pumpPending = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, item;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.session != null)) return [3 /*break*/, 5];
                        _i = 0, _a = this.pendingItems;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        item = _a[_i];
                        return [4 /*yield*/, this.pump(item.url, item.data)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.pendingItems = [];
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Analytics.pump = function (url, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.session == null)) return [3 /*break*/, 1];
                        this.pendingItems.push({ url: url, data: data });
                        return [3 /*break*/, 3];
                    case 1:
                        if (data['type'] == 'hit_tracker') {
                            data['session'] = this.session;
                        }
                        data['app_id'] = this.app_id;
                        console.log("[ANA] Sending Logs: url: " + url + ", data: " + data);
                        return [4 /*yield*/, fetch_req(url, {
                                method: 'post',
                                body: JSON.stringify(data),
                                headers: { 'Content-Type': 'application/json' },
                            }).then(function (res) { return res.json(); })
                                .then(function (json) {
                                console.log(json);
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Analytics.session = null;
    Analytics.app_id = null;
    Analytics.pendingItems = [];
    return Analytics;
}());
exports.Analytics = Analytics;
//Analytics.action("parseError","He is the error", {"url":"URL"});
//Analytics.launch("crawler");
//Analytics.exception(Error("Test"));
//# sourceMappingURL=analytics.js.map