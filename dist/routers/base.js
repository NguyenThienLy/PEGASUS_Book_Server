"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const index_1 = require("../services/index");
const services_1 = require("../services");
const config_1 = require("../config");
class BaseRouter {
    onError(res, error) {
        if (!error.options) {
            console.log("UNKNOW ERROR", error);
            res.status(400).json(error.message);
        } else {
            const err = services_1.errorService.router.somethingWentWrong();
            res.status(err.options.code).json(err.options);
        }
    }
    onSuccess(res, object = {}, extras = {}) {
        object = object || {};
        if (Object.keys(object).length === 0) {
            res.status(200).json({ code: 200 });
        } else {
            res.status(200).json({
                code: 200,
                result: Object.assign({
                    object
                }, extras)
            });
        }
    }
    onSuccessAsList(res, objects = [], extras = {}, option = {
        offset: 0, limit: config_1.config.database.defaultPageSize
    }) {
        if (objects.toJSON) {
            objects = objects.toJSON();
        }
        const page = _.floor(option.offset / option.limit) + 1;
        res.json({
            code: 200,
            results: Object.assign({
                objects
            }, extras),
            pagination: {
                'current_page': page,
                'next_page': page + 1,
                'prev_page': page - 1,
                'limit': option.limit
            }
        });
    }
    async validateJSON(body, schema) {
        const validate = await index_1.utilService.validateJSON(schema, body);
        if (!validate.isValid) {
            console.log("Body isValid");
        }
    }
    route(func) {
        return (req, res) => func.bind(this)(req, res).catch(error => {
            this.onError(res, error);
        });
    }
}
exports.BaseRouter = BaseRouter;
//# sourceMappingURL=base.js.map