"use strict";
function convertKeysToDate(keys, data) {
    keys.forEach(function (k) { return data[k] && (data[k] = new Date(data[k])); });
    return data;
}
exports.convertKeysToDate = convertKeysToDate;
//# sourceMappingURL=convert-keys-to-date.js.map