import * as express from 'express';
import { CrudRouter } from '../crud';
import {Request, Response} from '../base'
import { bookingController } from '../../controllers'
import { firebaseAuthInfoMiddleware, bookingInfoMiddleware, companyAuthMiddleware, customerAuthMiddleware} from '../../middlewares'

export default class BookingRouter extends CrudRouter<typeof bookingController> {
    constructor() {
        super(bookingController);
    }
    customRouter() {
        this.router.put('/:_id/chooseAuction', this.chooseAuctionMiddleware(), this.route(this.chooseAuction))
    }
    chooseAuctionMiddleware(): any[] {
        return [customerAuthMiddleware.run(), bookingInfoMiddleware.run()]
    }
    deleteMiddlewares(): any[] {
        return [customerAuthMiddleware.run(), bookingInfoMiddleware.run()]
    }
    async delete(req: Request, res: Response) {
        const { _id } = req.params
        const result = await this.controller.delete({
            filter: { _id }
        })
        this.onSuccess(res, result)
    }
    async chooseAuction(req: Request, res: Response){
        await this.validateJSON(req.body, {
            type: "object",
            properties: {
                auctionId: { type: "string"}
            },
            required:["auctionId"],
            additionalProperties: false
        })
        req.body.booking = req.bookingInfo
        const result = await this.controller.chooseAuction(req.body)
        this.onSuccess(res, result)
    }
}

