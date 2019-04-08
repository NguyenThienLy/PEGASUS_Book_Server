"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const production_1 = require("./production");
const development_1 = require("./development");
function getConfig(environment) {
    console.log(`Server running on ${environment} environment`);
    if (environment === 'development') {
        return development_1.default;
    } else if (environment === 'production') {
        return production_1.default;
    } else {
        return development_1.default;
    }
}
exports.config = getConfig(process.env.NODE_ENV);
//# sourceMappingURL=index.js.map