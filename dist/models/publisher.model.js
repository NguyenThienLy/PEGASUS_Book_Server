"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const db_1 = require("./db");
const PublisherSchema = db_1.sequelize.define('tbl_publisher', {
    _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 }
}, {
    timestamps: true,
    freezeTableName: true,
    paranoid: false,
    defaultScope: { attributes: { exclude: ['deleted_at'] } },
    scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
});
PublisherSchema.associate = models => {};
exports.Publisher = PublisherSchema;
//# sourceMappingURL=publisher.model.js.map