import { AdminService } from './admin.service'
import { AdminHelper } from './admin.helper'
import { AdminErrorService } from './admin.error'

const adminService = new AdminService()
const adminHelper = new AdminHelper()
const adminErrorService = new AdminErrorService()

export {
    adminService,
    adminHelper,
    adminErrorService,
    AdminService
}
