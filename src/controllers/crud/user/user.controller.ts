import { CrudController } from '../../crudController'
import { userService, userErrorService } from '../../../services/crud/user'
import { tokenService, ICrudOption } from '../../../services';
import { userFollowService } from '../../../services/crud/userFollow';
import { ElasticSearchService } from '../../../services/elasticSearchService';
import { sequelize } from '../../../models';


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
                email: firebaseUserInfo.email || "",
                firstName: firebaseUserInfo.displayName || firebaseUserInfo.name || "Người dùng",
                lastName: "",
                username: firebaseUserInfo.email,
                avatar: firebaseUserInfo.picture || "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"
            })
            await ElasticSearchService.getInstance().create("user", {
                _id: user._id,
                email: user.email,
                name: user.firstName + user.lastName,
                avatar: user.avatar,
                score: 0
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
    
    async update(params: any, option?: ICrudOption) {
        let transaction = await sequelize.transaction()
        try {
            option.transaction = transaction
            let user = await this.service.update(params, option)
            user = user.toJSON()
            user.name = user.firstName + user.lastName
            await ElasticSearchService.getInstance().update("user", option.filter._id, user)
            await transaction.commit()
            return user
        } catch (err) {
            await transaction.rollback()
            throw err
        }
    }
    
}