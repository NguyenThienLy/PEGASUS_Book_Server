import { CrudService } from '../../crudService'
import { RequestCreateBook } from '../../../models/requestCreateBook.model'

export class RequestCreateBookService extends CrudService<typeof RequestCreateBook> {
    constructor(){
        super(RequestCreateBook);
    }
}