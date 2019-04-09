import * as express from 'express';
import { CrudRouter } from '../crud';
import { appUserController } from '../../controllers'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class AppUserRouter extends CrudRouter<typeof appUserController> {
    constructor() {
        super(appUserController);
    }
    getListMiddlewares(): any[] {
        return [ queryInfoMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [ ]
    }
}

