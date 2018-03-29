import { CrudService } from '../crudService'
import { Ticket, TicketModel } from '../../models'

export class TicketService extends CrudService<typeof Ticket> {
    constructor(){
        super(Ticket);
    }
}