import * as express from "express";
import { Request, Response } from "../routers/base";
import { errorService, tokenService } from "../services";
import { BaseMiddleware } from "./baseMiddleware";
import { config } from "../config";
import * as moment from "moment";
import { userService } from "../services/crud/user";

export interface AuthPayloadInterface {
    userId: string
    scores: string[]
    exp?: Date
    role: "reviewer" | "admin"
}

export class AuthInfoMiddleware extends BaseMiddleware {

    async use(req: Request, res: Response, next: express.NextFunction, providers: string[]) {
        try {
            const uid = req.firebaseUserInfo.uid
            const user = await userService.getItem({ filter: {
                firebaseUid: uid
            }})
            req.authInfo = {
                user: user,
                token: req.headers["access_token"]
            }
            // const token = req.headers["x-token"] as string
            // const tokenShortType = token.split("|")[0]
            // let authPayload: AuthPayloadInterface = {
            //     userId: null,
            //     scores: null,
            //     role: null
            // }
            // switch (tokenShortType) {
            //     case "S":
            //         authPayload = await tokenService.decode(token, config.token.secret)
            //         break
            //     case "L":
            //         authPayload = await tokenService.decode(token, config.token.secret)
            //         break
            //     case "R":
            //         authPayload = await tokenService.decode(token, config.token.refreshSecret)
            //         break
            // }
            // //const { userId, exp, scores } = await tokenService.decode(token, config.token.secret)
            // if (authPayload.exp && moment(authPayload.exp).isBefore(moment().format())) {
            //     throw errorService.auth.tokenExpired()
            // }
            // await this.verifyPermission(authPayload.role, providers)
            // req.authInfo = authPayload
            next()
        } catch (err) {
            throw errorService.auth.unauthonized()
        }
    }
    async verifyPermission(permission: string, providers: string[]) {
        if (providers.indexOf(permission) === -1) {
            throw errorService.auth.permissionDenied()
        }
    }
    async verifyScores(scores: string[]) {

    }

}
