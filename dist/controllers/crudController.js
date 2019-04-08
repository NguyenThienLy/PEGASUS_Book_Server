"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const baseController_1 = require("./baseController");
class CrudController extends baseController_1.BaseController {
    constructor(service) {
        super();
        this.service = service;
    }
    async getList(option) {
        return await this.service.getList(option);
    }
    async getItem(option) {
        return await this.service.getItem(option);
    }
    async create(params, option) {
        return await this.service.create(params, option);
    }
    async update(params, option) {
        return await this.service.update(params, option);
    }
    async delete(option) {
        return await this.service.delete(option);
    }
    async deleteAll(option) {
        return await this.service.deleteAll(option);
    }
}
exports.CrudController = CrudController;
//# sourceMappingURL=crudController.js.map