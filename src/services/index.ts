
import { CrudService, ICrudExecOption, ICrudOption } from './crudService'
import { UtilService} from './utilService'
import { FirebaseService } from './firebaseService'
import { ErrorService } from './errorService'
import { TokenService } from './tokenService'
import { GoogleMapService } from './googleMapService'
//import { FirebaseStorageService } from './firebaseStorageService'

import { BlogService } from './crud/blogService'
import { UserService } from './crud/userService'
import { PostService } from './crud/postService'

const utilService = new UtilService()
const firebaseService = new FirebaseService()
const errorService = new ErrorService()
const tokenService = new TokenService()
const googleMapService = new GoogleMapService()
//const firebaseStorageService = new FirebaseStorageService()

const userService = new UserService()
const blogService = new BlogService()
const postService = new PostService()


export {
    CrudService, ICrudExecOption, ICrudOption,
    utilService,
    firebaseService,
    errorService,
    tokenService,
    googleMapService,
  //  firebaseStorageService,

    // crud
    userService,
    blogService,
    postService
}