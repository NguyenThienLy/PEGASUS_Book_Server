import { CrudController } from '../crudController'
import { productCategoryService } from '../../services/index'


export class ProductCategoryController extends CrudController<typeof productCategoryService>{
    constructor(){
        super(productCategoryService);
    }
    
}