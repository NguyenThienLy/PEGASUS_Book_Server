import { BaseError } from '../../error/base'

export class UserSaveCollectionException extends BaseError {
    constructor(key: string, message: string, code?: number) {
        super({
            code: code || 403,
            type: `userSaveCollection_exception_$`,
            message
        })
    }
}

export class UserSaveCollectionErrorService {
    constructor(){
        
    }
}