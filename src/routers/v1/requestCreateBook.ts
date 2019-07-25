import * as express from 'express';
import { CrudRouter } from '../crud';
import { requestCreateBookController } from '../../controllers/crud/requestCreateBook'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class RequestCreateBookRouter extends CrudRouter<typeof requestCreateBookController> {
    constructor() {
        super(requestCreateBookController);
    }
    customRouter(){

    }
}

