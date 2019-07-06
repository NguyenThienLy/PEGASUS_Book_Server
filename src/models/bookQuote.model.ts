import * as Sequelize from 'sequelize'
import { sequelize } from './db'
import { BaseModel } from './index'

export type BookQuoteModel = BaseModel & {

}

const BookQuoteSchema = sequelize.define('tbl_book_quote',
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        bookId: { type: Sequelize.UUID, references: { model: 'tbl_book', key: '_id' }, allowNull: false  },
        quote: { type: Sequelize.TEXT, defaultValue: "" },
        image: { type: Sequelize.STRING }
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

BookQuoteSchema.associate = (models: any) => {
    BookQuoteSchema.belongsTo(models['Book'], {
        foreignKey: 'bookId',
        as: 'book'
    });
    models['Book'].hasMany(BookQuoteSchema, {
        foreignKey: 'bookId',
        as: 'quotes'
    });

};


export const BookQuote = BookQuoteSchema