import * as Sequelize from 'sequelize'

import { sequelize } from './db'
import { BaseModel, User, Blog, BlogModel, ProductCategory } from './index'

export type ProductModel = BaseModel & {
    title: string
    body: string
    thumb: string
    blogId: string
    blog: BlogModel
}

const ProductSchema = sequelize.define("tbl_product",
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        name: { type: Sequelize.STRING },
        shortDescription: { type: Sequelize.STRING },
        thumb: { type: Sequelize.STRING },
        images: { type: Sequelize.ARRAY(Sequelize.TEXT) },
        price: { type: Sequelize.INTEGER },
        description: { type: Sequelize.TEXT },
        ingredient: { type: Sequelize.STRING },
        metaTitle: { type: Sequelize.TEXT },
        metaDescription: { type: Sequelize.TEXT },
        viewCount: { type: Sequelize.INTEGER },
        productCategoryId: { type: Sequelize.UUID, references: { model: 'tbl_blog', key: '_id' } }
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)
//sequelize.sync()
ProductSchema.associate = (models: any[]) => {
    ProductSchema.belongsTo(models['ProductCategory'], {
        foreignKey: 'productCategoryId',
        as: 'productCategory'
    });
    models['ProductCategory'].hasMany(ProductSchema, {
        foreignKey: 'productCategoryId',
        as: 'products'
    });
};
export const Product = ProductSchema