import { CrudController } from '../crudController'
import { faqCategoryService } from '../../services/index'


export class FaqCategoryController extends CrudController<typeof faqCategoryService>{
    constructor(){
        super(faqCategoryService);
    }
    
}