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
        this.router.get("/:_id/posts", [ queryInfoMiddleware.run()], this.route(this.getPosts))
        this.router.get("/populars", [ queryInfoMiddleware.run()], this.route(this.getPopulars))
        this.router.get("/slug/:slug", [queryInfoMiddleware.run()],this.route(this.getItemBySlug))
    }
    async getItemBySlug(req: Request, res: Response){
        req.queryInfo.filter = { slug: req.params.slug }
        const result = await this.controller.getItem(req.queryInfo)
        this.onSuccess(res, result)
    }   
    async getPopulars(req: Request, res: Response){
        const result = await this.controller.getPopulars(req.queryInfo)
        this.onSuccessAsList(res, result)
    }
    async getPosts(req: Request, res: Response){
        const result = await this.controller.getPosts(req.params._id, req.queryInfo)
        this.onSuccessAsList(res, result)
    }
}

