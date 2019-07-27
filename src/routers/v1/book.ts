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
        this.router.get("/slug/:slug", [queryInfoMiddleware.run()],this.route(this.getItemBySlug))
    }
    async getItemBySlug(req: Request, res: Response){
        req.queryInfo.filter = { slug: req.params.slug }
        const result = await this.controller.getItem(req.queryInfo)
        this.onSuccess(res, result)
    }   
    async search(req: Request, res: Response){
        const result = await this.controller.search({ query: req.query.query })
        this.onSuccess(res, result)
    }
    deleteMiddlewares(): any[] {
        return [ blockMiddleware.run()]
    }
}

