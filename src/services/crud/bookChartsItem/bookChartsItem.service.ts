import { CrudService } from '../../crudService'
import { BookChartsItem } from '../../../models/bookChartsItem.model'

export class BookChartsItemService extends CrudService<typeof BookChartsItem> {
    constructor(){
        super(BookChartsItem);
    }
}