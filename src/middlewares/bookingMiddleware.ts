import * as express from 'express'
import { Request, Response } from '../routers/base'
import { firebaseService, errorService, tokenService, bookingService } from '../services'
import { BaseMiddleware } from './baseMiddleware'
import { Customer, CustomerModel } from '../models'

export class BookingInfoMiddleware extends BaseMiddleware {

    async use(req: Request, res: Response, next: express.NextFunction, providers: string[]){
        const _id = req.params._id
        try{
            req.bookingInfo = await bookingService.getItem({filter: { _id}})
            if(req.bookingInfo.customer != req.headers["customer_id"]){
                throw errorService.auth.permissionDenied()
            }
            next()
        } catch(error){
            throw errorService.database.query()
        }
    }
}