import * as express from 'express';
import { CrudRouter } from '../crud';
import { bookCategoryController } from '../../controllers/crud/bookCategory'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class BookCategoryRouter extends CrudRouter<typeof bookCategoryController> {
    constructor() {
        super(bookCategoryController);
    }
    customRouter(){

    }
}

