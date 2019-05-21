import { CrudController } from '../../crudController'
import { bookChartsItemService } from '../../../services/crud/bookChartsItem'


export class BookChartsItemController extends CrudController<typeof bookChartsItemService>{
    constructor(){
        super(bookChartsItemService);
    }
    
}