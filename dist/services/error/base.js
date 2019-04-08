"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class BaseError extends Error {
    constructor(options) {
        super();
        this.options = options;
    }
    toJSON() {
        return this.options;
    }
}
exports.BaseError = BaseError;
//# sourceMappingURL=base.js.map