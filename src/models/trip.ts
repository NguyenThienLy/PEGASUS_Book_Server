import * as mongoose from 'mongoose'
import { BaseModel } from './base'

import { TicketModel } from './ticket'
import { PromotionModel } from './promotion'
import { CustomerModel } from './customer'
import { CompanyModel } from './company'
import { TransportModel } from './transport'

const Schema = mongoose.Schema

export type TripModel = BaseModel & {
    
}

const tripSchema = new Schema({
    type: { type: String},
    company: { type: Schema.Types.ObjectId, ref: "Company"},
    ticket: [{type: Schema.Types.ObjectId, ref:"Ticket"}],
    transport: {type: Schema.Types.ObjectId, ref: "Transport"},
    cost: { type: Number },
    currency: { type: String, enum: ["VND","USD"]},
    amount: { type: Number },
    limit: { type: Number },
    startDate: {type: Date},
    endDate: {type: Date},
    seat: { type: String },
    description: { type: String},
    pickUpPoint: {
        address: { type: String},
        coordinates: {
            lat: { type: Number},
            long: { type: Number}
        },
    },
    destination: {
        address: { type: String},
        coordinates: {
            lat: { type: Number},
            long: { type: Number}
        },
    },
    promotion: { type: Schema.Types.ObjectId, ref: "Promotion"},
    option: { type: Schema.Types.Mixed}
},{ timestamps: true })

export let Trip: mongoose.Model<TripModel> = mongoose.model('Trip', tripSchema)


