import { CrudService } from '../../crudService'
import { BookCharts } from '../../../models/bookCharts.model'

export class BookChartsService extends CrudService<typeof BookCharts> {
    constructor(){
        super(BookCharts);
    }
}