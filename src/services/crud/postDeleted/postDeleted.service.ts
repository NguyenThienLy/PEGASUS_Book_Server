import { CrudService } from '../../crudService'
import { PostDeleted } from '../../../models/postDeleted.model'

export class PostDeletedService extends CrudService<typeof PostDeleted> {
    constructor(){
        super(PostDeleted);
    }
}