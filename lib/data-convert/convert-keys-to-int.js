"use strict";
function convertKeysToInt(keys, data) {
    keys.forEach(function (k) { return data[k] && (data[k] = parseInt(data[k])); });
    return data;
}
exports.convertKeysToInt = convertKeysToInt;
//# sourceMappingURL=convert-keys-to-int.js.map