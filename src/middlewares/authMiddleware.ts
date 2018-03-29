import * as express from 'express'
import { Request, Response } from '../routers/base'
import { firebaseService, errorService, tokenService } from '../services'
import { BaseMiddleware } from './baseMiddleware'

export class AuthInfoMiddleware extends BaseMiddleware {

    async use(req: Request, res: Response, next: express.NextFunction, providers: string[]){
        try{
            req.authInfo = {
                companyId: req.headers["company_id"],
                companyToken: req.headers["company_token"]
            }
            req.firebaseUserInfo = await firebaseService.verifyIdToken(req.headers["access_token"] as string)  
           // req.authInfo.company = await tokenService.decode()
            next()
        } catch(err){
            throw errorService.auth.unauthonized()
        }
    }
}