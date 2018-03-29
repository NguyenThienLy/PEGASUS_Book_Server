import { FirebaseAuthInfoMiddleware } from './firebaseAuthMiddleware'
import { AuthInfoMiddleware } from './authMiddleware'
import { QueryInfoMiddleware } from './queryMiddleware'
import { BlockMiddleware } from './blockMiddleware'

import { CompanyAuthMiddleware } from './companyAuthMiddleware'
import { CustomerAuthMiddleware } from './customerAuthMiddleware'

import { CustomerInfoMiddleware } from './customerMiddleware'
import { CompanyInfoMiddleware } from './companyMiddleware'
import { BookingInfoMiddleware } from './bookingMiddleware'


const firebaseAuthInfoMiddleware = new FirebaseAuthInfoMiddleware()
const authInfoMiddleware = new AuthInfoMiddleware()
const queryInfoMiddleware = new QueryInfoMiddleware()
const blockMiddleware = new BlockMiddleware()

const companyAuthMiddleware = new CompanyAuthMiddleware()
const customerAuthMiddleware = new CustomerAuthMiddleware()

const customerInfoMiddleware = new CustomerInfoMiddleware()
const companyInfoMiddleware = new CompanyInfoMiddleware()
const bookingInfoMiddleware = new BookingInfoMiddleware()

export {
    firebaseAuthInfoMiddleware,
    authInfoMiddleware,
    queryInfoMiddleware,
    blockMiddleware,

    companyAuthMiddleware,
    customerAuthMiddleware,

    customerInfoMiddleware,
    companyInfoMiddleware,
    bookingInfoMiddleware
}