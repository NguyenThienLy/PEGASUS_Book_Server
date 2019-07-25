import { CrudService } from '../../crudService'
import { MailScheduler } from '../../../models/mailScheduler.model'

export class MailSchedulerService extends CrudService<typeof MailScheduler> {
    constructor(){
        super(MailScheduler);
    }
}