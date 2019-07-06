import * as express from 'express';
import { CrudRouter } from '../crud';
import { bookChartsController } from '../../controllers/crud/bookCharts'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'
import { BookChartsHelper } from '../../services/crud/bookCharts/bookCharts.helper';

export default class BookChartsRouter extends CrudRouter<typeof bookChartsController> {
    constructor() {
        super(bookChartsController);
    }
    customRouter(){
        this.router.get("/test", this.route(this.test))
    }
    async test(req: Request, res: Response){
        BookChartsHelper.getInstance().updateCharts()
        this.onSuccess(res)
    }
}

