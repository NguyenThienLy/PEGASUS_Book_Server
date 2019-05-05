"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const crudService_1 = require("../../crudService");
const publisher_model_1 = require("../../../models/publisher.model");
class PublisherService extends crudService_1.CrudService {
    constructor() {
        super(publisher_model_1.Publisher);
    }
}
exports.PublisherService = PublisherService;
//# sourceMappingURL=publisher.service.js.map