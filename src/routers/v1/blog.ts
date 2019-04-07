import * as express from 'express';
import { CrudRouter } from '../crud';
import { blogController } from '../../controllers'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class BlogRouter extends CrudRouter<typeof blogController> {
    constructor() {
        super(blogController);
    }
    getListMiddlewares(): any[] {
        return [ queryInfoMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [ ]
    }
}

