import { CrudService } from '../crudService'
import { Promotion, PromotionModel } from '../../models'

export class PromotionService extends CrudService<typeof Promotion> {
    constructor(){
        super(Promotion);
    }
}