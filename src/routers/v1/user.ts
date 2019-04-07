import * as express from 'express';
import { CrudRouter } from '../crud';
import { userController } from '../../controllers'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class UserRouter extends CrudRouter<typeof userController> {
    constructor() {
        super(userController);
    }
    getListMiddlewares(): any[] {
        return [ queryInfoMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [ ]
    }
}

