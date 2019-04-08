"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const crudController_1 = require("./crudController");
exports.CrudController = crudController_1.CrudController;
const userController_1 = require("./crud/userController");
const blogController_1 = require("./crud/blogController");
const postController_1 = require("./crud/postController");
const userController = new userController_1.UserController();
exports.userController = userController;
const blogController = new blogController_1.BlogController();
exports.blogController = blogController;
const postController = new postController_1.PostController();
exports.postController = postController;
//# sourceMappingURL=index.js.map