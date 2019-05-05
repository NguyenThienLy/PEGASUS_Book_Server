import * as Sequelize from 'sequelize'
import { sequelize } from './db'
import { BaseModel } from './index'

export type UserModel = BaseModel & {
    
}

const UserSchema = sequelize.define('tbl_user',
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        password: { type: Sequelize.TEXT },
        firebaseUid: { type: Sequelize.TEXT },
        firebaseUserInfo: { type: Sequelize.JSONB },
        username: { type: Sequelize.STRING },
        firstName: { type: Sequelize.STRING },
        lastName: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING, unique: true, validate: { isEmail: true, notEmpty: true }},
        description: { type: Sequelize.TEXT },
        birthday: { type: Sequelize.DATE },
        quote: { type: Sequelize.STRING },
        job: { type: Sequelize.STRING },
        score: { type: Sequelize.INTEGER, defaultValue: 0 },
        avatar: { type: Sequelize.STRING },
        cover: { type: Sequelize.STRING },
        
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

UserSchema.associate = (models: any) => {

    
};


export const User = UserSchema