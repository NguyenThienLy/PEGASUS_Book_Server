import * as express from 'express';
import { CrudRouter } from '../crud';
import { userFollowController } from '../../controllers/crud/userFollow'
import { queryInfoMiddleware, firebaseAuthInfoMiddleware, authInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class UserFollowRouter extends CrudRouter<typeof userFollowController> {
    constructor() {
        super(userFollowController);
    }
    customRouter() {

    }
    createMiddlewares(): any[] {
        return [firebaseAuthInfoMiddleware.run(), authInfoMiddleware.run()]
    }
    async create(req: Request, res: Response) {
        req.body.fromId = req.authInfo.user._id
        const result = await this.controller.create(req.body)
        this.onSuccess(res, result)
    }
    deleteMiddlewares(): any[] {
        return [firebaseAuthInfoMiddleware.run()]
    }
    async delete(req: Request, res: Response) {
        const { _id } = req.params
        const result = await this.controller.delete({
            filter: { _id }
        })
        this.onSuccess(res, result)
    }
}

