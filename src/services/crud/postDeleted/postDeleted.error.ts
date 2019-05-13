import { BaseError } from '../../error/base'

export class PostDeletedException extends BaseError {
    constructor(key: string, message: string, code?: number) {
        super({
            code: code || 403,
            type: `postDeleted_exception_$`,
            message
        })
    }
}

export class PostDeletedErrorService {
    constructor(){
        
    }
}