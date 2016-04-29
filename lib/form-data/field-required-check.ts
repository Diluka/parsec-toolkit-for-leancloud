export interface Result {
    field:string;
    name:string;
    message:string;
}
export function fieldRequiredCheck(keys:string[], data:Object, keyNames = {}):Result[]|boolean {
    var result:Result[] = [];
    keys.forEach(k => {
        if (!data[k]) {
            result.push(<Result>{
                field: k,
                name: keyNames[k],
                message: `字段：'${(keyNames[k] || k)}'不能为空！`
            });
        }
    });
    return result.length ? result : false;
}
