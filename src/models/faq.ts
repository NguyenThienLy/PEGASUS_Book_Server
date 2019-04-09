import * as Sequelize from 'sequelize'

import { sequelize } from './db'
import { BaseModel, User, Blog, BlogModel, App, FaqCategory } from './index'

export type FaqModel = BaseModel & {
    title: string
    body: string
    thumb: string
    blogId: string
    blog: BlogModel
}

const FaqSchema = sequelize.define("tbl_faq",
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        question: { type: Sequelize.STRING },
        answer: { type: Sequelize.TEXT },
        faqCategoryId: { type: Sequelize.UUID, references: { model: 'tbl_faq_category', key: '_id' }, alowNull: false }
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
FaqSchema.associate = (models: any[]) => {
    FaqSchema.belongsTo(models['FaqCategory'], {
        foreignKey: 'faqCategoryId',
        as: 'faqCategory'
    });
    models['FaqCategory'].hasMany(FaqSchema, {
        foreignKey: 'faqCategoryId',
        as: 'faqs'
    });
};
export const Faq = FaqSchema