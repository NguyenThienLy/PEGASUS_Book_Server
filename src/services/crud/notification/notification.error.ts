import { BaseError } from '../../error/base'

export class NotificationException extends BaseError {
    constructor(key: string, message: string, code?: number) {
        super({
            code: code || 403,
            type: `notification_exception_$`,
            message
        })
    }
}

export class NotificationErrorService {
    constructor(){
        
    }
    haveRegisted(){
        return new NotificationException('notification_have_registed',"Đã đăng ký nhận thông báo từ trước",401)
    }
}