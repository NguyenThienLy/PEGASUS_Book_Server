import * as express from 'express';
import { CrudRouter } from '../crud';
import { bookQuoteController } from '../../controllers/crud/bookQuote'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class BookQuoteRouter extends CrudRouter<typeof bookQuoteController> {
    constructor() {
        super(bookQuoteController);
    }
    customRouter(){

    }
}

