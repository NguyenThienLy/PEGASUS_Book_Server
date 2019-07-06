import * as express from 'express';
import { CrudRouter } from '../crud';
import { notificationRegisterController } from '../../controllers/crud/notificationRegister'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class NotificationRegisterRouter extends CrudRouter<typeof notificationRegisterController> {
    constructor() {
        super(notificationRegisterController);
    }
    customRouter(){

    }
}

