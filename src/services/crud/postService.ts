import { CrudService } from '../crudService'
import { Post, PostModel } from '../../models/index'

export class PostService extends CrudService<typeof Post> {
    constructor(){
        super(Post);
    }
}