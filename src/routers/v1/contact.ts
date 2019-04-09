import * as express from 'express';
import { CrudRouter } from '../crud';
import { contactController } from '../../controllers'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class ContactRouter extends CrudRouter<typeof contactController> {
    constructor() {
        super(contactController);
    }
    getListMiddlewares(): any[] {
        return [ queryInfoMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [ ]
    }
}

