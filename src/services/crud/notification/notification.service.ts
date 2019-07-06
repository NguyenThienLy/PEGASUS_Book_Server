import { CrudService } from '../../crudService'
import { Notification } from '../../../models/notification.model'

export class NotificationService extends CrudService<typeof Notification> {
    constructor(){
        super(Notification);
    }
}