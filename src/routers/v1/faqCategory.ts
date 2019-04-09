import * as express from 'express';
import { CrudRouter } from '../crud';
import { faqCategoryController } from '../../controllers'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class FaqCategoryRouter extends CrudRouter<typeof faqCategoryController> {
    constructor() {
        super(faqCategoryController);
    }
    getListMiddlewares(): any[] {
        return [ queryInfoMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [ ]
    }
}

