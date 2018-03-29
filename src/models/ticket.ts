import * as mongoose from 'mongoose'
import { BaseModel } from './base'
import { CustomerModel } from './customer'
import { CompanyModel } from './company'
import { TransportModel } from './transport'
import { PromotionModel } from './promotion'

const Schema = mongoose.Schema
export type TicketModel = BaseModel & {
    type: string,
    customer: string | CustomerModel,
    company: string | CompanyModel,
    transport: string | TransportModel,
    cost: string,
    amount: string,
    limit: string,
    startDate: Date,
    endDate: Date,
    seat: string,
    destination: {
        address: string,
        coordinates: {
            lat: number,
            long: number
        }
    },
    pickUpPoint: {
        address: string,
        coordinates: {
            lat: number,
            long: number
        }
    },
    promotion: string | PromotionModel,
    option: any,
}

const ticketSchema = new Schema({
    type:{ type: String, enum: ["daily_ticket",""] },
    customer:  { type: Schema.Types.ObjectId, ref: "Customer"},
    company:  { type: Schema.Types.ObjectId, ref: "Company"},
    transport: { type: Schema.Types.ObjectId, ref:"Transport"},
    trip: { type: Schema.Types.ObjectId, ref: "Trip"},
    cost: { type: Number },
    currency: { type: String, enum: ["VND","USD"]},
    amount: { type: Number },
    limit: { type: Number },
    startDate: {type: Date},
    endDate: {type: Date},
    seat: { type: String },
    description: { type: String},
    destination: {
        address: { type: String},
        coordinates: {
            lat: { type: Number},
            long: { type: Number}
        },
    },
    pickUpPoint: {
        address: { type: String},
        coordinates: {
            lat: { type: Number},
            long: { type: Number}
        },
    },
    promotion: { type: Schema.Types.ObjectId, ref: "Promotion"},
    option: { type: Schema.Types.Mixed}
}, { timestamps: true})

export let Ticket: mongoose.Model<TicketModel> = mongoose.model('Ticket', ticketSchema)


