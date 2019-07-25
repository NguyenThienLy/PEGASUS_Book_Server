import { BaseError } from '../../error/base'

export class RequestCreateBookException extends BaseError {
    constructor(key: string, message: string, code?: number) {
        super({
            code: code || 403,
            type: `requestCreateBook_exception_$`,
            message
        })
    }
}

export class RequestCreateBookErrorService {
    constructor(){
        
    }
}