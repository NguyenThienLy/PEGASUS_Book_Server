"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const baseMiddleware_1 = require("./baseMiddleware");
const _ = require("lodash");
const config_1 = require("../config");
class QueryInfoMiddleware extends baseMiddleware_1.BaseMiddleware {
    async use(req, res, next) {
        const filter = this._parseFilter(req);
        const order = this._parseOrder(req);
        const page = parseInt(req.query['page'] || 1);
        const limit = parseInt(req.query['limit'] || config_1.config.database.defaultPageSize);
        const offset = parseInt(req.query['offset']) || (page - 1) * limit;
        const fields = this._parseFields(req);
        if (fields.attributes) {
            fields.attributes = _.union(['_id', 'updatedAt'], fields.attributes);
        }
        req.queryInfo = _.merge({
            filter,
            limit,
            offset,
            order
        }, fields, {
            scope: ["defaultScope"]
        });
        next();
    }
    /**
     * Filter param only accept <and> query. <or> will be supported later
     * Format: [[key, operator, value], [key, operator, value]]
     */
    _parseFilter(req) {
        let filter = req.query['filter'];
        try {
            filter = JSON.parse(filter);
        } catch (ignore) {
            filter = undefined;
        }
        return filter || {};
    }
    /**
     * Format: [[key, order], [key, order]]
     */
    _parseOrder(req) {
        let order = req.query['order'];
        try {
            order = JSON.parse(order);
        } catch (ignore) {
            order = undefined;
        }
        return order || [['createdAt', 'desc']];
    }
    _parseFields(req) {
        let fields = req.query['fields'];
        try {
            fields = JSON.parse(fields);
        } catch (ignore) {
            fields = [];
        }
        try {
            return this._parseAttribute(fields);
        } catch (err) {
            return null;
        }
    }
    _parseAttribute(attrs) {
        let attributes = [];
        let includes = [];
        let isGetAll = false;
        let isSetParanoid = false;
        let where = undefined;
        _.forEach(attrs, function (f) {
            if (typeof f === "string") {
                switch (f) {
                    case '$all':
                        isGetAll = true;
                        break;
                    case '$paranoid':
                        isSetParanoid = true;
                        break;
                    default:
                        attributes.push(f);
                }
            } else if (typeof f === "object" && !Array.isArray(f)) {
                _.forEach(f, ((value, name) => {
                    switch (name) {
                        case '$filter':
                            where = _.merge({}, where, value);
                            break;
                        default:
                            includes.push({
                                [name]: value
                            });
                    }
                }).bind(this));
            }
        });
        let include = this._parseInclude(includes);
        const result = {
            include: include,
            distinct: include ? true : false
        };
        if (where) result.where = where;
        if (!isGetAll) {
            result.attributes = attributes;
        }
        if (isSetParanoid) {
            result.paranoid = false;
        }
        return result;
    }
    _parseInclude(includes) {
        if (includes.length === 0) return includes;
        let associates = [];
        _.forEach(includes, (i => {
            _.forEach(i, ((attrs, name) => {
                let associate = Object.assign({
                    association: name
                }, this._parseAttribute(attrs));
                associates.push(associate);
            }).bind(this));
        }).bind(this));
        return associates;
    }
}
exports.QueryInfoMiddleware = QueryInfoMiddleware;
//# sourceMappingURL=queryMiddleware.js.map