import { CrudController } from '../crudController'
import { ticketService } from '../../services'

export class TicketController extends CrudController<typeof ticketService> {
    constructor() {
        super(ticketService)
    }
}