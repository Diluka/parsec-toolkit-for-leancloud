"use strict";
function addSortToQuery(sort, query) {
    sort.forEach(function (s) {
        if (s.indexOf('+') === 0) {
            query.addAscending(s.slice(1));
        }
        else if (s.indexOf('-') === 0) {
            query.addDescending(s.slice(1));
        }
        else {
            query.addAscending(s);
        }
    });
    return query;
}
exports.addSortToQuery = addSortToQuery;
//# sourceMappingURL=add-sort-to-query.js.map