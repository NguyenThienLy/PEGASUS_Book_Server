import * as Sequelize from 'sequelize'

import { sequelize } from './db'
import { BaseModel, User, Blog, BlogModel, App } from './index'

export type ShopModel = BaseModel & {
    title: string
    body: string
    thumb: string
    blogId: string
    blog: BlogModel
}

const ShopSchema = sequelize.define("tbl_shop",
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        name: { type: Sequelize.STRING },
        thumb: { type: Sequelize.STRING },
        description: { type: Sequelize.TEXT },
        type: { type: Sequelize.STRING },
        appId: { type: Sequelize.UUID, references: { model: 'tbl_app', key: '_id' } }
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

ShopSchema.associate = (models: any[]) => {
    ShopSchema.belongsTo(models['App'], {
        foreignKey: 'appId',
        as: 'app'
    });
    models['App'].hasMany(ShopSchema, {
        foreignKey: 'appId',
        as: 'shops'
    });
};


export const Shop = ShopSchema