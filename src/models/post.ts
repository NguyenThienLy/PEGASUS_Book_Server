import * as Sequelize from 'sequelize'

import { sequelize } from './db'
import { BaseModel, User, Blog, BlogModel } from './index'

export type PostModel = BaseModel & {
    title: string
    body: string
    thumb: string
    blogId: string
    blog: BlogModel
}

const PostSchema = sequelize.define("tbl_post",
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        title: { type: Sequelize.STRING },
        shortDescription: { type: Sequelize.STRING },
        description: { type: Sequelize.TEXT },
        body: { type: Sequelize.STRING },
        thumb: { type: Sequelize.STRING },
        images: { type: Sequelize.ARRAY(Sequelize.TEXT) },
        metaTitle: { type: Sequelize.TEXT },
        metaDescription: { type: Sequelize.TEXT },
        viewCount: { type: Sequelize.INTEGER },
        blogId: { type: Sequelize.UUID, references: { model: 'tbl_blog', key: '_id' } }
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)
//sequelize.sync()
PostSchema.associate = (models: any[]) => {
    PostSchema.belongsTo(models['Blog'], {
        foreignKey: 'blogId',
        as: 'blog'
    });
    models['Blog'].hasMany(PostSchema, {
        foreignKey: 'blogId',
        as: 'posts'
    });
};
export const Post = PostSchema