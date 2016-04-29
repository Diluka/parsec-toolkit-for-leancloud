export function convertKeysToInt(keys:string[], data:Object):Object {
    keys.forEach(k => data[k] && (data[k] = parseInt(data[k])));
    return data;
}
