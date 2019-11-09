"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function d(msg) {
    console.log("[DEBUG] " + msg);
}
exports.d = d;
function i(msg) {
    console.log("[INFO] " + msg);
}
exports.i = i;
function e(msg) {
    console.log("[ERROR] " + msg);
}
exports.e = e;
function ex(msg) {
    console.log("[FETAL] " + msg.stack);
}
exports.ex = ex;
//# sourceMappingURL=dlog.js.map