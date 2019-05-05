import * as express from 'express';
import { CrudRouter } from '../crud';
import { reportController } from '../../controllers/crud/report'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class ReportRouter extends CrudRouter<typeof reportController> {
    constructor() {
        super(reportController);
    }
    customRouter(){

    }
}

