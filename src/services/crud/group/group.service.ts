import { CrudService } from '../../crudService'
import { Group } from '../../../models/group.model'

export class GroupService extends CrudService<typeof Group> {
    constructor(){
        super(Group);
    }
}