import { BaseError } from '../../error/base'

export class PostReactionException extends BaseError {
    constructor(key: string, message: string, code?: number) {
        super({
            code: code || 403,
            type: `post_reaction_exception_${key}`,
            message
        })
    }
}

export class PostReactionErrorService {
    constructor(){
        
    }
    cantUnreactionPost(){
        return new PostReactionException('cant_unreaction_post',"Không bỏ yêu thích bài viết này được",401)
    }
    
}