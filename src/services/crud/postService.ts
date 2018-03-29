import { CrudService } from '../crudService'
import { Post, PostModel } from '../../models'
import * as mongoose from 'mongoose'

export class PostService extends CrudService<typeof Post> {
    constructor(){
        super(Post);
    }
}