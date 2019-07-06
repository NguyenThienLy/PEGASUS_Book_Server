import { CrudController } from '../../crudController'
import { notificationRegisterService } from '../../../services/crud/notificationRegister'


export class NotificationRegisterController extends CrudController<typeof notificationRegisterService>{
    constructor(){
        super(notificationRegisterService);
    }
    
}