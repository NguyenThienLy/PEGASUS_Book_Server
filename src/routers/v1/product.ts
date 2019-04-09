import * as express from 'express';
import { CrudRouter } from '../crud';
import { productController } from '../../controllers'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class ProductRouter extends CrudRouter<typeof productController> {
    constructor() {
        super(productController);
    }
    getListMiddlewares(): any[] {
        return [ queryInfoMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [ ]
    }
}

