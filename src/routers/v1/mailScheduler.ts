import * as express from 'express';
import { CrudRouter } from '../crud';
import { mailSchedulerController } from '../../controllers/crud/mailScheduler'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class MailSchedulerRouter extends CrudRouter<typeof mailSchedulerController> {
    constructor() {
        super(mailSchedulerController);
    }
    customRouter(){

    }
}

