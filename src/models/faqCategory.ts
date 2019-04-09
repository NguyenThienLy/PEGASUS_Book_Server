import * as Sequelize from 'sequelize'

import { sequelize } from './db'
import { BaseModel, User, Blog, BlogModel, App } from './index'

export type FaqCategoryModel = BaseModel & {
    title: string
    body: string
    thumb: string
    blogId: string
    blog: BlogModel
}

const FaqCategorySchema = sequelize.define("tbl_faq_category",
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        name: { type: Sequelize.STRING },
        description: { type: Sequelize.TEXT },
        appId: { type: Sequelize.UUID, references: { model: 'tbl_app', key: '_id' }, alowNull: false }
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

FaqCategorySchema.associate = (models: any[]) => {
    FaqCategorySchema.belongsTo(models['App'], {
        foreignKey: 'appId',
        as: 'app'
    });
    models['App'].hasMany(FaqCategorySchema, {
        foreignKey: 'appId',
        as: 'faqCategories'
    });
};
export const FaqCategory = FaqCategorySchema