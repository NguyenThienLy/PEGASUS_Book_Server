"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class RouterException extends base_1.BaseError {
    constructor(key, message, code) {
        super({
            code: code || 403,
            type: `router_exception_${key}`,
            message
        });
    }
}
exports.RouterException = RouterException;
class RouterErrorService {
    constructor() {}
    somethingWentWrong() {
        return new RouterException('something_went_wrong', "Something went wrong!");
    }
    googleMapApiWrong(error) {
        return new RouterException('google_map_api', error);
    }
}
exports.RouterErrorService = RouterErrorService;
//# sourceMappingURL=routerErrorService.js.map