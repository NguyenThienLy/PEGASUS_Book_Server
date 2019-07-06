import * as express from 'express';
import { CrudRouter } from '../crud';
import { notificationController } from '../../controllers/crud/notification'
import { queryInfoMiddleware, authInfoMiddleware, firebaseAuthInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class NotificationRouter extends CrudRouter<typeof notificationController> {
    constructor() {
        super(notificationController);
    }
    customRouter() {
        this.router.post('/subscribe', [firebaseAuthInfoMiddleware.run(), authInfoMiddleware.run()], this.route(this.subscribe))
        this.router.delete('/subscribe', [firebaseAuthInfoMiddleware.run(), authInfoMiddleware.run()], this.route(this.unsubscribe))
        this.router.get('/test/:id', this.route(this.test))
    }
    async test(req: Request, res: Response){
        this.controller.test(req.params.id)
        this.onSuccess(res)
    }
    async subscribe(req: Request, res: Response) {
        const result = await this.controller.subscribe({
            user: req.authInfo.user,
            subscription: req.body.subscription
        })
        this.onSuccess(res, result)
    }
    async unsubscribe(req: Request, res: Response) {
        
    }
}

