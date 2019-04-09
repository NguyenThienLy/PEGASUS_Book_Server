import { CrudService } from '../crudService'
import { AppUser, AppUserModel } from '../../models/index'

export class AppUserService extends CrudService<typeof AppUser> {
    constructor(){
        super(AppUser);
    }
}