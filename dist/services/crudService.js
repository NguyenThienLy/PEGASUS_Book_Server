"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class CrudService {
    constructor(model) {
        this.model = model;
    }
    async exec(promise, option) {
        try {
            let result;
            if (promise.hasOwnProperty("exec")) {
                result = await promise.exec();
            } else {
                result = await promise;
            }
            if (result === undefined || result === null) console.log("record not found");
            //throw errorService.database.recordNotFound()
            return result;
        } catch (err) {
            console.log("Error: ", err);
            throw err;
            // if (err instanceof BaseError) throw err
            // if (config.server.debug) {
            //     if (err.errors && err.errors[0]) {
            //         throw errorService.database.queryFail(err.errors[0].message)
            //     } else {
            //       throw errorService.database.queryFail(err.message)
            //     }
            // } else {
            //     throw err
            // }
        }
    }
    async getList(option = {
        filter: {},
        limit: 50,
        offset: 0
    }) {
        const queryScript = this.applyQueryOptions(option);
        let query = this.model.findAndCount(queryScript);
        return await this.exec(query);
    }
    async getItem(option) {
        const queryScript = this.applyQueryOptions(option);
        let query = this.model.findOne(queryScript);
        return await this.exec(query);
    }
    async create(params, option) {
        const query = this.model.create(params);
        return await this.exec(query);
    }
    async update(params, option) {
        // const query = this.model.findOneAndUpdate(option.filter, params, { new: true })
        const query = this.model.update(params, { where: option.filter });
        return await this.exec(query);
    }
    async delete(option) {
        let query = this.model.findOne();
        query = this.applyQueryOptions(option);
        const item = await this.exec(query);
        return this.exec(item.destroy());
    }
    async deleteAll(option) {
        let query = this.model.destroy(option.filter);
        query = this.applyQueryOptions(option);
        return await this.exec(query);
    }
    async rawQuery(query, option) {
        return await models_1.sequelize.query(query, option);
    }
    applyQueryOptions(option) {
        const query = {
            where: option.filter,
            limit: option.limit,
            offset: option.offset,
            order: option.order,
            attributes: option.attributes,
            include: option.include,
            paranoid: option.paranoid
        };
        return query;
    }
}
exports.CrudService = CrudService;
//# sourceMappingURL=crudService.js.map