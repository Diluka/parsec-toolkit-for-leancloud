"use strict";
function exposeInnerWithPrefixFunc(inner, keys, prefix) {
    if (prefix === void 0) { prefix = ""; }
    return function (input) { return exposeInnerWithPrefix(input, inner, keys, prefix); };
}
exports.exposeInnerWithPrefixFunc = exposeInnerWithPrefixFunc;
function exposeInnerWithPrefix(input, inner, keys, prefix) {
    if (prefix === void 0) { prefix = ""; }
    if (input instanceof Array) {
        input.forEach(function (o) { return exposeOne(o, inner, keys, prefix); });
    }
    else {
        exposeOne(input, inner, keys, prefix);
    }
    return input;
}
exports.exposeInnerWithPrefix = exposeInnerWithPrefix;
function exposeOne(object, inner, keys, prefix) {
    var ino = object.get(inner);
    if (ino)
        keys.forEach(function (k) { return object.set("" + prefix + k, ino.get(k) || ""); });
}
//# sourceMappingURL=expose-inner-with-prefix.js.map