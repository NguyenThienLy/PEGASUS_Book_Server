import * as express from 'express';
import { CrudRouter } from '../crud';
import { postReactionController } from '../../controllers/crud/postReaction'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class PostReactionRouter extends CrudRouter<typeof postReactionController> {
    constructor() {
        super(postReactionController);
    }
    customRouter(){

    }
}

