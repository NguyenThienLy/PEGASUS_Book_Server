import { CrudService } from '../crudService'
import { Contact } from '../../models/index'

export class ContactService extends CrudService<typeof Contact> {
    constructor(){
        super(Contact);
    }
}