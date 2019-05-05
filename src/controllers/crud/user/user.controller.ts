import { CrudController } from '../../crudController'
import { userService } from '../../../services/crud/user'
import { tokenService } from '../../../services';


export class UserController extends CrudController<typeof userService>{
    constructor(){
        super(userService);
    }
    async login(params: {
        email: string
        password: string
    }){
        const { email, password } = params
        const user = await this.service.getItem({ filter: { email, password }})
        const token = await tokenService.getUserAuthToken(user._id)
        let result = user.toJSON()
        result.token = token
        return result
    }
    
}