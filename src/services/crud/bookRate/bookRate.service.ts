import { CrudService } from '../../crudService'
import { BookRate } from '../../../models/bookRate.model'

export class BookRateService extends CrudService<typeof BookRate> {
    constructor(){
        super(BookRate);
    }
}