import * as mongoose from 'mongoose'
import { BaseModel } from './base'

import { googleMapService } from '../services'

import { TicketModel } from './ticket'
import { PromotionModel } from './promotion'
import { CustomerModel } from './customer'
import { CompanyModel } from './company'
import { TransportModel } from './transport';

const Schema = mongoose.Schema
export type BookingModel = BaseModel & {
    customer: string | CustomerModel,
    company: string, CompanyModel,
    auctions: CompanyPricing[],
    description: string,
    image: string,
    lowestPrice: number,
    highestPrice: number,
    startDate: Date,
    endDate: Date,
    origin: {
        address: string,
        coordinates: {
            lat: number,
            lng: number
        },
    },
    destination: {
        address: string,
        coordinates: {
            lat: number,
            lng: number
        },
    },
    distance: {
        text: string,
        value: number
    },
    duration: {
        text: string,
        value: number
    }
    required: string,
    option: any
}
export type CompanyPricing = {
    company: string | CompanyModel,
    price: number,
    transport: string | TransportModel,
    status:"pending"|"denied" |"choose"
}
const bookingSchema = new Schema({
    customer: { type: Schema.Types.ObjectId, ref: "Customer" },
    company: { type: Schema.Types.ObjectId, ref: "Company"},
    auctions: [{
        company: {type: Schema.Types.ObjectId, ref: "Company", unique: true},
        transport: [{ type: Schema.Types.ObjectId, ref: "Transport"}],
        price: { type: Number},
        status: { type: String, enum:["pending","denied","chosen"], default:"pending"}
    }],
    image: { type: String},
    description: { type: String},
    lowestPrice: { type: Number},
    highestPrice: { type: Number},
    startDate: {type: Date},
    endDate: {type: Date},
    transport: {
        type: { type: String },
        amount: { type: Number},
        option: { type: String}
    },
    origin:{
        address: { type: String},
        coordinates: {
            lat: { type: Number},
            lng: { type: Number}
        },
    },
    destination: {
        address: { type: String},
        coordinates: {
            lat: { type: Number},
            lng: { type: Number}
        },
    },
    distance: {
        text:{ type: String},
        value: { type: Number}
    },
    duration:{
        text:{ type: String},
        value: { type: Number}
    },
    required: { type: String},
    rating: { type: Number, required: true, default: 5},
    option: { type: Schema.Types.Mixed}
},{ timestamps: true })

bookingSchema.pre('save',async function(next){
    let result = await googleMapService.getDistance(this.origin.address, this.destination.address)
    this.distance = result.rows[0].elements[0].distance
    this.duration = result.rows[0].elements[0].duration
    next()
})


export let Booking: mongoose.Model<BookingModel> = mongoose.model('Booking', bookingSchema)


