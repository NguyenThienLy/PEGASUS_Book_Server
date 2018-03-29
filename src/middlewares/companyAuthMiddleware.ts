import * as express from 'express'
import { Request, Response } from '../routers/base'
import { firebaseService, errorService, tokenService, companyService } from '../services'
import { BaseMiddleware } from './baseMiddleware'
import { Customer, CustomerModel } from '../models'
import { config } from '../config'

export class CompanyAuthMiddleware extends BaseMiddleware {

    async use(req: Request, res: Response, next: express.NextFunction, providers: string[]) {
        req.companyAuth = {
            companyId: req.headers["company_id"],
            companyToken: req.headers["company_token"]
        }
        try {
            req.companyInfo = await companyService.getItem({ filter: { _id: req.headers["company_id"] } })
        } catch (error) {
            throw errorService.database.query()
        }
        try {
            await tokenService.decode(req.headers["company_token"], `${req.companyInfo._id}${config.token.secret}`)
        } catch (error) {
            throw errorService.auth.badToken()
        }
        next()
    }
}