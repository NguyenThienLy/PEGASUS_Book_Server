import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { BaseModel } from './base';
import { BlogModel } from './blogs';
import { PostModel } from './posts';

const Schema = mongoose.Schema

export type UserModel = BaseModel & {
    firstname?: string,
    lastname?: string,
    email: string,
    username?: string,
    password: string,
    info: {
        avata: string,
        coverImage?: string,
        address: string,
        introduction: string
    },
    follow?: string[] | UserModel[],
    followBy?: string[] | UserModel[],
}
const userSchema = new Schema ({
    firstname: { type: String},
    lastname: { type: String },
    email: { type: String, unique: true, require: true},
    username: { type: String, unique: true, require: true},
    password: { type: String },
    info: {
        avata: { type: String },
        coverImage: { type: String },
        address: { type: String },
        introduction: { type: String }
    },
    follow: [{type: Schema.Types.ObjectId, ref:'User'}],
    followCount: Number,
    followBy: [{type: Schema.Types.ObjectId, ref:'User'}],
    followByCount: Number,
    followBlog: [{type: Schema.Types.ObjectId, ref:'Blog'}],
    blog: [{type: Schema.Types.ObjectId, ref:'Blog'}],
    status: { type: String, enum: ["active", "deactive"], default: "deactive"}
})
userSchema.pre('save', function(next){
    var user = this;
    if (!this.createAt) this.createAt = new Date;
    this.followCount = this.follow.length;
    this.followByCount = this.followBy.length;
    bcrypt.genSalt(10, function(err,salt){
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function(err,hash){
            user.password = hash;
            next();
        });
    });
});
userSchema.methods.compare = function(pw){
    return bcrypt.compareSync(pw, this.password);
};

export let User: mongoose.Model<UserModel> = mongoose.model('User', userSchema)