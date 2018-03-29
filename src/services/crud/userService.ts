import { CrudService } from '../crudService'
import { User, UserModel } from '../../models/index'
import * as mongoose from 'mongoose'

export class UserServices extends CrudService<typeof User> {
    constructor(){
        super(User);
    }
}