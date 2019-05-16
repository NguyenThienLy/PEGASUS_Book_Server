import { CrudController } from '../../crudController'
import { bookChartsService } from '../../../services/crud/bookCharts'


export class BookChartsController extends CrudController<typeof bookChartsService>{
    constructor(){
        super(bookChartsService);
    }
    
}