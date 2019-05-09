import { BaseError } from '../../error/base'

export class {Name}Exception extends BaseError {
    constructor(key: string, message: string, code?: number) {
        super({
            code: code || 403,
            type: `{name}_exception_${key}`,
            message
        })
    }
}

export class {Name}ErrorService {
    constructor(){
        
    }
}