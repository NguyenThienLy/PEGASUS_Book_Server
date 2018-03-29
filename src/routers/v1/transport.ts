import * as express from 'express';
import { CrudRouter } from '../crud';
import { transportController } from '../../controllers'
import { companyAuthMiddleware, customerAuthMiddleware} from '../../middlewares'
import { Request, Response } from '../base'

export default class TransportRouter extends CrudRouter<typeof transportController> {
    constructor() {
        super(transportController);
    }
    updateMiddlewares(): any[] {
        return [companyAuthMiddleware.run()]
    }
    async update(req: Request, res: Response) {
        const { _id } = req.params
        req.body.companyInfo = req.companyInfo
        const result = await this.controller.update(req.body, {
            filter: { _id }
        })
        this.onSuccess(res, result)
    }
}

