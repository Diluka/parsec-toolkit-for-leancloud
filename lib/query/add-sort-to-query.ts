import * as AV from "leanengine"
export function addSortToQuery(sort:string[], query:AV.Query):AV.Query {

    sort.forEach(function (s) {
        if (s.indexOf('+') === 0) {
            query.addAscending(s.slice(1));
        } else if (s.indexOf('-') === 0) {
            query.addDescending(s.slice(1));
        } else {
            query.addAscending(s);
        }
    });

    return query;
}
