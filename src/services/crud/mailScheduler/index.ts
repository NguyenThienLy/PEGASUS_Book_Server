import { MailSchedulerService } from './mailScheduler.service'
import { MailSchedulerHelper } from './mailScheduler.helper'
import { MailSchedulerErrorService } from './mailScheduler.error'

const mailSchedulerService = new MailSchedulerService()
const mailSchedulerHelper = new MailSchedulerHelper()
const mailSchedulerErrorService = new MailSchedulerErrorService()

export {
    mailSchedulerService,
    mailSchedulerHelper,
    mailSchedulerErrorService,
    MailSchedulerService
}
