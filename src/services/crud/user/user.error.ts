import { BaseError } from '../../error/base'

export class UserException extends BaseError {
    constructor(key: string, message: string, code?: number) {
        super({
            code: code || 403,
            type: `user_exception_${key}`,
            message
        })
    }
}

export class UserErrorService {
    constructor(){
        
    }
    followNotAllow(){
        return new UserException('follow_not_allow',"Không được theo dõi người này",401)
    }
    
}