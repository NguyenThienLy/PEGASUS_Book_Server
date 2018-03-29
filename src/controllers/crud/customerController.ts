import { CrudController } from '../crudController'
import { customerService, bookingService, tokenService } from '../../services'
import { CustomerModel, BookingModel, CompanyModel } from '../../models'
import { CrudService, ICrudOption } from '../../services'
import * as _ from 'lodash'

export class CustomerController extends CrudController<typeof customerService> {
    constructor() {
        super(customerService)
    }
    async getProfile(option?: ICrudOption) {
        const customer: any = await this.service.getItem(option)
        let result:any = customer.toJSON()
        const accessToken = {
            accessToken:  await tokenService.getCustomerToken(customer._id)
        }
       _.merge(result,accessToken)
        return result
    }
    // async getList(option?: ICrudOption) {
    //     const customers = await this.service.getList(option)
    //     const result: any = {
    //         count: customers.count, rows: []
    //     }
    //     for(let item of customers.rows as CustomerModel[]){
    //         let customer = item.toJSON()
    //         const accessToken = await tokenService.getCustomerToken(customer._id)
    //         customer.accessToken = accessToken
    //         result.rows.push(customer)
    //     }
    //     return result
    // }
    async create(params: any, option?: ICrudOption) {
        params.uid = params.userInfo.uid
        return await this.service.create(params, option)
    }
    async booking(params: {
        customer: CustomerModel,
        description: string,
        startDate: Date,
        endDate: Date
        lowestPrice: number,
        highestPrice: number,
        origin: {
            address: string,
            coordinates: {
                lat: number,
                long: number
            },
        },
        destination: {
            address: string,
            coordinates: {
                lat: number,
                long: number
            },
        }
    }) {
        const { customer, description, startDate, endDate, lowestPrice, highestPrice, origin, destination} = params
        const booking: BookingModel =  await bookingService.create({
            customer: customer._id, origin,description, startDate, endDate, lowestPrice, highestPrice, destination
        })
        await customer.update({ $push: {bookings: booking._id  }}, { new: true }).exec()
        return booking
    }
    async getBookings(customerInfo: CustomerModel){
        return bookingService.getList({filter: { customer: customerInfo._id}})
    }
    async companyFollow(params: {
        companyFollow: CompanyModel,
        customerId: string
    }) {
        const { companyFollow, customerId } = params
        const customerInfo: CompanyModel = await this.service.getItem({filter: {_id: customerId}})
        await companyFollow.update({ $push: { followCustomer: customerInfo._id } }, { new: true }).exec()
        await customerInfo.update({ $push: { followByCompany: companyFollow._id } }, { new: true }).exec()
        return {
            status: "success",
            follow: customerInfo._id,
            by: companyFollow._id,
            message: `Company ${companyFollow._id} is following ${customerInfo.info.lastname}`
        }
    }
    async companyUnfollow(params: {
        companyUnfollow: CompanyModel,
        customerId: string
    }) {
        const { companyUnfollow, customerId } = params
        const customerInfo: CompanyModel = await this.service.getItem({filter: {_id: customerId}})
        await companyUnfollow.update({ $pull: { followCustomer: customerInfo._id } }, { new: true }).exec()
        await customerInfo.update({ $pull: { followByCompany: companyUnfollow._id } }, { new: true }).exec()
        return {
            status: "success",
            unfollow: customerInfo._id,
            by: companyUnfollow._id,
            message: `Company ${companyUnfollow.info.brand} is unfollow ${customerInfo.info.lastname}`
        }
    }
    async customerFollow(params: {
        customerFollow: CustomerModel,
        customerId: string
    }) {
        const { customerFollow, customerId } = params
        const customerInfo: CompanyModel = await this.service.getItem({filter: {_id: customerId}})
        await customerFollow.update({ $push: { followCustomer: customerInfo._id } }, { new: true }).exec()
        await customerInfo.update({ $push: { followByCustomer: customerFollow._id } }, { new: true }).exec()
        return {
            status: "success",
            follow: customerInfo._id,
            by: customerFollow._id,
            message: `Customer ${customerFollow.info.lastname} is following ${customerInfo.info.lastname}`
        }
    }
    async customerUnfollow(params: {
        customerUnfollow: CustomerModel,
        customerId: string
    }) {
        const { customerUnfollow, customerId } = params
        const customerInfo: CustomerModel = await this.service.getItem({filter: {_id: customerId}})
        await customerUnfollow.update({ $pull: { followCustomer: customerInfo._id } }, { new: true }).exec()
        await customerInfo.update({ $pull: { followByCustomer: customerUnfollow._id } }, { new: true }).exec()
        return {
            status: "success",
            unfollow: customerInfo._id,
            by: customerUnfollow._id,
            message: `Customer ${customerUnfollow.info.lastname} is unfollow ${customerInfo.info.lastname}`
        }
    }
}