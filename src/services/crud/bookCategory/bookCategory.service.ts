import { CrudService } from '../../crudService'
import { BookCategory } from '../../../models/bookCategory.model'

export class BookCategoryService extends CrudService<typeof BookCategory> {
    constructor(){
        super(BookCategory);
    }
}