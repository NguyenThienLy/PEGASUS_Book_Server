import * as Sequelize from 'sequelize'
import { sequelize } from './db'
import { BaseModel } from './index'

export type BookRateModel = BaseModel & {
    
}

const BookRateSchema = sequelize.define('tbl_book_rate',
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        userId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }},
        bookId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }},
        rate: { type: Sequelize.INTEGER,  alowNull: false ,validate: { max: 10, min: 1 } }
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

BookRateSchema.associate = (models: any) => {
    BookRateSchema.belongsTo(models['User'], {
        foreignKey: 'userId',
        as: 'user'
    });
    models['User'].hasMany(BookRateSchema, {
        foreignKey: 'userId',
        as: 'bookRates'
    });
    BookRateSchema.belongsTo(models['Book'], {
        foreignKey: 'bookId',
        as: 'book'
    });
    models['Book'].hasMany(BookRateSchema, {
        foreignKey: 'bookId',
        as: 'bookRates'
    });
    
};


export const BookRate = BookRateSchema