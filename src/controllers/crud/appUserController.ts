import { CrudController } from '../crudController'
import { appUserService } from '../../services/index'


export class AppUserController extends CrudController<typeof appUserService>{
    constructor(){
        super(appUserService);
    }
    
}