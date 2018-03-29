import { CrudController } from '../crudController'
import { companyService, bookingService, transportService, tokenService } from '../../services'
import { firebaseAuthInfoMiddleware, companyAuthMiddleware } from '../../middlewares'
import { CrudService, ICrudOption } from '../../services'
import { CompanyModel, BookingModel, TransportModel, CustomerModel } from '../../models'
import * as _ from 'lodash'
import { CompanyAuthMiddleware } from '../../middlewares/companyAuthMiddleware';

export class CompanyController extends CrudController<typeof companyService> {
    constructor() {
        super(companyService)
    }
    async create(params: any, option?: ICrudOption) {
        params.owner = params.userInfo.uid
        const company: CompanyModel = await this.service.create(params)
        const accessToken = await tokenService.getCompanyToken(company._id)
        let json: any = company.toJSON()
        json.accessToken = accessToken
        return json
    }
    async getList(option?: ICrudOption) {
        const companies = await this.service.getList(option)
        const result: any = {
            count: companies.count, rows: []
        }
        for(let item of companies.rows as CompanyModel[]){
            let company = item.toJSON()
            const accessToken = await tokenService.getCompanyToken(company._id)
            company.accessToken = accessToken
            result.rows.push(company)
        }
        return result
    }
    async getCompanyInfo(option?: ICrudOption) {
        const company: any = await this.service.getItem(option)
        let result: any = company.toJSON()
        const accessToken = {
            accessToken: await tokenService.getCompanyToken(company._id)
        }
        _.merge(result, accessToken)
        return result
    }
    async pricing(params: {
        bookingId: string,
        price: string,
        transport: string,
        company: CompanyModel
    }) {
        const { bookingId, price, transport, company } = params
        const booking: BookingModel = await bookingService.getItem({ filter: { _id: bookingId } })
        const auction = {
            company: company._id,
            transport, price
        }
        await company.update({ $push: { bookings: booking._id } }, { new: true }).exec()
        return await booking.update({ $push: { auctions: auction } }, { new: true }).exec()
    }
    async editPricing(params: {
        bookingId: string,
        price: string,
        transport: string,
        company: CompanyModel
    }) {
        const { bookingId, price, transport, company } = params
        const booking: BookingModel = await bookingService.getItem({ filter: { _id: bookingId } })
        const auctions: any[] = booking.auctions
        const currentIndex = _.findIndex(auctions, { 'company': company._id })
        auctions[currentIndex] = {
            company: company._id,
            transport: transport || auctions[currentIndex].transport,
            price: price || auctions[currentIndex].price
        }
        return await booking.update({ auctions }, { new: true }).exec()

    }
    async exitPricing(params: {
        bookingId: string,
        companyInfo: CompanyModel
    }) {
        const { bookingId, companyInfo } = params
        const booking: BookingModel = await bookingService.getItem({ filter: { _id: bookingId } })
        const auctions: any[] = booking.auctions
        const currentIndex = _.findIndex(auctions, { 'company': companyInfo._id })
        auctions.splice(currentIndex, 1)
        await booking.update({ auctions }, { new: true }).exec()
        const bookings = companyInfo.bookings
        const removeIndex = bookings.indexOf(booking._id)
        bookings.splice(currentIndex, 1)
        await companyInfo.update({ bookings }, { new: true }).exec()
        return await this.service.getItem({ filter: { _id: companyInfo._id } })
    }
    async addTransport(params: {
        type: string,
        licensePlate: string,
        company: CompanyModel
    }) {
        const { type, licensePlate, company } = params
        const transport: TransportModel = await transportService.create({
            type, licensePlate,
            company: company._id
        })
        await company.update({ $push: { transports: transport._id } }, { new: true }).exec()
        return transport
    }
    async getTransports(companyInfo: CompanyModel) {
        return transportService.getList({ filter: { company: companyInfo._id } })
    }
    async evaluate(params: {
        customer: CustomerModel,
        company: CompanyModel,
        text: string,
        rate: number
    }) {
        const { company, customer, text, rate } = params
        const companyRate = (company.rate + rate) / 2
        await company.update({
            $push: {
                evaluaties: {
                    customer: customer._id,
                    text, rate
                }
            }, rate: companyRate
        }, { new: true }).exec()
        return await this.service.getItem({ filter: { _id: company._id } })
    }
    async companyFollow(params: {
        companyFollow: CompanyModel,
        companyId: string
    }) {
        const { companyFollow, companyId } = params
        const companyInfo: CompanyModel = await this.service.getItem({filter: {_id: companyId}})
        await companyFollow.update({ $push: { followCompany: companyInfo._id } }, { new: true }).exec()
        await companyInfo.update({ $push: { followByCompany: companyFollow._id } }, { new: true }).exec()
        return {
            status: "success",
            follow: companyInfo._id,
            by: companyFollow._id,
            message: `Company ${companyFollow.info.brand} is following ${companyInfo.info.brand}`
        }
    }
    async companyUnfollow(params: {
        companyUnfollow: CompanyModel,
        companyId: string
    }) {
        const { companyUnfollow, companyId } = params
        const companyInfo: CompanyModel = await this.service.getItem({filter: {_id: companyId}})
        await companyUnfollow.update({ $pull: { followCompany: companyInfo._id } }, { new: true }).exec()
        await companyInfo.update({ $pull: { followByCompany: companyUnfollow._id } }, { new: true }).exec()
        return {
            status: "success",
            unfollow: companyInfo._id,
            by: companyUnfollow._id,
            message: `Company ${companyUnfollow.info.brand} is unfollow ${companyInfo.info.brand}`
        }
    }
    async customerFollow(params: {
        customerFollow: CustomerModel,
        companyId: string
    }) {
        const { customerFollow, companyId } = params
        const companyInfo: CompanyModel = await this.service.getItem({filter: {_id: companyId}})
        await customerFollow.update({ $push: { followCompany: companyInfo._id } }, { new: true }).exec()
        await companyInfo.update({ $push: { followByCustomer: customerFollow._id } }, { new: true }).exec()
        return {
            status: "success",
            follow: companyInfo._id,
            by: customerFollow._id,
            message: `Customer ${customerFollow.info.lastname} is following ${companyInfo.info.brand}`
        }
    }
    async customerUnfollow(params: {
        customerUnfollow: CustomerModel,
        companyId: string
    }) {
        const { customerUnfollow, companyId } = params
        const companyInfo: CompanyModel = await this.service.getItem({filter: {_id: companyId}})
        await customerUnfollow.update({ $pull: { followCompany: companyInfo._id } }, { new: true }).exec()
        await companyInfo.update({ $pull: { followByCustomer: customerUnfollow._id } }, { new: true }).exec()
        return {
            status: "success",
            unfollow: companyInfo._id,
            by: customerUnfollow._id,
            message: `Customer ${customerUnfollow.info.lastname} is unfollow ${companyInfo.info.brand}`
        }
    }
}