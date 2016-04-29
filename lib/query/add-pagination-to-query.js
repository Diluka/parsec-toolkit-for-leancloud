"use strict";
var DEFAULT_LIST_SIZE = 20;
function addPaginationToQuery(paginationInfo, query) {
    paginationInfo.size = paginationInfo.size || DEFAULT_LIST_SIZE;
    if (paginationInfo.start) {
        query.skip(paginationInfo.start);
    }
    else if (paginationInfo.pageIndex) {
        query.skip((paginationInfo.pageIndex - 1) * paginationInfo.size);
    }
    query.limit(paginationInfo.size);
    return query;
}
exports.addPaginationToQuery = addPaginationToQuery;
//# sourceMappingURL=add-pagination-to-query.js.map