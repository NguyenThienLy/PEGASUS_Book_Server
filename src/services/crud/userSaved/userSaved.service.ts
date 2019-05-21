import { CrudService } from '../../crudService'
import { UserSaved } from '../../../models/userSaved.model'

export class UserSavedService extends CrudService<typeof UserSaved> {
    constructor(){
        super(UserSaved);
    }
}