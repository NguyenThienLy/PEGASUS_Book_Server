"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const db_1 = require("./db");
const PostSchema = db_1.sequelize.define('tbl_post', {
    _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 }
}, {
    timestamps: true,
    freezeTableName: true,
    paranoid: false,
    defaultScope: { attributes: { exclude: ['deleted_at'] } },
    scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
});
PostSchema.associate = models => {};
exports.Post = PostSchema;
//# sourceMappingURL=post.model.js.map