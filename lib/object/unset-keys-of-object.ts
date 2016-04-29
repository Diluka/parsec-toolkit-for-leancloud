import {AV} from "leanengine";

export function unsetKeysOfObject(keys:string[], object:AV.Object):AV.Object {
    keys.forEach(k => object.unset(k));
    return object;
}
