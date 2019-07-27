import { BaseError } from '../../error/base'

export class BookException extends BaseError {
    constructor(key: string, message: string, code?: number) {
        super({
            code: code || 403,
            type: `book_exception_${key}`,
            message
        })
    }
}

export class BookErrorService {
    constructor(){
        
    }
    static bookBlocked(){
        return new BookException('book_blocked',"Thông tin sách đã được khoá, không thể cập nhật lúc này",401)
    }
    
}