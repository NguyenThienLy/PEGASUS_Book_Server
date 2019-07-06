import { CrudService } from '../../crudService'
import { NotificationRegister } from '../../../models/notificationRegister.model'

export class NotificationRegisterService extends CrudService<typeof NotificationRegister> {
    constructor(){
        super(NotificationRegister);
    }
}