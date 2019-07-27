import * as express from 'express';
import { CrudRouter } from '../crud';
import { userSavedController } from '../../controllers/crud/userSaved'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class UserSavedRouter extends CrudRouter<typeof userSavedController> {
    constructor() {
        super(userSavedController);
    }
    customRouter(){

    }
}

