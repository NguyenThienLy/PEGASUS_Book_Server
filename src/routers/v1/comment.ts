import * as express from 'express';
import { CrudRouter } from '../crud';
import { commentController } from '../../controllers/crud/comment'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class CommentRouter extends CrudRouter<typeof commentController> {
    constructor() {
        super(commentController);
    }
    customRouter(){

    }
}

