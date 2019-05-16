import * as Sequelize from 'sequelize'
import { sequelize } from './db'
import { BaseModel } from './index'

export type BookChartsItemModel = BaseModel & {

}

const BookChartsItemSchema = sequelize.define('tbl_book_charts_item',
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        bookChartsId: { type: Sequelize.UUID, references: { model: 'tbl_book_charts', key: '_id' }, allowNull: false },
        bookId: { type: Sequelize.UUID, references: { model: 'tbl_book', key: '_id' }, allowNull: false },
        averageScore: { type: Sequelize.INTEGER },
        totalScore: { type: Sequelize.INTEGER },
        totalDenominator: { type: Sequelize.INTEGER }
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

BookChartsItemSchema.associate = (models: any) => {
    BookChartsItemSchema.belongsTo(models['BookCharts'], {
        foreignKey: 'bookChartsId',
        as: 'bookCharts'
    });
    models['BookCharts'].hasMany(BookChartsItemSchema, {
        foreignKey: 'bookChartsId',
        as: 'bookChartsItems'
    });

};


export const BookChartsItem = BookChartsItemSchema