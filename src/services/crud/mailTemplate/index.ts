import { MailTemplateService } from './mailTemplate.service'
import { MailTemplateHelper } from './mailTemplate.helper'
import { MailTemplateErrorService } from './mailTemplate.error'

const mailTemplateService = new MailTemplateService()
const mailTemplateHelper = new MailTemplateHelper()
const mailTemplateErrorService = new MailTemplateErrorService()

export {
    mailTemplateService,
    mailTemplateHelper,
    mailTemplateErrorService,
    MailTemplateService
}
