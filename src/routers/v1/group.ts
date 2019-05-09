import * as express from 'express';
import { CrudRouter } from '../crud';
import { groupController } from '../../controllers/crud/group'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class GroupRouter extends CrudRouter<typeof groupController> {
    constructor() {
        super(groupController);
    }
    customRouter(){

    }
}

