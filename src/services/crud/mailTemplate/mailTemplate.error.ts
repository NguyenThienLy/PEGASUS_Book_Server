import { BaseError } from '../../error/base'

export class MailTemplateException extends BaseError {
    constructor(key: string, message: string, code?: number) {
        super({
            code: code || 403,
            type: `mailTemplate_exception_$`,
            message
        })
    }
}

export class MailTemplateErrorService {
    constructor(){
        
    }
}