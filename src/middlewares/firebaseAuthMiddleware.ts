import * as express from "express";
import { Request, Response } from "../routers/base";
import { errorService, firebaseService } from "../services";
import { BaseMiddleware } from "./baseMiddleware";

export class FirebaseAuthInfoMiddleware extends BaseMiddleware {
  async use(
    req: Request,
    res: Response,
    next: express.NextFunction,
    providers: string[]
  ) {
    try {
      req.firebaseUserInfo = await firebaseService.verifyIdToken(req.headers["access_token"] as string)
      next();
    } catch (err) {
      throw errorService.auth.unauthonized();
    }
  }
}
