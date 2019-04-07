import { BaseError } from './error/base'
import { RouterErrorService } from './error/routerErrorService'
import { AuthErrorService} from './error/authErrorService'
import { DatabaseErrorService } from './error/databaseErrorService'
import { FirebaseErrorService}  from './error/firebaseErrorService'

export class ErrorService {
    constructor(){

        this.firebase = new FirebaseErrorService()

        this.router = new RouterErrorService()
        this.auth = new AuthErrorService()
        this.database = new DatabaseErrorService()
    }
    firebase: FirebaseErrorService
    router: RouterErrorService
    auth: AuthErrorService
    database: DatabaseErrorService

}