import * as express from 'express';
import { CrudRouter } from '../crud';
import { bookRateController } from '../../controllers/crud/bookRate'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class BookRateRouter extends CrudRouter<typeof bookRateController> {
    constructor() {
        super(bookRateController);
    }
    customRouter(){

    }
}

