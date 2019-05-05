import { CrudController } from '../../crudController'
import { commentService } from '../../../services/crud/comment'


export class CommentController extends CrudController<typeof commentService>{
    constructor(){
        super(commentService);
    }
    
}