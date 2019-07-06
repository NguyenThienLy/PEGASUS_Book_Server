import { CrudController } from '../../crudController'
import { userFollowService } from '../../../services/crud/userFollow'
import { notificationSystemService, ICrudOption } from '../../../services';


export class UserFollowController extends CrudController<typeof userFollowService>{
    constructor(){
        super(userFollowService);
    }
    async create(params: any, option?: ICrudOption) {
        const result = await this.service.create(params, option)
        notificationSystemService.tracking({
            type: "follow",
            toUserId: params.toId,
            fromUserId: params.fromId
        }) 
        return result
    }
}