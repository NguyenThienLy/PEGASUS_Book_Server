import { CrudService } from '../crudService'
import { ContactInfo, ContactInfoModel } from '../../models/index'

export class ContactInfoService extends CrudService<typeof ContactInfo> {
    constructor(){
        super(ContactInfo);
    }
}