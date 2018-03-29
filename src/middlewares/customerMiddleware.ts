import * as express from 'express'
import { Request, Response } from '../routers/base'
import { firebaseService, errorService, tokenService, customerService } from '../services'
import { BaseMiddleware } from './baseMiddleware'
import { Customer, CustomerModel } from '../models'

export class CustomerInfoMiddleware extends BaseMiddleware {

    async use(req: Request, res: Response, next: express.NextFunction, providers: string[]){
        const _id = req.params._id
        try{
            req.customerInfo = await customerService.getItem({filter: { _id}})
            next()
        } catch(error){
            throw error
        }
    }
}