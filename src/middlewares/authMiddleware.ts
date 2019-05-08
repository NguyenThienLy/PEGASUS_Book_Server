import * as express from "express";
import { Request, Response } from "../routers/base";
import { errorService, tokenService } from "../services";
import { BaseMiddleware } from "./baseMiddleware";
import { config } from "../config";
import * as moment from "moment";

export class AuthInfoMiddleware extends BaseMiddleware {
  async use(
    req: Request,
    res: Response,
    next: express.NextFunction,
    providers: string[]
  ) {
    try {
      const token = req.headers["x-token"];
      const { userId, exp } = await tokenService.decode(
        token,
        config.token.secret
      );
      if (moment(exp).isBefore(moment().format())) {
        throw errorService.auth.tokenExpired();
      }
      req.authInfo = {
        uid: userId
      };
      next();
    } catch (err) {
      throw errorService.auth.unauthonized();
    }
  }
}
