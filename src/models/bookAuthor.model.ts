import * as Sequelize from 'sequelize'
import { sequelize } from './db'
import { BaseModel } from './index'

export type BookAuthorModel = BaseModel & {
    
}

const BookAuthorSchema = sequelize.define('tbl_book_author',
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        name: { type: Sequelize.STRING, allowNull: false  },
        avatar: { type: Sequelize.STRING, allowNull: false  },
        images: { type:  Sequelize.ARRAY(Sequelize.TEXT) },
        birdthday: { type: Sequelize.DATE },
        biography: { type: Sequelize.TEXT }
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

BookAuthorSchema.associate = (models: any) => {

    
};


export const BookAuthor = BookAuthorSchema