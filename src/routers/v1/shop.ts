import * as express from 'express';
import { CrudRouter } from '../crud';
import { shopController } from '../../controllers'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class ShopRouter extends CrudRouter<typeof shopController> {
    constructor() {
        super(shopController);
    }
    getListMiddlewares(): any[] {
        return [queryInfoMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return []
    }
}

