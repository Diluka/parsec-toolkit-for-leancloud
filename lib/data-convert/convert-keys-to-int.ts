export function convertKeysToInt(keys:string[], data:Object):Object {
    keys.forEach(k => {
        if (data[k]) {
            data[k] = parseInt(data[k]);
        } else {
            delete data[k];
        }
    });
    return data;
}
