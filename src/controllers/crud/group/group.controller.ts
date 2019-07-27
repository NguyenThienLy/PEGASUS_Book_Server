import { CrudController } from '../../crudController'
import { groupService } from '../../../services/crud/group'


export class GroupController extends CrudController<typeof groupService>{
    constructor(){
        super(groupService);
    }
    
}