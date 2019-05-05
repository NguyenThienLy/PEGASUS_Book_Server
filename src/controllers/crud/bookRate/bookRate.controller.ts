import { CrudController } from '../../crudController'
import { bookRateService } from '../../../services/crud/bookRate'


export class BookRateController extends CrudController<typeof bookRateService>{
    constructor(){
        super(bookRateService);
    }
    
}