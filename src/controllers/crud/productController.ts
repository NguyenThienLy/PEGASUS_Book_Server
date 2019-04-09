import { CrudController } from '../crudController'
import { productService } from '../../services/index'


export class ProductController extends CrudController<typeof productService>{
    constructor(){
        super(productService);
    }
    
}