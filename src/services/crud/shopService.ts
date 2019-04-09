import { CrudService } from '../crudService'
import { Shop } from '../../models/index'

export class ShopService extends CrudService<typeof Shop> {
    constructor(){
        super(Shop);
    }
}