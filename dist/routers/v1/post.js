"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const crud_1 = require("../crud");
const post_1 = require("../../controllers/crud/post");
class PostRouter extends crud_1.CrudRouter {
    constructor() {
        super(post_1.postController);
    }
    customRouter() {}
}
exports.default = PostRouter;
//# sourceMappingURL=post.js.map