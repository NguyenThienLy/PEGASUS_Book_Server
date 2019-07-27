import * as Sequelize from 'sequelize'
import { sequelize } from './db'
import { BaseModel } from './index'

export type BookRateModel = BaseModel & {
    
}

const BookRateSchema = sequelize.define('tbl_book_rate',
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        userId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }, allowNull: false},
        bookId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }, allowNull: false },
        rate: { type: Sequelize.INTEGER,  alowNull: false ,validate: { max: 10, min: 1 } },
        influenceScore: { type: Sequelize.INTEGER, validate: { max: 10, min: 1 }, defaultValue: 1 }, 
        // isRead: { type: Sequelize.BOOLEAN, defaultValue: false },
        // review: { type: Sequelize.STRING }
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