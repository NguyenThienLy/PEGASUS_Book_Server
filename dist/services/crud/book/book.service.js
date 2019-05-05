"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const crudService_1 = require("../../crudService");
const book_model_1 = require("../../../models/book.model");
class BookService extends crudService_1.CrudService {
    constructor() {
        super(book_model_1.Book);
    }
}
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map