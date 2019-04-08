"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const crypto = require("crypto");
const Ajv = require("ajv");
const AjvError = require("ajv-errors");
const AjvKeyWords = require("ajv-keywords");
class UtilService {
    validateJSON(schema, json = {}) {
        const ajv = new Ajv({ allErrors: true, jsonPointers: true });
        AjvError(ajv, { singleError: true });
        AjvKeyWords(ajv, ['switch']);
        const valid = ajv.validate(schema, json);
        return {
            isValid: valid,
            message: ajv.errorsText()
        };
    }
    async hashParams(info) {
        console.log(info);
        return crypto.createHash('sha256').update(info, 'utf8').digest('hex');
    }
    async parseMessengeWithInfo(params) {
        let { message, info } = params;
        const regex = /({|})/g;
        const regex2 = /({{\w+}})|({{\w+(?:\.\w+)+)}}/g;
        if (regex.test(message)) {
            const replaceText = message.match(regex2);
            for (var item of replaceText) {
                item = item.replace(regex, '');
                message = message.replace(item, _.get(info, item));
            }
            message = message.replace(regex, '');
        }
        return message;
    }
}
exports.UtilService = UtilService;
//# sourceMappingURL=utilService.js.map