"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const db_1 = require("./db");
const index_1 = require("./index");
const PostSchema = db_1.sequelize.define("tbl_post", {
    _id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    title: {
        type: Sequelize.STRING
    },
    body: {
        type: Sequelize.STRING
    },
    thumb: {
        type: Sequelize.STRING
    },
    blogId: {
        type: Sequelize.UUID,
        references: {
            model: 'tbl_blog',
            key: '_id'
        }
    }
}, {
    timestamps: true,
    freezeTableName: true,
    paranoid: false,
    defaultScope: {
        attributes: { exclude: ['deleted_at'] }
    },
    scopes: {
        deleted: {
            where: { deleted_at: { $ne: null } },
            paranoid: false
        }
    }
});
//sequelize.sync()
PostSchema.associate = Blog => {
    PostSchema.belongsTo(Blog, {
        foreignKey: 'blogId',
        as: 'user'
    });
    Blog.hasMany(PostSchema, {
        foreignKey: 'blogId',
        as: 'posts'
    });
};
PostSchema.associate(index_1.Blog);
exports.Post = PostSchema;
//# sourceMappingURL=post.js.map