import { CrudController } from '../crudController'
import { faqService } from '../../services/index'


export class FaqController extends CrudController<typeof faqService>{
    constructor(){
        super(faqService);
    }
    
}