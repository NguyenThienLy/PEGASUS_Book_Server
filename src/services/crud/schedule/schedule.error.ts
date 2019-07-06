import { BaseError } from '../../error/base'

export class ScheduleException extends BaseError {
    constructor(key: string, message: string, code?: number) {
        super({
            code: code || 403,
            type: `schedule_exception_$`,
            message
        })
    }
}

export class ScheduleErrorService {
    constructor(){
        
    }
}