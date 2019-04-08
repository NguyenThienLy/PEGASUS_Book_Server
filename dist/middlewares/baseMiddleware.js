"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
class BaseMiddleware {
    onError(res, error) {
        if (!error.options) {
            console.log("UNKNOW ERROR", error);
            const err = services_1.errorService.router.somethingWentWrong();
            res.status(err.options.code).json(err.options);
        } else {
            res.status(error.options.code).json(error.options);
        }
    }
    run(option) {
        return (req, res, next) => this.use.bind(this)(req, res, next, option).catch(error => {
            this.onError(res, error);
        });
    }
    async use(req, res, next, option) {
        next();
    }
}
exports.BaseMiddleware = BaseMiddleware;
//# sourceMappingURL=baseMiddleware.js.map