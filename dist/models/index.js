"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const user_1 = require("./user");
app_1.App.associate(user_1.User);
__export(require("./db"));
__export(require("./app"));
__export(require("./user"));
__export(require("./userDetail"));
__export(require("./blog"));
__export(require("./post"));
//# sourceMappingURL=index.js.map