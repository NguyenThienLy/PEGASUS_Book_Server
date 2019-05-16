import * as express from 'express';
import { CrudRouter } from '../crud';
import { bookChartsItemController } from '../../controllers/crud/bookChartsItem'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class BookChartsItemRouter extends CrudRouter<typeof bookChartsItemController> {
    constructor() {
        super(bookChartsItemController);
    }
    customRouter(){

    }
}

