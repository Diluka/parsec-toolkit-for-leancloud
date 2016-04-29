"use strict";
var moment = require("moment");
var DEFAULT_FORMAT = "YYYY-MM-DD";
function formatDate(input) {
    if (typeof input === "string") {
        return function (object) {
            return formatAny(object, input);
        };
    }
    else {
        return formatAny(input, DEFAULT_FORMAT);
    }
}
exports.formatDate = formatDate;
function formatAny(input, format) {
    if (input instanceof Array) {
        input.forEach(function (element) {
            formatOne(element, format);
        });
    }
    else {
        formatOne(input, format);
    }
    return input;
}
function formatOne(object, format) {
    var o = (object && object.attributes) || object || {};
    for (var p in o) {
        if (o.hasOwnProperty(p) && o[p] instanceof Date) {
            o[p] = moment(o[p]).format(format);
        }
    }
}
//# sourceMappingURL=format-date.js.map