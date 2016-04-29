import {AV} from "leanengine";

const DEFAULT_LIST_SIZE = 20;
/**
 * 分页参数
 */
export declare interface PaginationInfo {
    /**
     * 起始位置
     */
    start:number;

    /**
     * 页码
     */
    pageIndex:number;

    /**
     * 页大小
     */
    size:number;
}

export function addPaginationToQuery(paginationInfo:PaginationInfo, query:AV.Query):AV.Query {

    paginationInfo.size = paginationInfo.size || DEFAULT_LIST_SIZE;

    if (paginationInfo.start) {
        query.skip(paginationInfo.start)
    } else if (paginationInfo.pageIndex) {
        query.skip((paginationInfo.pageIndex - 1) * paginationInfo.size);
    }

    query.limit(paginationInfo.size);

    return query;
}
