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
var SummaryStrategy;
(function (SummaryStrategy) {
    SummaryStrategy[SummaryStrategy["NULL"] = 0] = "NULL";
    SummaryStrategy[SummaryStrategy["AUTO"] = 1] = "AUTO";
    SummaryStrategy[SummaryStrategy["LINE_BREAK"] = 2] = "LINE_BREAK";
})(SummaryStrategy = exports.SummaryStrategy || (exports.SummaryStrategy = {}));
var SummeryBuilder = /** @class */ (function () {
    function SummeryBuilder() {
        this.strategyMap = new Map();
        // add you item here.
        var strategyList = [
            new NULLStrategy(),
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
        return this.strategyMap.get(strategy).process(input);
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
        return null;
    };
    return NULLStrategy;
}(BaseStrategyProvider));
exports.NULLStrategy = NULLStrategy;
//# sourceMappingURL=SummaryManager.js.map