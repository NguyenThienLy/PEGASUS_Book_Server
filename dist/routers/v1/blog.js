"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const crud_1 = require("../crud");
const controllers_1 = require("../../controllers");
const middlewares_1 = require("../../middlewares");
class BlogRouter extends crud_1.CrudRouter {
    constructor() {
        super(controllers_1.blogController);
    }
    getListMiddlewares() {
        return [middlewares_1.queryInfoMiddleware.run()];
    }
    createMiddlewares() {
        return [];
    }
}
exports.default = BlogRouter;
//# sourceMappingURL=blog.js.map