import { CrudService } from '../crudService'
import { Booking, BookingModel } from '../../models'

export class BookingService extends CrudService<typeof Booking> {
    constructor(){
        super(Booking);
    }
}