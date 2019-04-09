import * as Sequelize from 'sequelize'
import bcrypt from 'bcryptjs'

import { sequelize } from './db'
import { BaseModel } from './index'

export type UserModel = BaseModel & {
    email: string,
    displayName: string,
    password: string,
    firebaseUid: string
    firebaseUserInfo: any
}

const UserSchema = sequelize.define("tbl_user",
    {
        _id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            validate: {
                isEmail: true,
                notEmpty: true
            }
        },
        displayName: {
            type: Sequelize.TEXT
        },
        password: {
            type: Sequelize.TEXT
        },
        firebaseUid: {
            type: Sequelize.TEXT
        },
        firebaseUserInfo: {
            type: Sequelize.JSONB
        }
    },
    {
        timestamps: true,
      
        freezeTableName: true,
        paranoid: false,
        defaultScope: {
            attributes: { exclude: ['deleted_at'] }
        },
        scopes: {
            deleted: {
                where: { deleted_at: { $ne: null } },
                paranoid: false
            }
        },
        classMethods: {
            isPassword: (encodedPassword, password) => {
                return bcrypt.compareSync(password, encodedPassword)
            }
        }
    }
)

UserSchema.associate = (models: any[]) => {
  
};
export const User = UserSchema