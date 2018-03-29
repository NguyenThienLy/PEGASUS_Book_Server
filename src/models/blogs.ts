import * as mongoose from 'mongoose';
import { BaseModel } from './base';
import { UserModel } from './users';
import { PostModel } from './posts';

const Schema = mongoose.Schema;

export type BlogModel =  BaseModel & {
    author: string | UserModel,
    name: string,
    description?: string,
    coverImage?: string,
    post: string[] | PostModel[],
    followBy: string[],
    followByCount: number
}

const blogSchema = new Schema({
    author: {type: Schema.Types.ObjectId, ref: "User", require: true},
    name: { type: String },
    description: { type: String },
    coverImage: { type: String },
    post: [{type: Schema.Types.ObjectId, ref: "Post", default: []}],
    followBy: [{type: Schema.Types.ObjectId, ref: "User", default: []}],
    followByCount: { type: Number }
},{ timestamps: true })

// blogSchema.pre('save', next=>{
//     this.followByCount = this.followBy.length;
//     next();
// })

//module.exports = mongoose.model('Blog', blogSchema)
export let Blog: mongoose.Model<BlogModel> = mongoose.model('Blog', blogSchema);


