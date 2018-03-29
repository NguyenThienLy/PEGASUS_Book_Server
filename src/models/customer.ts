import * as mongoose from 'mongoose'
import { BaseModel } from './base'

import { TicketModel } from './ticket'
import { PromotionModel } from './promotion'
import { BookingModel} from './booking'
import { CompanyModel } from './company' 

import { tokenService } from '../services'

const Schema = mongoose.Schema
export type CustomerModel = BaseModel & {
    info: {
        firstname: string,
        lastname: string,
        age: number,
        birthday: Date,
        address: string,
        identify: string
    }
    rate: string,
    bookings: string[] | BookingModel[],
    tickets: string[] | TicketModel[],
    uid: string,
    followCompany: string[] | CompanyModel,
    followCustomer: string[] | CustomerModel,
    followByCompany: string[] | CompanyModel,
    followByCustomer: string[] | CustomerModel,
}

const customerSchema = new Schema({
    info: {
        firstname: { type: String, require: true },
        lastname: { type: String, require: true },
        age: { type: Number },
        birthday: { type: Date },
        address: { type: String },
        identify: { type: String}
    },
    cover: { type: String},
    avatar: { type: String},
    albums: [{
        name: { type: String},
        description: {type: String},
        imagies: [{ type: String}]
    }],
    uid: { type: String, require: true, unique: true},
    tickets: [{type: Schema.Types.ObjectId, ref:"Ticket"}],
    rate: { type: Number, default: 5},
    bookings: [{ type: Schema.Types.ObjectId, ref: "Booking"}],
    promotions: [{type: Schema.Types.ObjectId, ref:"Promotion"}],
    followCompany: [{ type: Schema.Types.ObjectId, ref: "Company" }],
    followCustomer: [{ type: Schema.Types.ObjectId, ref: "Customer" }],
    followByCompany: [{ type: Schema.Types.ObjectId, ref: "Company" }],
    followByCustomer: [{ type: Schema.Types.ObjectId, ref: "Customer" }],
},{ timestamps: true },{virtual: true})

customerSchema.virtual('accessToken').get( async function(){
    return await tokenService.getCustomerToken(this._id)
})


export let Customer: mongoose.Model<CustomerModel> = mongoose.model('Customer', customerSchema)


