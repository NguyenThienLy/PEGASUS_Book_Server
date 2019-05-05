import { CrudService } from '../../crudService'
import { Post } from '../../../models/post.model'

export class PostService extends CrudService<typeof Post> {
    constructor(){
        super(Post);
    }
}