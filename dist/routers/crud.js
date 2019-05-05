"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const _ = require("lodash");
const base_1 = require("./base");
const middlewares_1 = require("../middlewares");
class CrudRouter extends base_1.BaseRouter {
    constructor(controller) {
        super();
        this.controller = controller;
        this.router = express.Router();
        this.customRouter();
        this.defaultRouter();
    }
    defaultRouter() {
        this.router.get('/', this.getListMiddlewares(), this.route(this.getList));
        this.router.get('/:_id', this.getItemMiddlewares(), this.route(this.getItem));
        this.router.post('/', this.createMiddlewares(), this.route(this.create));
        this.router.put('/:_id', this.updateMiddlewares(), this.route(this.update));
        this.router.delete('/:_id', this.deleteMiddlewares(), this.route(this.delete));
        this.router.delete('/', this.deleteAllMiddlewares(), this.route(this.deleteAll));
    }
    customRouter() {}
    getListMiddlewares() {
        return [middlewares_1.queryInfoMiddleware.run()];
    }
    async getList(req, res) {
        console.log("query info: ", req.queryInfo);
        const result = await this.controller.getList(req.queryInfo);
        this.onSuccessAsList(res, result, undefined, req.queryInfo);
    }
    getItemMiddlewares() {
        return [
        // firebaseAuthInfoMiddleware.run(),
        middlewares_1.queryInfoMiddleware.run()];
    }
    async getItem(req, res) {
        const { _id } = req.params;
        req.queryInfo.filter._id = _id;
        const result = await this.controller.getItem(req.queryInfo);
        this.onSuccess(res, result);
    }
    createMiddlewares() {
        return [];
    }
    async create(req, res) {
        const result = await this.controller.create(req.body);
        this.onSuccess(res, result);
    }
    updateMiddlewares() {
        return [middlewares_1.queryInfoMiddleware.run()];
    }
    async update(req, res) {
        const { _id } = req.params;
        const result = await this.controller.update(req.body, {
            filter: { _id }
        });
        this.onSuccess(res, result);
    }
    deleteMiddlewares() {
        return [middlewares_1.queryInfoMiddleware.run()];
    }
    async delete(req, res) {
        const { _id } = req.params;
        const result = await this.controller.delete({
            filter: { _id }
        });
        this.onSuccess(res, result);
    }
    deleteAllMiddlewares() {
        return [middlewares_1.queryInfoMiddleware.run()];
    }
    async deleteAll(req, res) {
        if (_.has(req.query, "items")) {
            req.query.items = JSON.parse(req.query.items) || {};
        }
        await this.validateJSON(req.query, {
            type: "object",
            properties: {
                items: {
                    type: 'array',
                    uniqueItems: true,
                    minItems: 1,
                    items: { type: "string" }
                }
            },
            required: ['items'],
            additionalProperties: false
        });
        const { items } = req.query;
        const result = await this.controller.deleteAll({
            filter: { _id: { $in: items } }
        });
        this.onSuccess(res, result);
    }
}
exports.CrudRouter = CrudRouter;
//# sourceMappingURL=crud.js.map