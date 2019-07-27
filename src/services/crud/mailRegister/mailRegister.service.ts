import { CrudService } from '../../crudService'
import { MailRegister } from '../../../models/mailRegister.model'

export class MailRegisterService extends CrudService<typeof MailRegister> {
    constructor(){
        super(MailRegister);
    }
}