"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const crud_1 = require("../crud");
const publisher_1 = require("../../controllers/crud/publisher");
class PublisherRouter extends crud_1.CrudRouter {
    constructor() {
        super(publisher_1.publisherController);
    }
    customRouter() {}
}
exports.default = PublisherRouter;
//# sourceMappingURL=publisher.js.map