import * as express from 'express';
import { CrudRouter } from '../crud';
import { bookAuthorController } from '../../controllers/crud/bookAuthor'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class BookAuthorRouter extends CrudRouter<typeof bookAuthorController> {
    constructor() {
        super(bookAuthorController);
    }
    customRouter(){

    }
}

