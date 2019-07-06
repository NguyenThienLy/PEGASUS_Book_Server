import { CrudService } from '../../crudService'
import { UserSaveCollection } from '../../../models/userSaveCollection.model'

export class UserSaveCollectionService extends CrudService<typeof UserSaveCollection> {
    constructor(){
        super(UserSaveCollection);
    }
}