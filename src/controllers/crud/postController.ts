import { CrudController } from '../crudController'
import { postService } from '../../services/index'


export class PostController extends CrudController<typeof postService>{
    constructor(){
        super(postService);
    }
    
}