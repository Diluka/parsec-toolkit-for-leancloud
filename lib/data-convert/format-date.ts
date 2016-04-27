import * as moment from "moment";

let DEFAULT_FORMAT = "YYYY-MM-DD";

export function formatDate(input) {
    if (typeof input === "string") {
        return object => {
            return formatAny(object, input);
        };
    } else {
        return formatAny(input, DEFAULT_FORMAT);
    }
}

function formatAny(input, format: string) {
    if (input instanceof Array) {
        input.forEach(element => {
            formatOne(element, format);
        });
    } else {
        formatOne(input, format);
    }

    return input;
}

function formatOne(object, format: string) {
    let o = (object && object.attributes) || object || {};
    for (let p in o) {
        if (o.hasOwnProperty(p) && o[p] instanceof Date) {
            o[p] = moment(o[p]).format(format);
        }
    }
}