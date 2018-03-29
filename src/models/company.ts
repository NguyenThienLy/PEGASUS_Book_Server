import * as mongoose from 'mongoose'
import { BaseModel } from './base'

import { TransportModel } from './transport'
import { CustomerModel } from './customer'
import { BookingModel } from './booking'

import { tokenService} from '../services'

const Schema = mongoose.Schema
export type CompanyModel = BaseModel & {
    brand: string,
    info: {
        name: string,
        address: string,
        phone: string,
    },
    owner: string,
    rate: number,
    transports: string[] | TransportModel[],
    customers: string[] | CustomerModel[],
    bookings: string[] | BookingModel,
    followCompany: string[] | CompanyModel,
    followCustomer: string[] | CustomerModel,
    followByCompany: string[] | CompanyModel,
    followByCustomer: string[] | CustomerModel,
    appToken: string,
    evaluaties: [{
        customer: string | CustomerModel,
        text: string,
        rate: number
    }]
}

const companySchema = new Schema({
    brand: { type: String, require: true },
    info: {
        brand: { type: String, require: true },
        address: { type: String, require: true },
        phone: { type: String },
    },
    employees: [{ type: Schema.Types.ObjectId, ref: "Employee" }],
    owner: { type: String, require: true },
    cover: { type: String},
    avatar: { type: String},
    albums: [{
        name: { type: String},
        description: {type: String},
        imagies: [{ type: String}]
    }],
    rate: { type: Number, default: 5 },
    revenue: { type: Number, default: 0 },
    bookings: [{type: Schema.Types.ObjectId, ref: "Booking"}],
    transports: [{ type: Schema.Types.ObjectId, ref: "Transport" }],
    customers: [{ type: Schema.Types.ObjectId, ref: "Customer" }],
    appToken: { type: String},
    evaluaties: [{
        customer: { type: Schema.Types.ObjectId, ref: "Customer"},
        text: { type: String},
        rate: { type: Number, default: 5}
    }],
    followCompany: [{ type: Schema.Types.ObjectId, ref: "Company" }],
    followCustomer: [{ type: Schema.Types.ObjectId, ref: "Customer" }],
    followByCompany: [{ type: Schema.Types.ObjectId, ref: "Company" }],
    followByCustomer: [{ type: Schema.Types.ObjectId, ref: "Customer" }],
}, { timestamps: true },{
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
},{virtuals: true})

companySchema.virtual('accessToken').get( async function(){
    return await tokenService.getCompanyToken(this._id)
})
companySchema.pre('update', async function(next){
    console.log("pre update")
    next()
})

export let Company: mongoose.Model<CompanyModel> = mongoose.model('Company', companySchema)


