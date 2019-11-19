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
var dlog_1 = require("../utils/dlog");
var SummaryStrategy;
(function (SummaryStrategy) {
    SummaryStrategy[SummaryStrategy["NULL"] = 0] = "NULL";
    SummaryStrategy[SummaryStrategy["DEFAULT"] = 1] = "DEFAULT";
    SummaryStrategy[SummaryStrategy["AUTO"] = 2] = "AUTO";
    SummaryStrategy[SummaryStrategy["BENAGLI"] = 3] = "BENAGLI";
    SummaryStrategy[SummaryStrategy["HINDI"] = 4] = "HINDI";
    SummaryStrategy[SummaryStrategy["ENGLISH"] = 5] = "ENGLISH";
})(SummaryStrategy = exports.SummaryStrategy || (exports.SummaryStrategy = {}));
var SummeryBuilder = /** @class */ (function () {
    function SummeryBuilder() {
        this.strategyMap = new Map();
        // add you item here.
        var strategyList = [
            new NULLStrategy(),
            new BengaliStrategy(),
            new EnglishStrategy(),
            new HindiStrategy(),
            new DefaultStrategy(),
        ];
        for (var _i = 0, strategyList_1 = strategyList; _i < strategyList_1.length; _i++) {
            var s = strategyList_1[_i];
            this.strategyMap[s.getStrategy()] = s;
        }
    }
    SummeryBuilder.prototype.buildSummary = function (input, strategy) {
        if (strategy === void 0) { strategy = null; }
        if (strategy == null) {
            strategy = SummaryStrategy.NULL;
        }
        return this.strategyMap[strategy].process(input);
    };
    return SummeryBuilder;
}());
exports.SummeryBuilder = SummeryBuilder;
var BaseStrategyProvider = /** @class */ (function () {
    function BaseStrategyProvider() {
    }
    return BaseStrategyProvider;
}());
exports.BaseStrategyProvider = BaseStrategyProvider;
// default will return null.
var NULLStrategy = /** @class */ (function (_super) {
    __extends(NULLStrategy, _super);
    function NULLStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NULLStrategy.prototype.getStrategy = function () {
        return SummaryStrategy.NULL;
    };
    NULLStrategy.prototype.process = function (String) {
        return '';
    };
    return NULLStrategy;
}(BaseStrategyProvider));
exports.NULLStrategy = NULLStrategy;
// default will return null.
var BengaliStrategy = /** @class */ (function (_super) {
    __extends(BengaliStrategy, _super);
    function BengaliStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BengaliStrategy.prototype.getStrategy = function () {
        return SummaryStrategy.BENAGLI;
    };
    BengaliStrategy.prototype.process = function (input) {
        var result = [];
        try {
            var lines = input.split(/\n|।/).filter(function (x) { return x.length > 10; });
            var sel = "";
            for (var i = 0; i < lines.length; i++) {
                var l = lines[i];
                if (sel.length < 120 && sel.length + l.length < 180) {
                    sel = sel + l.trim() + "। ";
                }
                else {
                    if (sel.length > 10) {
                        result.push(sel);
                    }
                    // push to next line.
                    if (l.length > 10) {
                        sel = l.trim() + "| ";
                    }
                }
            }
            if (sel.length > 10) {
                result.push(sel);
            }
            result = result.slice(0, 3);
            return result.map(function (x) { return "\u25CF  " + x; }).join("\n");
        }
        catch (e) {
            dlog_1.ex(e);
            dlog_1.d("[INFO] summarization fails");
        }
        return input;
    };
    return BengaliStrategy;
}(BaseStrategyProvider));
exports.BengaliStrategy = BengaliStrategy;
var HindiStrategy = /** @class */ (function (_super) {
    __extends(HindiStrategy, _super);
    function HindiStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HindiStrategy.prototype.getStrategy = function () {
        return SummaryStrategy.HINDI;
    };
    HindiStrategy.prototype.process = function (input) {
        var result = [];
        try {
            var lines = input.split(/\n|\.|।/).filter(function (x) { return x.length > 10; });
            var sel = "";
            lines.forEach(function (l) {
                if (sel.length < 120 && sel.length + l.length < 180) {
                    sel = sel + l.trim() + ". ";
                }
                else {
                    if (sel.length > 10) {
                        result.push(sel);
                    }
                    sel = "";
                }
            });
            if (sel.length > 10) {
                result.push(sel);
            }
            result = result.slice(0, 3);
            return result.map(function (x) { return "\u25CF  " + x; }).join("\n");
        }
        catch (e) {
            dlog_1.ex(e);
            dlog_1.d("[INFO] summarization fails");
        }
        return input;
    };
    return HindiStrategy;
}(BaseStrategyProvider));
exports.HindiStrategy = HindiStrategy;
var EnglishStrategy = /** @class */ (function (_super) {
    __extends(EnglishStrategy, _super);
    function EnglishStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnglishStrategy.prototype.getStrategy = function () {
        return SummaryStrategy.ENGLISH;
    };
    EnglishStrategy.prototype.process = function (input) {
        var result = [];
        try {
            var lines = input.split(/\n|\.|।/).filter(function (x) { return x.length > 10; });
            var sel = "";
            lines.forEach(function (l) {
                if (sel.length < 120 && sel.length + l.length < 180) {
                    sel = sel + l.trim() + ". ";
                }
                else {
                    if (sel.length > 10) {
                        result.push(sel);
                    }
                    sel = "";
                }
            });
            if (sel.length > 10) {
                result.push(sel);
            }
            result = result.slice(0, 3);
            return result.map(function (x) { return "\u25CF  " + x; }).join("\n");
        }
        catch (e) {
            dlog_1.ex(e);
            dlog_1.d("[INFO] summarization fails");
        }
        return input;
    };
    return EnglishStrategy;
}(BaseStrategyProvider));
exports.EnglishStrategy = EnglishStrategy;
var DefaultStrategy = /** @class */ (function (_super) {
    __extends(DefaultStrategy, _super);
    function DefaultStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultStrategy.prototype.getStrategy = function () {
        return SummaryStrategy.DEFAULT;
    };
    DefaultStrategy.prototype.process = function (input) {
        var result = [];
        try {
            var lines = input.split(/\n|\.|।/).filter(function (x) { return x.length > 10; });
            var sel = "";
            lines.forEach(function (l) {
                if (sel.length < 120 && sel.length + l.length < 180) {
                    sel = sel + l.trim() + ". ";
                }
                else {
                    if (sel.length > 10) {
                        result.push(sel);
                    }
                    sel = "";
                }
            });
            if (sel.length > 10) {
                result.push(sel);
            }
            result = result.slice(0, 3);
            return result.map(function (x) { return "\u25CF  " + x; }).join("\n");
        }
        catch (e) {
            dlog_1.ex(e);
            dlog_1.d("[INFO] summarization fails");
        }
        return input;
    };
    return DefaultStrategy;
}(BaseStrategyProvider));
exports.DefaultStrategy = DefaultStrategy;
/*
let content = `দিল্লিতে ভূমিকম্প। মৃদু ভূকম্পন অনুভূত হয় দিল্লিতে। ভূকম্পন অনুভূত লখনউতেও। ভূমিকম্পে সাধারণ মানুষের মধ্যে আতঙ্ক ছড়িয়েছে। এখনও পর্যন্ত কোনও ক্ষয়ক্ষতির খবর পাওয়া যায়নি।গতকাল, সোমবার কেঁপে ওঠে গুজরাতের মাটি ৷  সন্ধে ৭টা ২ নাগাদ কম্পন অনুভূত হয় গুজরাতের কচ্ছ এলাকার ভাচাউ ও আনজারে ৷ রিখটার স্কেলে এই কম্পনের মাত্রা ছিল ৪.৩ ৷ ঘটনায় আতঙ্কিত হয়ে পড়েন সাধারণ মানুষ ৷ অনেকেই ঘর ছেড়ে রাস্তায় বেরিয়ে আসেন ৷ তবে ভূমিকম্পে তেমন ক্ষয়ক্ষতির ঘটনা ঘটেনি ৷`

let sb = new SummeryBuilder();
let res = sb.buildSummary(content, SummaryStrategy.BENAGLI)
d(res);
*/
//# sourceMappingURL=SummaryManager.js.map