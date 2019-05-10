import * as express from 'express';
import { CrudRouter } from '../crud';
import { userController } from '../../controllers/crud/user'
import { queryInfoMiddleware, authInfoMiddleware, firebaseAuthInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class UserRouter extends CrudRouter<typeof userController> {
    constructor() {
        super(userController);
    }
    customRouter(){
        this.router.post('/login', [firebaseAuthInfoMiddleware.run()],this.route(this.login))
        
    }
    async login(req: Request, res: Response){
        // await this.validateJSON(req.body, {
        //     type: "object",
        //     properties: {
        //         email: { type: "string" },
        //         password: { type: "string" }
        //     },
        //     additionalProperties: false,
        //     required: ["email","password"]
        // })
        const result = await this.controller.login(req.firebaseUserInfo)
        this.onSuccess(res, result)
    }
}


