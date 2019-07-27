import { CrudService, ICrudExecOption, ICrudOption } from "./crudService";
import { UtilService } from "./utilService";
import { FirebaseService } from './firebaseService'
import { ErrorService } from "./errorService";
import { TokenService } from "./tokenService";
import { GoogleMapService } from "./googleMapService";

import { SocketService } from './socket/socket.service'
import { NotificationSystemService } from './notification/notification.service'
//import { FirebaseStorageService } from './firebaseStorageService'

const utilService = new UtilService();
const firebaseService = new FirebaseService()
const errorService = new ErrorService();
const tokenService = new TokenService();
const googleMapService = new GoogleMapService();
const socketService = new SocketService()
const notificationSystemService = new NotificationSystemService()
//const firebaseStorageService = new FirebaseStorageService()

export {
  CrudService,
  ICrudExecOption,
  ICrudOption,
  utilService,
  firebaseService,
  errorService,
  tokenService,
  googleMapService,
  socketService,
  notificationSystemService
};
