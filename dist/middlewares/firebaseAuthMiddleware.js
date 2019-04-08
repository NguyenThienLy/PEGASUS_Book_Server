"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const baseMiddleware_1 = require("./baseMiddleware");
class FirebaseAuthInfoMiddleware extends baseMiddleware_1.BaseMiddleware {
    async use(req, res, next, providers) {
        try {
            req.firebaseUserInfo = await services_1.firebaseService.verifyIdToken(req.headers["access_token"]);
            next();
        } catch (err) {
            throw services_1.errorService.auth.unauthonized();
        }
    }
}
exports.FirebaseAuthInfoMiddleware = FirebaseAuthInfoMiddleware;
//# sourceMappingURL=firebaseAuthMiddleware.js.map