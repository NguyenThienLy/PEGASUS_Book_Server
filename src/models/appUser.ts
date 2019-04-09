import * as Sequelize from 'sequelize'
import bcrypt from 'bcryptjs'

import { sequelize } from './db'
import { BaseModel, User, UserModel, App } from './index'

export type AppUserModel = BaseModel & {
    owner?: string | UserModel
    name: string
    ownerId: string
}

const AppUserSchema = sequelize.define("tbl_app_user",
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        appId: { type: Sequelize.UUID, references: { model: 'tbl_app', key: '_id' }, allowNull: false },
        userId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }, allowNull: false, unique: 'UserAppIndex' },
        role: { type: Sequelize.STRING, allowNull: false, defaultValue: 'staff' },
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

AppUserSchema.associate = (models: any[]) => {
    AppUserSchema.belongsTo(models['User'], {
        foreignKey: 'userId',
        as: 'user'
    });
    models['User'].hasMany(AppUserSchema, {
        foreignKey: 'userId',
        as: 'appUsers'
    });
    AppUserSchema.belongsTo(models['App'], {
        foreignKey: 'appId',
        as: 'app'
    });
    models['App'].hasMany(AppUserSchema, {
        foreignKey: 'AppId',
        as: 'appUsers'
    });
};


export const AppUser = AppUserSchema