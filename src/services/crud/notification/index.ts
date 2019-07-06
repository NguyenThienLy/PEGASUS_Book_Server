import { NotificationService } from './notification.service'
import { NotificationHelper } from './notification.helper'
import { NotificationErrorService } from './notification.error'

const notificationService = new NotificationService()
const notificationHelper = new NotificationHelper()
const notificationErrorService = new NotificationErrorService()

export {
    notificationService,
    notificationHelper,
    notificationErrorService,
    NotificationService
}
