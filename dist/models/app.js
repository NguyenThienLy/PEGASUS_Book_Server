"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const db_1 = require("./db");
const AppSchema = db_1.sequelize.define("tbl_app", {
    _id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    name: {
        type: Sequelize.STRING
    },
    ownerId: {
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
AppSchema.associate = User => {
    AppSchema.belongsTo(User, {
        foreignKey: 'ownerId',
        as: 'user'
    });
    User.hasMany(AppSchema, {
        foreignKey: 'ownerId',
        as: 'apps'
    });
};
exports.App = AppSchema;
//# sourceMappingURL=app.js.map