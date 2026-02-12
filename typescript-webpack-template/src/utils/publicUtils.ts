type DataType = Partial<Record<string, unknown>>;
// type DataType = Record<string, unknown>;

interface GenericResolveQueryParamsFn<T> {
    (arg?: T): T
}

function ResolveQueryParamsFn<T>(data?: T): T {
    // let resoleQueryParams: (data?: DataType) => DataType = function (data?: DataType): DataType {
    let queryParams = {};
    try {
        let url: URL = new URL(window.location.href);
        let hashQueryStr: string = url.hash.split("?")[1]; // Hash 内的 QueryString 参数
        let searchParams: URLSearchParams = new URLSearchParams(hashQueryStr); // URLSearchParams 对象
        for (const [key, value] of searchParams.entries()) {
            queryParams[key] = value;
        }
        Object.assign(queryParams, data);
        window.queryParams = queryParams;
    } catch (error) {
        console.error(error);
    }
    return queryParams as T;
    // return queryParams;
}

let resoleQueryParams: GenericResolveQueryParamsFn<DataType> = ResolveQueryParamsFn;

export type {
    DataType,
    GenericResolveQueryParamsFn,
}

export {
    resoleQueryParams,
}

export default resoleQueryParams;