import { CrudService, ICrudOption, bookingService, companyService, customerService } from '../../services'
import { BaseController } from '../baseController'
import { CrudController } from '../crudController'
import { BookingModel } from '../../models'
import * as _ from 'lodash'

export class BookingController extends CrudController<typeof bookingService> {
    constructor() {
        super(bookingService)
    }
    async delete(option?: ICrudOption) {
        const booking = await this.service.getItem({ filter: option.filter._id })
        const customer = await customerService.getItem({ filter: { _id: booking.customer } })
        const customerBookings = customer.bookings
        let index = customerBookings.indexOf(booking._id)
        customerBookings.splice(index, 1)
        for (const auction of booking.auctions) {
            const company = await companyService.getItem({ filter: { _id: auction.company } })
            const companyBookings = company.bookings
            index = companyBookings.indexOf(booking._id)
            customerBookings.splice(index, 1)
            await company.update({ bookings: companyBookings }, { new: true }).exec()
        }
        await customer.update({ bookings: customerBookings }, { new: true }).exec()
        return await this.service.delete(option)
    }
    async chooseAuction(params: {
        booking: BookingModel,
        auctionId: string
    }) {
        const { booking, auctionId } = params
        let auctions: any[] = booking.auctions
        for (let auction of auctions) {
            if (auction._id == auctionId) {
                auction.status = "chosen"
            } else {
                auction.status = "denied"
            }
        }
        // const auctionIndex = _.findIndex(auctions, (auction)=> { return auction._id == auctionId})
        // auctions[auctionIndex].status = "chosen"
        await booking.update({ auctions }, { new: true }).exec()
        return await this.service.getItem({ filter: { _id: booking._id } })
    }
}