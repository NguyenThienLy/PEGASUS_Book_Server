"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const crudController_1 = require("../../crudController");
const book_1 = require("../../../services/crud/book");
class BookController extends crudController_1.CrudController {
    constructor() {
        super(book_1.bookService);
    }
}
exports.BookController = BookController;
//# sourceMappingURL=book.controller.js.map