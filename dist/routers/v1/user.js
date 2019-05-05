"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const crud_1 = require("../crud");
const book_1 = require("../../controllers/crud/book");
class BookRouter extends crud_1.CrudRouter {
    constructor() {
        super(book_1.bookController);
    }
    customRouter() {}
}
exports.default = BookRouter;
//# sourceMappingURL=user.js.map