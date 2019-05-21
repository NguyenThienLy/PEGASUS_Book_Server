import { PostDeletedService } from './postDeleted.service'
import { PostDeletedHelper } from './postDeleted.helper'
import { PostDeletedErrorService } from './postDeleted.error'

const postDeletedService = new PostDeletedService()
const postDeletedHelper = new PostDeletedHelper()
const postDeletedErrorService = new PostDeletedErrorService()

export {
    postDeletedService,
    postDeletedHelper,
    postDeletedErrorService,
    PostDeletedService
}
