import * as express from 'express';
import { CrudRouter } from '../crud';
import { mailTemplateController } from '../../controllers/crud/mailTemplate'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class MailTemplateRouter extends CrudRouter<typeof mailTemplateController> {
    constructor() {
        super(mailTemplateController);
    }
    customRouter(){

    }
}

