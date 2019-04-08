"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const bcryptjs_1 = require("bcryptjs");
const db_1 = require("./db");
const UserSchema = db_1.sequelize.define("tbl_user", {
    _id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    displayName: {
        type: Sequelize.TEXT
    },
    password: {
        type: Sequelize.TEXT
    },
    firebaseUid: {
        type: Sequelize.TEXT
    },
    firebaseUserInfo: {
        type: Sequelize.JSONB
    },
    role: {
        type: Sequelize.ENUM('admin', 'editor', 'salesman', 'read')
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
    },
    classMethods: {
        isPassword: (encodedPassword, password) => {
            return bcryptjs_1.default.compareSync(password, encodedPassword);
        }
    }
});
exports.User = UserSchema;
//# sourceMappingURL=user.js.map