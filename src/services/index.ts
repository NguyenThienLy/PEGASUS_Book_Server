
import { CrudService, ICrudExecOption, ICrudOption } from './crudService'
import { UtilService } from './utilService'
import { FirebaseService } from './firebaseService'
import { ErrorService } from './errorService'
import { TokenService } from './tokenService'
import { GoogleMapService } from './googleMapService'
//import { FirebaseStorageService } from './firebaseStorageService'

import { BlogService } from './crud/blogService'
import { UserService } from './crud/userService'
import { PostService } from './crud/postService'
import { AppService } from './crud/appService'
import { AppUserService } from './crud/appUserService'
import { ContactInfoService } from './crud/contactInfoService'
import { ContactService } from './crud/contactService'
import { FaqService } from './crud/faqService'
import { FaqCategoryService } from './crud/faqCategoryService'
import { ProductCategoryService } from './crud/productCategoryService'
import { ProductService } from './crud/productService'
import { ShopService } from './crud/shopService'
import { Product } from '../models';

const utilService = new UtilService()
const firebaseService = new FirebaseService()
const errorService = new ErrorService()
const tokenService = new TokenService()
const googleMapService = new GoogleMapService()
//const firebaseStorageService = new FirebaseStorageService()

const userService = new UserService()
const blogService = new BlogService()
const postService = new PostService()
const appService = new AppService()
const appUserService = new AppUserService()
const contactInfoService = new ContactInfoService()
const contactService = new ContactService()
const faqService = new FaqService()
const faqCategoryService = new FaqCategoryService()
const productCategoryService = new ProductCategoryService()
const productService = new ProductService()
const shopService = new ShopService()


export {
  CrudService, ICrudExecOption, ICrudOption,
  utilService,
  firebaseService,
  errorService,
  tokenService,
  googleMapService,
  //  firebaseStorageService,

  // crud
  userService,
  blogService,
  postService,
  appService,
  appUserService,
  contactInfoService,
  contactService,
  faqService,
  faqCategoryService,
  productCategoryService,
  productService,
  shopService
}