import { CrudController } from '../../crudController'
import { bookQuoteService } from '../../../services/crud/bookQuote'


export class BookQuoteController extends CrudController<typeof bookQuoteService>{
    constructor(){
        super(bookQuoteService);
    }
    
}