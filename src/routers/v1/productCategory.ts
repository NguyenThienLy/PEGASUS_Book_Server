import * as express from 'express';
import { CrudRouter } from '../crud';
import { productCategoryController } from '../../controllers'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class ProductCategoryRouter extends CrudRouter<typeof productCategoryController> {
    constructor() {
        super(productCategoryController);
    }
    getListMiddlewares(): any[] {
        return [ queryInfoMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [ ]
    }
}

