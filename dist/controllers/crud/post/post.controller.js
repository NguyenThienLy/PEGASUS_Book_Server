"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const crudController_1 = require("../../crudController");
const post_1 = require("../../../services/crud/post");
class PostController extends crudController_1.CrudController {
    constructor() {
        super(post_1.postService);
    }
}
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map