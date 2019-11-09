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
            lines.forEach(function (l) {
                if (sel.length < 120 && sel.length + l.length < 180) {
                    sel = sel + l.trim() + "। ";
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
let content = `Washington: Treasury Secretary Steven Mnuchin and presidential adviser Jared Kushner will lead an American delegation to Saudi Arabia's annual financial conference, US media reported Tuesday, after widespread boycotts of last year's event in protest at the murder of dissident journalist Jamal Khashoggi. Saudi reporter Khashoggi, a columnist for the Washington Post, was strangled and dismembered at the kingdom's consulate in Istanbul on October 2, 2018. Dozens of top global officials and business leaders boycotted last year's Future Investment Initiative (FII), a lavish event dubbed "Davos in the desert", as international outrage over Khashoggi's killing peaked. But the United States, a key ally of the petro-state, will send a top-level delegation to this year's edition led by Mnuchin, the New York Times reported, citing the Treasury Department. Kushner, President Donald Trump's son-in-law, and Brian H Hook, the State Department's special envoy overseeing Iran policy, will also attend, the paper said, citing unnamed sources. The US Treasury did not immediately respond to AFP's request for comment. Global firms including Goldman Sachs, JP Morgan Chase and Citigroup are also planning to send top executives to this year's event, the Washington Post reported earlier. The leaders of India and Pakistan, Narendra Modi and Imran Khan, will also attend, according to local press reports in their countries this week. The conference, which begins next week, is aimed at drawing foreign investors to help Riyadh diversify its oil-reliant economy. Crown Prince Mohammed bin Salman, the conservative petro-state's de facto leader, was feted by global leaders and business titans before Khashoggi's gruesome murder. The global fallout over the killing rendered the heir to the Arab world's most powerful throne a pariah, casting a shadow on his reforms, putting the kingdom's human rights record under the microscope and testing old alliances with Western powers. The CIA has reportedly concluded that the prince, who controls all major levers of power in the Saudi government, likely ordered the killing. A report by United Nations Special Rapporteur Agnes Callamard also said there was "credible evidence" linking him to the murder and an attempted cover up. Eleven suspects have been put on trial in Riyadh over Khashoggi's murder, five of whom face the death penalty, but hearings are held behind closed doors and the names of the defendants have not been released. Amnesty International has denounced the trial in Riyadh as a "sham" and "a mockery of justice". Get the best of News18 delivered to your inbox - subscribe to News18 Daybreak. Follow News18.com on Twitter, Instagram, Facebook, Telegram, TikTok and on YouTube, and stay in the know with what's happening in the world around you – in real time.`
let sb = new SummeryBuilder();
let res = sb.buildSummary(content, SummaryStrategy.ENGLISH)
d(res);

*/
//# sourceMappingURL=SummaryManager.js.map