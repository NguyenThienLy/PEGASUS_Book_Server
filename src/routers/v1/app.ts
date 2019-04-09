import * as express from 'express';
import { CrudRouter } from '../crud';
import { appController } from '../../controllers'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class AppRouter extends CrudRouter<typeof appController> {
    constructor() {
        super(appController);
    }
    getListMiddlewares(): any[] {
        return [ queryInfoMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [ ]
    }
}

