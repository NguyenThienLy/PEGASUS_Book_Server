import { CrudController } from '../../crudController'
import { mailRegisterService } from '../../../services/crud/mailRegister'


export class MailRegisterController extends CrudController<typeof mailRegisterService>{
    constructor(){
        super(mailRegisterService);
    }
    
}