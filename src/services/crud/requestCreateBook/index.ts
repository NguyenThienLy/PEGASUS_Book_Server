import { RequestCreateBookService } from './requestCreateBook.service'
import { RequestCreateBookHelper } from './requestCreateBook.helper'
import { RequestCreateBookErrorService } from './requestCreateBook.error'

const requestCreateBookService = new RequestCreateBookService()
const requestCreateBookHelper = new RequestCreateBookHelper()
const requestCreateBookErrorService = new RequestCreateBookErrorService()

export {
    requestCreateBookService,
    requestCreateBookHelper,
    requestCreateBookErrorService,
    RequestCreateBookService
}
