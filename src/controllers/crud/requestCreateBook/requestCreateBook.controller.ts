import { CrudController } from '../../crudController'
import { requestCreateBookService } from '../../../services/crud/requestCreateBook'


export class RequestCreateBookController extends CrudController<typeof requestCreateBookService>{
    constructor(){
        super(requestCreateBookService);
    }
    
}