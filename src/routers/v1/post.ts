import * as express from 'express';
import { CrudRouter } from '../crud';
import { postController } from '../../controllers/crud/post'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class PostRouter extends CrudRouter<typeof postController> {
    constructor() {
        super(postController);
    }
    customRouter(){
        this.router.get("/slug/:slug", [queryInfoMiddleware.run()],this.route(this.getItemBySlug))
    }
    async getItemBySlug(req: Request, res: Response){
        req.queryInfo.filter = { slug: req.params.slug }
        const result = await this.controller.getItem(req.queryInfo)
        this.onSuccess(res, result)
    }   
}

