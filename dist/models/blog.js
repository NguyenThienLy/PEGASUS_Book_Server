"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const db_1 = require("./db");
const index_1 = require("./index");
const BlogSchema = db_1.sequelize.define("tbl_blog", {
    _id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    name: {
        type: Sequelize.TEXT
    },
    description: {
        type: Sequelize.TEXT
    },
    appId: {
        type: Sequelize.UUID,
        references: {
            model: 'tbl_app',
            key: '_id'
        }
    },
    userId: {
        type: Sequelize.UUID,
        references: {
            model: 'tbl_user',
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
BlogSchema.associate = User => {
    BlogSchema.belongsTo(User, {
        foreignKey: 'userId',
        as: 'user'
    });
    User.hasMany(BlogSchema, {
        foreignKey: 'userId',
        as: 'blogs'
    });
    BlogSchema.belongsTo(index_1.App, {
        foreignKey: 'appId',
        as: 'app'
    });
    index_1.App.hasMany(BlogSchema, {
        foreignKey: 'appId',
        as: 'blogs'
    });
};
BlogSchema.associate(index_1.User);
exports.Blog = BlogSchema;
//# sourceMappingURL=blog.js.map