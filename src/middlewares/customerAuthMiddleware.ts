import * as express from 'express'
import { Request, Response } from '../routers/base'
import { firebaseService, errorService, tokenService, customerService } from '../services'
import { BaseMiddleware } from './baseMiddleware'
import { Customer, CustomerModel } from '../models'
import { config } from '../config'

export class CustomerAuthMiddleware extends BaseMiddleware {

    async use(req: Request, res: Response, next: express.NextFunction, providers: string[]) {
        req.customerAuth = {
            customerId: req.headers["customer_id"],
            customerToken: req.headers["customer_token"]
        }
        try {
            req.customerInfo = await customerService.getItem({ filter: { _id: req.customerAuth.customerId } })
        } catch (error) {
            throw errorService.database.query()
        }
        try {
            await tokenService.decode(req.headers["customer_token"], `${req.customerInfo._id}${config.token.secret}`)
        } catch (error) {
            throw errorService.auth.badToken()
        }
        next()
    }
}