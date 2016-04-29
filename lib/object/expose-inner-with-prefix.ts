import {AV} from "leanengine";

export function exposeInnerWithPrefixFunc(inner:string, keys:string[], prefix = ""):Function {
    return (input:AV.Object|AV.Object[]) => exposeInnerWithPrefix(input, inner, keys, prefix);
}

export function exposeInnerWithPrefix(input:AV.Object|AV.Object[], inner:string, keys:string[], prefix = ""):AV.Object|AV.Object[] {
    if (input instanceof Array) {
        input.forEach(o => exposeOne(o, inner, keys, prefix));
    } else {
        exposeOne(input, inner, keys, prefix);
    }
    return input;
}

function exposeOne(object:AV.Object, inner:string, keys:string[], prefix:string) {
    var ino = <AV.Object>object.get(inner);
    if (ino)
        keys.forEach(k => object.set(`${prefix}${k}`, ino.get(k) || ""));
}
