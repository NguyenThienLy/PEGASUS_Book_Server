import { UserService } from './user.service'
import { UserErrorService } from './user.error'

const userService = new UserService()
const userErrorService = new UserErrorService()

export {
    userService,
    userErrorService,
    UserService
}
