"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const crudService_1 = require("../crudService");
const index_1 = require("../../models/index");
class PostService extends crudService_1.CrudService {
    constructor() {
        super(index_1.Post);
    }
}
exports.PostService = PostService;
//# sourceMappingURL=postService.js.map