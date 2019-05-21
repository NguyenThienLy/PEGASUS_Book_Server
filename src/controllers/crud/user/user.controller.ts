import { CrudController } from '../../crudController'
import { userService, userErrorService } from '../../../services/crud/user'
import { tokenService } from '../../../services';
import { userFollowService } from '../../../services/crud/userFollow';


export class UserController extends CrudController<typeof userService>{
    constructor(){
        super(userService);
    }
    async login(firebaseUserInfo: any){
        let user: any
        try {
            user = await this.service.getItem({ filter: { firebaseUid: firebaseUserInfo.uid }})
        } catch(err) {
            user = await this.service.create({
                firebaseUid: firebaseUserInfo.uid,
                firebaseUserInfo: firebaseUserInfo,
                email: firebaseUserInfo.email
            })
        }
        const token = await tokenService.getUserShortLifeToken(user._id, user.role)
        const refreshToken = await tokenService.getUserRefreshToken(user._id, user.role, ["default"])
        let result = user.toJSON()
        result.refreshToken = refreshToken
        result.token = token
        return result
    }
    async follow(params: {
        from: string
        to: string
    }){
        const { from, to } = params
        if(from === to){
            throw userErrorService.followNotAllow()
        }
        return await userFollowService.create({
            fromId: from, toId: to
        })
    }
    async unFollow(params: {
        uid: string
        userFollowId: string
    }){
        return await userFollowService.delete({ filter: { _id: params.userFollowId, [this.service.Op.or]: [{fromId: params.uid}, { toId: params.uid }] }})
    }
    
    
}