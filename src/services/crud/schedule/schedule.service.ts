import { CrudService } from '../../crudService'
import { Schedule } from '../../../models/schedule.model'

export class ScheduleService extends CrudService<typeof Schedule> {
    constructor(){
        super(Schedule);
    }
}