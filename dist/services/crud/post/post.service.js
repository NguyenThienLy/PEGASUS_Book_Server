"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const crudService_1 = require("../../crudService");
const post_model_1 = require("../../../models/post.model");
class PostService extends crudService_1.CrudService {
    constructor() {
        super(post_model_1.Post);
    }
}
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map