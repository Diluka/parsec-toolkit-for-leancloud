export function convertKeysToDate(keys:string[], data:Object):Object {
    keys.forEach(k => {
        if (data[k]) {
            data[k] = new Date(data[k]);
        } else {
            delete data[k];
        }
    });
    return data;
}
