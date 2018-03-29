
import { CrudService, ICrudExecOption, ICrudOption } from './crudService'
import { UtilService} from './utilService'
import { FirebaseService } from './firebaseService'
import { ErrorService } from './errorService'
import { TokenService } from './tokenService'
import { GoogleMapService } from './googleMapService'
//import { FirebaseStorageService } from './firebaseStorageService'

import { CompanyService } from './crud/companyService'
import { CustomerService } from './crud/customerService'
import  { TicketService } from './crud/ticketService'
import { PromotionService } from './crud/promotionService'
import { BookingService } from './crud/bookingService'
import { TransportService } from './crud/transportService'

const utilService = new UtilService()
const firebaseService = new FirebaseService()
const errorService = new ErrorService()
const tokenService = new TokenService()
const googleMapService = new GoogleMapService()
//const firebaseStorageService = new FirebaseStorageService()

const companyService = new CompanyService()
const customerService = new CustomerService()
const ticketService = new TicketService()
const promotionService = new PromotionService()
const bookingService = new BookingService()
const transportService = new TransportService()

export {
    CrudService, ICrudExecOption, ICrudOption,
    utilService,
    firebaseService,
    errorService,
    tokenService,
    googleMapService,
  //  firebaseStorageService,

    companyService,
    customerService,
    ticketService,
    promotionService,
    bookingService,
    transportService
}