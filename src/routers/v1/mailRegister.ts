import * as express from 'express';
import { CrudRouter } from '../crud';
import { mailRegisterController } from '../../controllers/crud/mailRegister'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class MailRegisterRouter extends CrudRouter<typeof mailRegisterController> {
    constructor() {
        super(mailRegisterController);
    }
    customRouter(){

    }
}

