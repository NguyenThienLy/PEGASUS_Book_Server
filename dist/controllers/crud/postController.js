"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const crudController_1 = require("../crudController");
const index_1 = require("../../services/index");
class PostController extends crudController_1.CrudController {
    constructor() {
        super(index_1.postService);
    }
}
exports.PostController = PostController;
//# sourceMappingURL=postController.js.map