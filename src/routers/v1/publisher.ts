import * as express from 'express';
import { CrudRouter } from '../crud';
import { publisherController } from '../../controllers/crud/publisher'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class PublisherRouter extends CrudRouter<typeof publisherController> {
    constructor() {
        super(publisherController);
    }
    customRouter(){

    }
}

