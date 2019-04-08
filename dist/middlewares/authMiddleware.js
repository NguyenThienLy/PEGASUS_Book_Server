"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
const baseMiddleware_1 = require("./baseMiddleware");
class AuthInfoMiddleware extends baseMiddleware_1.BaseMiddleware {
    async use(req, res, next, providers) {
        try {
            req.authInfo = {
                companyId: req.headers["company_id"],
                companyToken: req.headers["company_token"]
            };
            req.firebaseUserInfo = await services_1.firebaseService.verifyIdToken(req.headers["access_token"]);
            // req.authInfo.company = await tokenService.decode()
            next();
        } catch (err) {
            throw services_1.errorService.auth.unauthonized();
        }
    }
}
exports.AuthInfoMiddleware = AuthInfoMiddleware;
//# sourceMappingURL=authMiddleware.js.map