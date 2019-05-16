import { BaseError } from '../../error/base'

export class BookChartsItemException extends BaseError {
    constructor(key: string, message: string, code?: number) {
        super({
            code: code || 403,
            type: `bookChartsItem_exception_$`,
            message
        })
    }
}

export class BookChartsItemErrorService {
    constructor(){
        
    }
}