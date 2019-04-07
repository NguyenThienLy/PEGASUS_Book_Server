import * as Sequelize from 'sequelize'
import bcrypt from 'bcryptjs'

import { sequelize } from './db'
import { BaseModel, User, UserModel } from './index'

export type AppModel = BaseModel & {
    owner?: string | UserModel
    name: string
    ownerId: string
}

const AppSchema = sequelize.define("tbl_app",
    {
        _id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        name: {
            type: Sequelize.STRING
        },
        ownerId: {
            type: Sequelize.UUID,
            references: {
                model: 'tbl_user',
                key: '_id'
            }
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

AppSchema.associate = (User) => {
    AppSchema.belongsTo(User, {
        foreignKey: 'ownerId',
        as: 'user'
    });
    User.hasMany(AppSchema, {
        foreignKey: 'ownerId',
        as: 'apps'
    });
};


export const App = AppSchema