import { BaseError } from '../../error/base'

export class BookChartsException extends BaseError {
    constructor(key: string, message: string, code?: number) {
        super({
            code: code || 403,
            type: `bookCharts_exception_$`,
            message
        })
    }
}

export class BookChartsErrorService {
    constructor(){
        
    }
}