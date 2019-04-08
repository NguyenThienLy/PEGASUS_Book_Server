"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jwt-simple");
const config_1 = require("../config");
const index_1 = require("./index");
class TokenService {
    async generateToken(payload = {}, secret) {
        return jwt.encode(payload, secret);
    }
    async decode(token, secret) {
        try {
            return jwt.decode(token, secret);
        } catch (error) {
            throw index_1.errorService.auth.badToken();
        }
    }
    async getCustomerToken(secret) {
        secret = secret + config_1.config.token.secret;
        return jwt.encode({ role: "customer" }, secret);
    }
    async getCompanyToken(secret) {
        secret = secret + config_1.config.token.secret;
        return jwt.encode({ role: "company" }, secret);
    }
}
exports.TokenService = TokenService;
//# sourceMappingURL=tokenService.js.map