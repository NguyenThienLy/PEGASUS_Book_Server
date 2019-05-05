"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const fs = require("fs");
const fileNames = fs.readdirSync(__dirname);
const models = {};
fileNames.forEach(fileName => {
    if (fileName.endsWith('.model.js')) {
        const model = require(`./${fileName}`);
        _.merge(models, model);
    }
});
_.forEach(models, (value, key) => {
    value.associate(models);
});
__export(require("./db"));
//# sourceMappingURL=index.js.map