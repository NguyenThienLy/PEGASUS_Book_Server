import * as Sequelize from 'sequelize'
import { sequelize } from './db'
import { BaseModel } from './index'

export type RequestCreateBookModel = BaseModel & {

}

const RequestCreateBookSchema = sequelize.define('tbl_request_create_book',
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        bookName: { type: Sequelize.STRING, allowNull: false },
        authorName: { type: Sequelize.STRING, allowNull: false },
        note: { type: Sequelize.TEXT },
        userId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }, alowNull: false },
        status: { type: Sequelize.STRING, allowNull: false, defaultValue: "active" },
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

RequestCreateBookSchema.associate = (models: any) => {


};


export const RequestCreateBook = RequestCreateBookSchema