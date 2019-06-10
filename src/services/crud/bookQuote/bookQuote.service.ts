import { CrudService } from '../../crudService'
import { BookQuote } from '../../../models/bookQuote.model'

export class BookQuoteService extends CrudService<typeof BookQuote> {
    constructor(){
        super(BookQuote);
    }
}