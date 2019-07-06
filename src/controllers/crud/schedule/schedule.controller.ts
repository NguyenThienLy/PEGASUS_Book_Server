import { CrudController } from '../../crudController'
import { scheduleService } from '../../../services/crud/schedule'


export class ScheduleController extends CrudController<typeof scheduleService>{
    constructor(){
        super(scheduleService);
    }
    
}