import * as _ from 'lodash'

import { App, AppModel } from './app'
import { User, UserModel } from './user'
import { AppUser, AppUserModel } from './appUser'
import { Blog, BlogModel } from './blog'
import { Comment, CommentModel } from './comment'
import { Contact, ContactModel } from './contact'
import { ContactInfo, ContactInfoModel } from './contactInfo'
import { Faq, FaqModel } from './faq'
import { FaqCategory, FaqCategoryModel } from './faqCategory'
import { Post, PostModel } from './post'
import { Product, ProductModel } from './product'
import { ProductCategory, ProductCategoryModel } from './productCategory'
import { Shop, ShopModel } from './shop'


const models = {
    App, User, AppUser, Blog, Comment, Contact, ContactInfo, Faq, FaqCategory, Post, Product, ProductCategory, Shop
}

_.forEach(models, (value: any, key: any) => {
    value.associate(models)
})


export * from './base'
export * from './db'
export * from './app'
export * from './appUser'
export * from './blog'
export * from './comment'
export * from './contact'
export * from './contactInfo'
export * from './faq'
export * from './faqCategory'
export * from './post'
export * from './product'
export * from './productCategory'
export * from './shop'
export * from './user'
export * from './userDetail'





