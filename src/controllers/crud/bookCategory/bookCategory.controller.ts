import { CrudController } from '../../crudController'
import { bookCategoryService } from '../../../services/crud/bookCategory'


export class BookCategoryController extends CrudController<typeof bookCategoryService>{
    constructor(){
        super(bookCategoryService);
    }
    
}