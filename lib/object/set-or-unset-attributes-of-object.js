"use strict";
function setOrUnsetAttributesOfObject(keys, data, object) {
    keys.forEach(function (f) {
        if (data[f] === null) {
            object.unset(f);
        }
        else if (data[f] !== undefined) {
            object.set(f, data[f]);
        }
    });
}
exports.setOrUnsetAttributesOfObject = setOrUnsetAttributesOfObject;
//# sourceMappingURL=set-or-unset-attributes-of-object.js.map