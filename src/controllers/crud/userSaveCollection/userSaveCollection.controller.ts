import { CrudController } from '../../crudController'
import { userSaveCollectionService } from '../../../services/crud/userSaveCollection'


export class UserSaveCollectionController extends CrudController<typeof userSaveCollectionService>{
    constructor(){
        super(userSaveCollectionService);
    }
    
}