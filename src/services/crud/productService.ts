import { CrudService } from '../crudService'
import { Product } from '../../models/index'

export class ProductService extends CrudService<typeof Product> {
    constructor(){
        super(Product);
    }
}