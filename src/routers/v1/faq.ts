import * as express from 'express';
import { CrudRouter } from '../crud';
import { faqController } from '../../controllers'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class FaqRouter extends CrudRouter<typeof faqController> {
    constructor() {
        super(faqController);
    }
    getListMiddlewares(): any[] {
        return [ queryInfoMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [ ]
    }
}

