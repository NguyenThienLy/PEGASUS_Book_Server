import * as express from 'express';
import { CrudRouter } from '../crud';
import { adminController } from '../../controllers/crud/admin'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class AdminRouter extends CrudRouter<typeof adminController> {
    constructor() {
        super(adminController);
    }
    customRouter(){
      
    }
}

