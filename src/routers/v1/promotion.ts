import * as express from 'express';
import { CrudRouter } from '../crud';
import { promotionController } from '../../controllers'

export default class PromotionRouter extends CrudRouter<typeof promotionController> {
    constructor() {
        super(promotionController);
    }
}

