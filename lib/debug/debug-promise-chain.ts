export function debugPromiseChain(func?:()=>any[]):any {
    if (typeof func === "function") {
        return function () {
            func.call(this, arguments);
            return arguments;
        }
    } else {
        console.dir(arguments);
        return arguments;
    }
}
