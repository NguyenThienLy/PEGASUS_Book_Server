import * as Sequelize from 'sequelize'

import { sequelize } from './db'
import { BaseModel, User, Blog, BlogModel, App, Shop } from './index'

export type ProductCategoryModel = BaseModel & {
    title: string
    body: string
    thumb: string
    blogId: string
    blog: BlogModel
}

const ProductCategorySchema = sequelize.define("tbl_product_category",
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        name: { type: Sequelize.STRING },
        thumb: { type: Sequelize.STRING },
        description: { type: Sequelize.TEXT },
        metaTitle: { type: Sequelize.TEXT },
        metaDescription: { type: Sequelize.TEXT },
        shopId: { type: Sequelize.UUID, references: { model: 'tbl_shop', key: '_id' } }
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

ProductCategorySchema.associate = (models: any[]) => {
    ProductCategorySchema.belongsTo(models['Shop'], {
        foreignKey: 'shopId',
        as: 'shop'
    });
    models['Shop'].hasMany(ProductCategorySchema, {
        foreignKey: 'shopId',
        as: 'productCategories'
    });
};

export const ProductCategory = ProductCategorySchema