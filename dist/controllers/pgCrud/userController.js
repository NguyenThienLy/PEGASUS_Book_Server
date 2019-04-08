"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const pgCrudController_1 = require("../pgCrudController");
const index_1 = require("../../services/index");
class UserController extends pgCrudController_1.CrudController {
    constructor() {
        super(index_1.userService);
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map