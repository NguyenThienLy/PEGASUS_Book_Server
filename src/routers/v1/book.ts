import * as express from 'express';
import { CrudRouter } from '../crud';
import { bookController } from '../../controllers/crud/book'
import { queryInfoMiddleware, blockMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class BookRouter extends CrudRouter<typeof bookController> {
    constructor() {
        super(bookController);
    }
    customRouter(){
        this.router.get("/search", this.route(this.search))
    }
    async search(req: Request, res: Response){
        const result = await this.controller.search({ query: req.query.query })
        this.onSuccess(res, result)
    }
    deleteMiddlewares(): any[] {
        return [ blockMiddleware.run()]
    }
}

