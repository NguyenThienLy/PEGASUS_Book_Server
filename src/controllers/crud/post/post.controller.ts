import { CrudController } from '../../crudController'
import { postService } from '../../../services/crud/post'


export class PostController extends CrudController<typeof postService>{
    constructor(){
        super(postService);
    }
    
}