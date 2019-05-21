import * as express from 'express';
import { CrudRouter } from '../crud';
import { {name}Controller } from '../../controllers/crud/{name}'
import { queryInfoMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class {Name}Router extends CrudRouter<typeof {name}Controller> {
    constructor() {
        super({name}Controller);
    }
    customRouter(){

    }
}

