import * as Sequelize from 'sequelize'
import { sequelize } from './db'
import { BaseModel } from './index'

export type BookCategoryModel = BaseModel & {

}

const BookCategorySchema = sequelize.define('tbl_book_category',
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        name: { type: Sequelize.TEXT, allowNull: false },
        slug: { type: Sequelize.TEXT, unique: true },
        description: { type: Sequelize.TEXT },
        color: { type: Sequelize.STRING }
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

BookCategorySchema.associate = (models: any) => {


};


export const BookCategory = BookCategorySchema