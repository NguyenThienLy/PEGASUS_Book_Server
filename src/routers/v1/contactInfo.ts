import * as express from 'express';
import { CrudRouter } from '../crud';
import { contactInfoController } from '../../controllers'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class ContactInfoRouter extends CrudRouter<typeof contactInfoController> {
    constructor() {
        super(contactInfoController);
    }
    getListMiddlewares(): any[] {
        return [ queryInfoMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [ ]
    }
}

