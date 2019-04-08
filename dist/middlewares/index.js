"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const firebaseAuthMiddleware_1 = require("./firebaseAuthMiddleware");
const authMiddleware_1 = require("./authMiddleware");
const queryMiddleware_1 = require("./queryMiddleware");
const blockMiddleware_1 = require("./blockMiddleware");
const firebaseAuthInfoMiddleware = new firebaseAuthMiddleware_1.FirebaseAuthInfoMiddleware();
exports.firebaseAuthInfoMiddleware = firebaseAuthInfoMiddleware;
const authInfoMiddleware = new authMiddleware_1.AuthInfoMiddleware();
exports.authInfoMiddleware = authInfoMiddleware;
const queryInfoMiddleware = new queryMiddleware_1.QueryInfoMiddleware();
exports.queryInfoMiddleware = queryInfoMiddleware;
const blockMiddleware = new blockMiddleware_1.BlockMiddleware();
exports.blockMiddleware = blockMiddleware;
//# sourceMappingURL=index.js.map