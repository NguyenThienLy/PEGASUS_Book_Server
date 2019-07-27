import { BaseError } from '../../error/base'

export class NotificationRegisterException extends BaseError {
    constructor(key: string, message: string, code?: number) {
        super({
            code: code || 403,
            type: `notificationRegister_exception_$`,
            message
        })
    }
}

export class NotificationRegisterErrorService {
    constructor(){
        
    }
}