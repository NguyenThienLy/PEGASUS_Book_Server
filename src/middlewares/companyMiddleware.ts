import * as express from 'express'
import { Request, Response } from '../routers/base'
import { firebaseService, errorService, tokenService, companyService } from '../services'
import { BaseMiddleware } from './baseMiddleware'
import { Customer, CustomerModel } from '../models'

export class CompanyInfoMiddleware extends BaseMiddleware {

    async use(req: Request, res: Response, next: express.NextFunction, providers: string[]){
        const _id = req.params._id
        try{
            req.companyInfo = await companyService.getItem({filter: { _id}})
            next()
        } catch(error){
            throw errorService.database.query()
        }
    }
}