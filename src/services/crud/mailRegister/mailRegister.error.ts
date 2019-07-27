import { BaseError } from '../../error/base'

export class MailRegisterException extends BaseError {
    constructor(key: string, message: string, code?: number) {
        super({
            code: code || 403,
            type: `mailRegister_exception_$`,
            message
        })
    }
}

export class MailRegisterErrorService {
    constructor(){
        
    }
}