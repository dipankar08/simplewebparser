"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dlog_1 = require("../utils/dlog");
var Url = require('url-parse');
function getFilteredUrl(root_url, urls_abs, config) {
    var url_filtered = [];
    for (var _i = 0, urls_abs_1 = urls_abs; _i < urls_abs_1.length; _i++) {
        var u = urls_abs_1[_i];
        if (Url(u).hostname != Url(root_url).hostname) {
            dlog_1.d("[INFO] Ignore url " + u + " for out of domain fetch");
            continue;
        }
        if (config.ignoreUrlRegex && config.ignoreUrlRegex.length > 0) {
            var flag = 0;
            for (var _a = 0, _b = config.ignoreUrlRegex; _a < _b.length; _a++) {
                var ic = _b[_a];
                if (u.indexOf(ic) != -1) {
                    dlog_1.d("[INFO] Ignoring url " + u + " as it is getting ignored by rootConfig");
                    flag = 1;
                    break;
                }
            }
            if (flag == 1) {
                continue;
            }
        }
        url_filtered.push(u);
    }
    return url_filtered;
}
exports.getFilteredUrl = getFilteredUrl;
// We will clean the data again for second time. 
function superCleanData(url, str, config) {
    if (str.length == 0) {
        return str;
    }
    // trim it first
    str = str.trim();
    // Remove portal tag line.
    var indexD = str.indexOf(':');
    if (indexD != -1 && indexD < 50) {
        str = str.substring(indexD + 1, str.length);
    }
    // somehow replace consecutive replace doesn't work
    str = str.split("\n").filter(function (x) {
        if (x.trim().length < 1) {
            return false;
        }
        var shouldNotIgnore = true;
        if (config.ignoreLineRegex != null) {
            for (var _i = 0, _a = config.ignoreLineRegex; _i < _a.length; _i++) {
                var regex = _a[_i];
                if (x.indexOf(regex) != -1) {
                    shouldNotIgnore = false;
                    break;
                }
            }
        }
        return shouldNotIgnore;
    }).join("\n");
    if (str.length == 0) {
        dlog_1.d("\n\n[ERROR] $$$$ Parse returns an empty data . please have a look $$$$");
    }
    return str;
}
exports.superCleanData = superCleanData;
//# sourceMappingURL=network.js.map