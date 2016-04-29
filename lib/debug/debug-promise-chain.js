"use strict";
function debugPromiseChain(func) {
    if (typeof func === "function") {
        return function () {
            func.call(this, arguments);
            return arguments;
        };
    }
    else {
        console.dir(arguments);
        return arguments;
    }
}
exports.debugPromiseChain = debugPromiseChain;
//# sourceMappingURL=debug-promise-chain.js.map