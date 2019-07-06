import * as Sequelize from 'sequelize'
import { BaseModel } from './index'
import { sequelize } from './db'

export type BookModel = BaseModel & {

}

const BookSchema = sequelize.define('tbl_book',
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        title: { type: Sequelize.TEXT, alowNull: false },
        description: { type: Sequelize.TEXT },
        slug: { type: Sequelize.TEXT, allowNull: false, unique: true },
        rate: { type: Sequelize.INTEGER, defaultValue: 0 },
        thumb: { type: Sequelize.STRING },
        images: { type: Sequelize.ARRAY(Sequelize.TEXT) },
        status: { type: Sequelize.STRING, allowNull: false, defaultValue: "pending" },
        authorId: { type: Sequelize.UUID, references: { model: 'tbl_book_author', key: '_id' }, allowNull: false },
        publishedId: { type: Sequelize.UUID, references: { model: 'tbl_publisher', key: '_id' } },
        categoryId: { type: Sequelize.UUID, references: { model: 'tbl_book_category', key: '_id' } },
        categoryIds: { type: Sequelize.ARRAY({ type: Sequelize.UUID, references: { model: 'tbl_book_category', key: '_id' } }), defaultValue: [] },
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

BookSchema.associate = (models: any) => {
    BookSchema.belongsTo(models['BookAuthor'], {
        foreignKey: 'authorId',
        as: 'author'
    });
    models['BookAuthor'].hasMany(BookSchema, {
        foreignKey: 'authorId',
        as: 'books'
    });
    BookSchema.belongsTo(models['Publisher'], {
        foreignKey: 'publishedId',
        as: 'publisher'
    });
    models['Publisher'].hasMany(BookSchema, {
        foreignKey: 'publishedId',
        as: 'books'
    });
    BookSchema.belongsTo(models['BookCategory'], {
        foreignKey: 'categoryId',
        as: 'category'
    });
    models['BookCategory'].hasMany(BookSchema, {
        foreignKey: 'categoryId',
        as: 'books'
    });

};

export const Book = BookSchema