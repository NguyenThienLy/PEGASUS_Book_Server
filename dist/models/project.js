"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const db_1 = require("./db");
const index_1 = require("./index");
const ProjectSchema = db_1.sequelize.define("Project", {
    _id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    coverImage: {
        type: Sequelize.STRING
    },
    avatarImage: {
        type: Sequelize.STRING,
        defaultValue: 0
    }
});
//sequelize.sync()
ProjectSchema.belongsTo(index_1.User);
exports.Project = ProjectSchema;
//# sourceMappingURL=project.js.map