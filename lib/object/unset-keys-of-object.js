"use strict";
function unsetKeysOfObject(keys, object) {
    keys.forEach(function (k) { return object.unset(k); });
    return object;
}
exports.unsetKeysOfObject = unsetKeysOfObject;
//# sourceMappingURL=unset-keys-of-object.js.map