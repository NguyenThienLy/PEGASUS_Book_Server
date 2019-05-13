import { CrudController } from '../../crudController'
import { adminService } from '../../../services/crud/admin'


export class AdminController extends CrudController<typeof adminService>{
    constructor(){
        super(adminService);
    }
    
}