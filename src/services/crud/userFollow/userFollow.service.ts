import { CrudService } from '../../crudService'
import { UserFollow } from '../../../models/userFollow.model'

export class UserFollowService extends CrudService<typeof UserFollow> {
    constructor(){
        super(UserFollow);
    }
}