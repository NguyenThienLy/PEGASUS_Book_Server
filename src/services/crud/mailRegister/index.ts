import { MailRegisterService } from './mailRegister.service'
import { MailRegisterHelper } from './mailRegister.helper'
import { MailRegisterErrorService } from './mailRegister.error'

const mailRegisterService = new MailRegisterService()
const mailRegisterHelper = new MailRegisterHelper()
const mailRegisterErrorService = new MailRegisterErrorService()

export {
    mailRegisterService,
    mailRegisterHelper,
    mailRegisterErrorService,
    MailRegisterService
}
