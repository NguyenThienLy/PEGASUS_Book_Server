import * as express from 'express';
import { CrudRouter } from '../crud';
import { postDeletedController } from '../../controllers/crud/postDeleted'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class PostDeletedRouter extends CrudRouter<typeof postDeletedController> {
    constructor() {
        super(postDeletedController);
    }
    customRouter(){

    }
}

