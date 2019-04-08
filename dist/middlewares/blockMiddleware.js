"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const baseMiddleware_1 = require("./baseMiddleware");
class BlockMiddleware extends baseMiddleware_1.BaseMiddleware {
    async use(req, res, next, providers) {
        throw services_1.errorService.auth.permissionDenied();
    }
}
exports.BlockMiddleware = BlockMiddleware;
//# sourceMappingURL=blockMiddleware.js.map