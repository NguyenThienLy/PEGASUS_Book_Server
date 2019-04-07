import * as express from 'express';
import { CrudRouter } from '../crud';
import { postController } from '../../controllers'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class PostRouter extends CrudRouter<typeof postController> {
    constructor() {
        super(postController);
    }
    getListMiddlewares(): any[] {
        return [ queryInfoMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [ ]
    }
}

