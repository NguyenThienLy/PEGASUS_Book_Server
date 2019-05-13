import { CrudService } from '../../crudService'
import { Admin } from '../../../models/admin.model'

export class AdminService extends CrudService<typeof Admin> {
    constructor(){
        super(Admin);
    }
}