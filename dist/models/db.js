"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const config_1 = require("../config");
const _ = require("lodash");
const option = {
    dialect: "postgresql",
    host: config_1.config.database.host
};
if (config_1.config.database.ssl === 'true') {
    _.merge(option, {
        ssl: true,
        dialectOptions: {
            ssl: {
                require: true
            }
        }
    });
}
exports.sequelize = new Sequelize(config_1.config.database.name, config_1.config.database.user, config_1.config.database.pass, option);
exports.sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
//# sourceMappingURL=db.js.map