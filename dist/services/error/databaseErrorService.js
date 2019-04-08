"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class DatabaseException extends base_1.BaseError {
    constructor(key, message, code) {
        super({
            code: code || 403,
            type: `database_exception_${key}`,
            message
        });
    }
}
exports.DatabaseException = DatabaseException;
class DatabaseErrorService {
    constructor() {}
    query() {
        return new DatabaseException('query', "Database query error", 401);
    }
}
exports.DatabaseErrorService = DatabaseErrorService;
//# sourceMappingURL=databaseErrorService.js.map