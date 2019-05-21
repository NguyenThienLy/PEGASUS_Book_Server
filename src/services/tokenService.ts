import * as jwt from 'jwt-simple'
import * as moment from 'moment'
import { config } from '../config'
import { errorService } from './index';


export class TokenService{
    async generateToken(payload: any = {}, secret: string){
        return jwt.encode(payload, secret)
    }
    async decode(token,secret: string){
        try{
            return jwt.decode(token, secret)
        } catch(error){
            throw errorService.auth.badToken()
        }
    }
    async getUserShortLifeToken(userId: string,role: "reviewer" | "admin", scores: string[] = ["default"]){
        const secret = config.token.secret
        return `S|${jwt.encode({ userId, role,exp: moment().add(1,"days").format() },  
            secret
        )}`
    }
    async getUserLongLifeToken(userId: string,role: "reviewer" | "admin", scores: string[] = ["default"]){
        const secret = config.token.secret
        return `L|${jwt.encode({ userId, scores, role },  
            secret
        )}`
    }
    async getUserAuthToken(userId: string,role: "reviewer" | "admin", scores: string[] = ["default"]){
        const secret = config.token.secret
        return jwt.encode({ userId, exp: moment().add(1,"days").format(), scores, role },  
            secret
        )
    }
    async getUserRefreshToken(userId: string,role: "reviewer" | "admin", scores: string[] = ["default"]){
        const secret = config.token.refreshToken

        return `R|${jwt.encode({ userId, scores, role },  
            secret
        )}`
    }
}