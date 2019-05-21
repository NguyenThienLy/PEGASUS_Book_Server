import * as express from 'express';
import { CrudRouter } from '../crud';
import { bookChartsController } from '../../controllers/crud/bookCharts'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class BookChartsRouter extends CrudRouter<typeof bookChartsController> {
    constructor() {
        super(bookChartsController);
    }
    customRouter(){

    }
}

