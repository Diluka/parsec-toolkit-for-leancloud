export function convertKeysToDate(keys:string[], data:Object):Object {
    keys.forEach(k => data[k] && (data[k] = new Date(data[k])));
    return data;
}
