import { CrudController } from '../crudController'
import { userService } from '../../services/index'


export class UserController extends CrudController<typeof userService>{
    constructor(){
        super(userService);
    }
    
}