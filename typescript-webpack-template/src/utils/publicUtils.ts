function resoleQueryParams(data = {}) {
    let queryParams = {};
    try {
        let url = new URL(window.location.href);
        let hashQueryStr = url.hash.split("?")[1]; // Hash 内的 QueryString 参数
        let searchParams = new URLSearchParams(hashQueryStr); // URLSearchParams 对象
        for (const [key, value] of searchParams.entries()) {
            queryParams[key] = value;
        }

        Object.assign(queryParams, data);
        window.queryParams = queryParams;
    } catch (error) {
        console.error(error);
    }
    return queryParams;
}

export {
    resoleQueryParams,
}

export default resoleQueryParams;