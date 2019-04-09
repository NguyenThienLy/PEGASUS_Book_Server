import { CrudService } from '../crudService'
import { Faq } from '../../models/index'

export class FaqService extends CrudService<typeof Faq> {
    constructor(){
        super(Faq);
    }
}