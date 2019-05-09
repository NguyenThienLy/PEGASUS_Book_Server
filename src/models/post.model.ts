import * as Sequelize from 'sequelize'
import { sequelize } from './db'
import { BaseModel } from './index'

export type PostModel = BaseModel & {
    
}

const PostSchema = sequelize.define('tbl_post',
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        title: { type: Sequelize.TEXT, alowNull: false },
        slug: { type: Sequelize.STRING },
        description: { type: Sequelize.STRING },
        postTemplate: { type: Sequelize.STRING },
        content: { type: Sequelize.TEXT },
        thumb: { type: Sequelize.STRING },
        images: { type:  Sequelize.ARRAY(Sequelize.TEXT) },
        userId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }, alowNull: false },
        bookId: { type: Sequelize.UUID, references: { model: 'tbl_book', key: '_id' }, alowNull: false},
        status: { type: Sequelize.STRING, defaultValue: "publish" }
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

PostSchema.associate = (models: any) => {
    PostSchema.belongsTo(models['User'], {
        foreignKey: 'userId',
        as: 'user'
    });
    models['User'].hasMany(PostSchema, {
        foreignKey: 'userId',
        as: 'posts'
    });
    PostSchema.belongsTo(models['Book'], {
        foreignKey: 'bookId',
        as: 'book'
    });
    models['Book'].hasMany(PostSchema, {
        foreignKey: 'bookId',
        as: 'posts'
    });
    
};


export const Post = PostSchema