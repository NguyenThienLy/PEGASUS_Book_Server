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
    }
    async getPosts(req: Request, res: Response){
        const result = await this.controller.getPosts(req.params._id, req.queryInfo)
        this.onSuccessAsList(res, result)
    }
}

