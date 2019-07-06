import * as express from 'express';
import { CrudRouter } from '../crud';
import { scheduleController } from '../../controllers/crud/schedule'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class ScheduleRouter extends CrudRouter<typeof scheduleController> {
    constructor() {
        super(scheduleController);
    }
    customRouter(){

    }
}

