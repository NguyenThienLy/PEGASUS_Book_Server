import { CrudService } from '../../crudService'
import { Book } from '../../../models/book.model'

export class BookService extends CrudService<typeof Book> {
    constructor(){
        super(Book);
    }
}