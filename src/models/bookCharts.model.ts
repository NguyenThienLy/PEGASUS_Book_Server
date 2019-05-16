import * as Sequelize from 'sequelize'
import { sequelize } from './db'
import { BaseModel } from './index'

export type BookChartsModel = BaseModel & {
    
}

const BookChartsSchema = sequelize.define('tbl_book_charts',
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        bookCategoryId: { type: Sequelize.UUID, references: { model: 'tbl_book_category', key: '_id' }},
        type: { type: Sequelize.STRING, defaultValue: "week" },
        time: { type: Sequelize.DATE },
        
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

BookChartsSchema.associate = (models: any) => {
    
    
};


export const BookCharts = BookChartsSchema