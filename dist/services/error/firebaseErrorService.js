"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class FirebaseException extends base_1.BaseError {
    constructor(key, message, code) {
        super({
            code: code || 403,
            type: `firebase_exception_${key}`,
            message
        });
    }
}
exports.FirebaseException = FirebaseException;
class FirebaseErrorService {
    constructor() {}
}
exports.FirebaseErrorService = FirebaseErrorService;
//# sourceMappingURL=firebaseErrorService.js.map