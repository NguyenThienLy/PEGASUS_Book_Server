import { CrudService } from '../../crudService'
import { Comment } from '../../../models/comment.model'

export class CommentService extends CrudService<typeof Comment> {
    constructor(){
        super(Comment);
    }
}