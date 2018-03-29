import * as mongoose from 'mongoose'
import { BaseModel } from './base';
import { UserModel } from './users';
import { BlogModel } from './blogs';
const Schema = mongoose.Schema;

export type PostModel = BaseModel & {
    author: string | UserModel,
    blog: string | BlogModel,
    body: string,
    thumbnalImage?: string,
    image?: string[],
    category?: string,
    tag?: string[],
    public: boolean,
    comment?: any[],
    like: string[] | UserModel[],
}
const postSchema = new Schema({
    author: {type: Schema.Types.ObjectId, ref: "User", require: true},
    blog: {type: Schema.Types.ObjectId, ref: "Blog", require: true},
    body: {type: String, require: true},
    thumbnailImage: { type: String, default: "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png"},
    image: [{ type: String}],
    category: [{ type: String}],
    tag: [{ type: String} ],
    updateDate: { type: Date},
    public: {type: Boolean, default: true},
    comment: [{
        body: String,
        date: Date,
        userComment: {type: Schema.Types.ObjectId, ref: "User", require: true},
    }],
    like: [{type: Schema.Types.ObjectId, ref: "User"}],
    likeCount: Number,
    commentCount: Number,
    status: { type: String, enum: ["active", "deactive"]}
}, { timestamps: true })

//module.exports = mongoose.model('Post', postSchema)
export let Post: mongoose.Model<PostModel> = mongoose.model('Post', postSchema);