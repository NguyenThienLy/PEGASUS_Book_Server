"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const crudService_1 = require("../crudService");
const index_1 = require("../../models/index");
class UserService extends crudService_1.CrudService {
    constructor() {
        super(index_1.User);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map