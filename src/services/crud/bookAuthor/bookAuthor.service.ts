import { CrudService } from '../../crudService'
import { BookAuthor } from '../../../models/bookAuthor.model'

export class BookAuthorService extends CrudService<typeof BookAuthor> {
    constructor(){
        super(BookAuthor);
    }
}