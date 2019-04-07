
import { CrudController } from './crudController';

import { UserController }  from './crud/userController'
import { BlogController } from './crud/blogController'
import { PostController } from './crud/postController'


const userController = new UserController()
const blogController = new BlogController()
const postController = new PostController()

export {
    CrudController,
    
    userController,
    blogController,
    postController
}
