"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const routerErrorService_1 = require("./error/routerErrorService");
const authErrorService_1 = require("./error/authErrorService");
const databaseErrorService_1 = require("./error/databaseErrorService");
const firebaseErrorService_1 = require("./error/firebaseErrorService");
class ErrorService {
    constructor() {
        this.firebase = new firebaseErrorService_1.FirebaseErrorService();
        this.router = new routerErrorService_1.RouterErrorService();
        this.auth = new authErrorService_1.AuthErrorService();
        this.database = new databaseErrorService_1.DatabaseErrorService();
    }
}
exports.ErrorService = ErrorService;
//# sourceMappingURL=errorService.js.map