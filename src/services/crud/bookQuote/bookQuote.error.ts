import { BaseError } from '../../error/base'

export class BookQuoteException extends BaseError {
    constructor(key: string, message: string, code?: number) {
        super({
            code: code || 403,
            type: `bookQuote_exception_$`,
            message
        })
    }
}

export class BookQuoteErrorService {
    constructor(){
        
    }
}