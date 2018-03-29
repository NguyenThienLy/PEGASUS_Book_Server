
import { CrudController } from './crudController';

import { CompanyController } from './crud/companyController'
import { CustomerController } from './crud/customerController'
import { TicketController } from './crud/ticketController'
import { PromotionController} from './crud/promotionController'
import { TransportController } from './crud/transportController'
import { BookingController } from './crud/bookingController'

const companyController = new CompanyController()
const customerController = new CustomerController()
const ticketController = new TicketController()
const promotionController = new PromotionController()
const transportController = new TransportController()
const bookingController = new BookingController()

export {
    CrudController,
    companyController,
    customerController,
    ticketController,
    promotionController,
    transportController,
    bookingController
}
