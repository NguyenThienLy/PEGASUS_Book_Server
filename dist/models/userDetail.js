"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const db_1 = require("./db");
const UserDetailSchema = db_1.sequelize.define("UserDetail", {
    _id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    careers: {
        type: Sequelize.ARRAY(Sequelize.ENUM('technology', 'education', 'agriculture', 'marketing', "foodAndBeverage"))
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
exports.UserDetail = UserDetailSchema;
//# sourceMappingURL=userDetail.js.map