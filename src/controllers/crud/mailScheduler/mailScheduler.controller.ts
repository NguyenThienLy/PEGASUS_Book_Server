import { CrudController } from '../../crudController'
import { mailSchedulerService } from '../../../services/crud/mailScheduler'


export class MailSchedulerController extends CrudController<typeof mailSchedulerService>{
    constructor(){
        super(mailSchedulerService);
    }
    
}