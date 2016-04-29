"use strict";
function fieldRequiredCheck(keys, data, keyNames) {
    if (keyNames === void 0) { keyNames = {}; }
    var result = [];
    keys.forEach(function (k) {
        if (!data[k]) {
            result.push({
                field: k,
                name: keyNames[k],
                message: "\u5B57\u6BB5\uFF1A'" + (keyNames[k] || k) + "'\u4E0D\u80FD\u4E3A\u7A7A\uFF01"
            });
        }
    });
    return result.length ? result : false;
}
exports.fieldRequiredCheck = fieldRequiredCheck;
//# sourceMappingURL=field-required-check.js.map