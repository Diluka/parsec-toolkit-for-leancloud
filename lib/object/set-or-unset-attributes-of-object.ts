import {AV} from "leanengine";

export function setOrUnsetAttributesOfObject(keys:string[], data:Object, object:AV.Object):void {
    keys.forEach(function (f) {
        if (data[f] === null) {
            object.unset(f);
        } else if (data[f] !== undefined) {
            object.set(f, data[f]);
        }
    });
}

