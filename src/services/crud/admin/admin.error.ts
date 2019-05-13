import { BaseError } from '../../error/base'

export class AdminException extends BaseError {
    constructor(key: string, message: string, code?: number) {
        super({
            code: code || 403,
            type: `admin_exception_$`,
            message
        })
    }
}

export class AdminErrorService {
    constructor(){
        
    }
}