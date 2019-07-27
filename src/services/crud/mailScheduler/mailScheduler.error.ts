import { BaseError } from '../../error/base'

export class MailSchedulerException extends BaseError {
    constructor(key: string, message: string, code?: number) {
        super({
            code: code || 403,
            type: `mailScheduler_exception_$`,
            message
        })
    }
}

export class MailSchedulerErrorService {
    constructor(){
        
    }
}