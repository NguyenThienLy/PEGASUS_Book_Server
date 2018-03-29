import * as mongoose from 'mongoose'
import { BaseModel } from './base'

const Schema = mongoose.Schema
export type PromotionModel = BaseModel & {
    type: string,
    company: string,
    limit: number,
    amount: number,
    startDate: Date,
    endDate: Date,
    description: string,
    option: any
}

const promotionSchema = new Schema({
    type:{ type: String },
    amount: { type: Number },
    limit: { type: Number },
    startDate: {type: Date},
    endDate: {type: Date},
    company:  { type: Schema.Types.ObjectId, ref: "Company"},
    option: { type: Schema.Types.Mixed},
    code: { type: String}
},{ timestamps: true })

export let Promotion: mongoose.Model<PromotionModel> = mongoose.model('Promotion', promotionSchema)


