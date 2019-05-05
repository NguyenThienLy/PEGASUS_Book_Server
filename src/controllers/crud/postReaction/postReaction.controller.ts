import { CrudController } from '../../crudController'
import { postReactionService } from '../../../services/crud/postReaction'


export class PostReactionController extends CrudController<typeof postReactionService>{
    constructor(){
        super(postReactionService);
    }
    
}