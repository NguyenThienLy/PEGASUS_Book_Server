import { CrudController } from '../../crudController'
import { bookService } from '../../../services/crud/book'


export class BookController extends CrudController<typeof bookService>{
    constructor(){
        super(bookService);
    }
    
}