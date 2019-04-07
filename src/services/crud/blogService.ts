import { CrudService } from '../crudService'
import { Blog, BlogModel } from '../../models/index'

export class BlogService extends CrudService<typeof Blog> {
    constructor(){
        super(Blog);
    }
}