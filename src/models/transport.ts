import * as mongoose from 'mongoose'
import { BaseModel } from './base'
import { CompanyModel } from './company'

const Schema = mongoose.Schema
export type TransportModel = BaseModel & {
    type: string,
    company: string | CompanyModel,
    image: string[],
    option: any,
    rate: number,
    licensePlate: string
}

const transportSchema = new Schema({
    type:{ type: String },
    company:  { type: Schema.Types.ObjectId, ref: "Company"},
    image: [{type: String}],
    option: { type: Schema.Types.Mixed},
    rate: { type: Number, default: 5 },
    licensePlate: { type: String, require: true}
})

export let Transport: mongoose.Model<TransportModel> = mongoose.model('Transport', transportSchema)


