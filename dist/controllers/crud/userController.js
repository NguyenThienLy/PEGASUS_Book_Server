"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const crudController_1 = require("../crudController");
const index_1 = require("../../services/index");
class UserController extends crudController_1.CrudController {
    constructor() {
        super(index_1.userService);
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map