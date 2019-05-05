"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const crudController_1 = require("../../crudController");
const publisher_1 = require("../../../services/crud/publisher");
class PublisherController extends crudController_1.CrudController {
    constructor() {
        super(publisher_1.publisherService);
    }
}
exports.PublisherController = PublisherController;
//# sourceMappingURL=publisher.controller.js.map