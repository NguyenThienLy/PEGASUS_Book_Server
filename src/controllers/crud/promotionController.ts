import { CrudController } from '../crudController'
import { promotionService } from '../../services'

export class PromotionController extends CrudController<typeof promotionService> {
    constructor() {
        super(promotionService)
    }
}