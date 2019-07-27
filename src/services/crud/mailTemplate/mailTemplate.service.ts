import { CrudService } from '../../crudService'
import { MailTemplate } from '../../../models/mailTemplate.model'

export class MailTemplateService extends CrudService<typeof MailTemplate> {
    constructor(){
        super(MailTemplate);
    }
}