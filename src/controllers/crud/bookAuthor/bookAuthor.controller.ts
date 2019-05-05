import { CrudController } from '../../crudController'
import { bookAuthorService } from '../../../services/crud/bookAuthor'


export class BookAuthorController extends CrudController<typeof bookAuthorService>{
    constructor(){
        super(bookAuthorService);
    }
    
}