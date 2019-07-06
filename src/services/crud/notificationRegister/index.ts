import { NotificationRegisterService } from './notificationRegister.service'
import { NotificationRegisterHelper } from './notificationRegister.helper'
import { NotificationRegisterErrorService } from './notificationRegister.error'

const notificationRegisterService = new NotificationRegisterService()
const notificationRegisterHelper = new NotificationRegisterHelper()
const notificationRegisterErrorService = new NotificationRegisterErrorService()

export {
    notificationRegisterService,
    notificationRegisterHelper,
    notificationRegisterErrorService,
    NotificationRegisterService
}
