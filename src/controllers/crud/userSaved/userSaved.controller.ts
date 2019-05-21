import { CrudController } from '../../crudController'
import { userSavedService } from '../../../services/crud/userSaved'


export class UserSavedController extends CrudController<typeof userSavedService>{
    constructor(){
        super(userSavedService);
    }
    
}