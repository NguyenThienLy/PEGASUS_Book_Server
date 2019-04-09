import { CrudService } from '../crudService'
import { FaqCategory } from '../../models/index'

export class FaqCategoryService extends CrudService<typeof FaqCategory> {
    constructor(){
        super(FaqCategory);
    }
}