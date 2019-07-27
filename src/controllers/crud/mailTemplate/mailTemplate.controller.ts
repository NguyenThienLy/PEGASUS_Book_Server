import { CrudController } from '../../crudController'
import { mailTemplateService } from '../../../services/crud/mailTemplate'


export class MailTemplateController extends CrudController<typeof mailTemplateService>{
    constructor(){
        super(mailTemplateService);
    }
    
}