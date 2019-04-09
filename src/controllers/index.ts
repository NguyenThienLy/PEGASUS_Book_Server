
import { CrudController } from './crudController';

import { UserController } from './crud/userController'
import { BlogController } from './crud/blogController'
import { PostController } from './crud/postController'
import { AppController } from './crud/appController'
import { AppUserController } from './crud/appUserController'
import { ContactController } from './crud/contactController'
import { ContactInfoController } from './crud/contactInfoController'
import { FaqCategoryController } from './crud/faqCategoryController'
import { FaqController } from './crud/faqController'
import { ProductCategoryController } from './crud/productCategoryController'
import { ProductController } from './crud/productController'
import { ShopController } from './crud/shopController'


const userController = new UserController()
const blogController = new BlogController()
const postController = new PostController()
const appController = new AppController()
const appUserController = new AppUserController()
const contactController = new ContactController()
const contactInfoController = new ContactInfoController()
const faqCategoryController = new FaqCategoryController()
const faqController = new FaqController()
const productCategoryController = new ProductCategoryController()
const productController = new ProductController()
const shopController = new ShopController()

export {
    CrudController,

    userController,
    blogController,
    postController,
    appController,
    appUserController,
    contactController,
    contactInfoController,
    faqCategoryController,
    faqController,
    productCategoryController,
    productController,
    shopController
}
