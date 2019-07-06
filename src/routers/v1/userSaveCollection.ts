import * as express from 'express';
import { CrudRouter } from '../crud';
import { userSaveCollectionController } from '../../controllers/crud/userSaveCollection'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class UserSaveCollectionRouter extends CrudRouter<typeof userSaveCollectionController> {
    constructor() {
        super(userSaveCollectionController);
    }
    customRouter(){

    }
}

