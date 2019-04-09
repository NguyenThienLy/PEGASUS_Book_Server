import { CrudController } from '../crudController'
import { shopService } from '../../services/index'


export class ShopController extends CrudController<typeof shopService>{
    constructor() {
        super(shopService);
    }

}