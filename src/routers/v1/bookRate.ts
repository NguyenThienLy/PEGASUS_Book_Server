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
        this.router.get('/topBookRate', [queryInfoMiddleware.run()], this.route(this.getTopBookRate))
    }
    async getTopBookRate(req: Request, res: Response){
        const result = await this.controller.getTopBookRate({
            startTime: req.query.startTime,
            endTime: req.query.endTime,
            limit: req.query.limit, 
            offset: req.query.offset
        }, req.queryInfo)
        this.onSuccessAsList(res, result)
    }
}

