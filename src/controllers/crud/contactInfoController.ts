import { CrudController } from '../crudController'
import { contactInfoService } from '../../services/index'


export class ContactInfoController extends CrudController<typeof contactInfoService>{
    constructor(){
        super(contactInfoService);
    }
    
}