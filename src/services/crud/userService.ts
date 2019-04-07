import { CrudService } from '../crudService'
import { User, UserModel } from '../../models/index'

export class UserService extends CrudService<typeof User> {
    constructor(){
        super(User);
    }
}