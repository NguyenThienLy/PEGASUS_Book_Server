import { IValidateSchema } from "../routers/base";
import { utilService, errorService } from "../services";


export class BaseController {
    async validateJSON(body: any, schema: IValidateSchema) {
        const validate = await utilService.validateJSON(schema, body)
        if (!validate.isValid) {
            throw errorService.router.requestDataInvalid(validate.message)
        }
    }
}