import { CrudController } from '../../crudController'
import { userFollowService } from '../../../services/crud/userFollow'


export class UserFollowController extends CrudController<typeof userFollowService>{
    constructor(){
        super(userFollowService);
    }
    
}