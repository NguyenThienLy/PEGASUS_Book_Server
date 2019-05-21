import * as express from 'express';
import { CrudRouter } from '../crud';
import { userFollowController } from '../../controllers/crud/userFollow'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class UserFollowRouter extends CrudRouter<typeof userFollowController> {
    constructor() {
        super(userFollowController);
    }
    customRouter(){

    }
}

