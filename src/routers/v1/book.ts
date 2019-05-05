import * as express from 'express';
import { CrudRouter } from '../crud';
import { bookController } from '../../controllers/crud/book'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class BookRouter extends CrudRouter<typeof bookController> {
    constructor() {
        super(bookController);
    }
    customRouter(){

    }
}

