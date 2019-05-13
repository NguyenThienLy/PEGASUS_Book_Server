import { CrudController } from '../../crudController'
import { postDeletedService } from '../../../services/crud/postDeleted'


export class PostDeletedController extends CrudController<typeof postDeletedService>{
    constructor(){
        super(postDeletedService);
    }
    
}