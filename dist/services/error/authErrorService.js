"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class AuthException extends base_1.BaseError {
    constructor(key, message, code) {
        super({
            code: code || 403,
            type: `auth_exception_${key}`,
            message
        });
    }
}
exports.AuthException = AuthException;
class AuthErrorService {
    constructor() {}
    unauthonized() {
        return new AuthException('unauthornized', "unauthornized", 401);
    }
    permissionDenied() {
        return new AuthException('permistion_denied', "Your permission denied");
    }
    badToken() {
        return new AuthException('bad_token', "Bad token");
    }
}
exports.AuthErrorService = AuthErrorService;
//# sourceMappingURL=authErrorService.js.map