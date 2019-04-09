import * as Sequelize from 'sequelize'

import { sequelize } from './db'
import { BaseModel, User } from './index'

export type UserDetailModel = BaseModel & {
    firstName: string
    lastName: string
    address: string
    phone: string
    trustPoint: string
    careers: string[]
}

const UserDetailSchema = sequelize.define("UserDetail",
    {
        _id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        careers: {
            type: Sequelize.ARRAY(Sequelize.ENUM('technology','education','agriculture','marketing',"foodAndBeverage"))
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
        }
    }

)



UserDetailSchema.associate = (models: any[]) => {
  
};

export const  UserDetail = UserDetailSchema