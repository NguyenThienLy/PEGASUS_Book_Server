import { CrudService } from '../crudService'
import { ProductCategory } from '../../models/index'

export class ProductCategoryService extends CrudService<typeof ProductCategory> {
    constructor(){
        super(ProductCategory);
    }
}