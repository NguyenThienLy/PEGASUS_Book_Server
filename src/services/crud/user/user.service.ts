import { CrudService } from '../../crudService'
import { User } from '../../../models/user.model'

export class UserService extends CrudService<typeof User> {
    constructor(){
        super(User);
    }
}