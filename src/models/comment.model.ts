import * as Sequelize from 'sequelize'
import { sequelize } from './db'
import { BaseModel } from './index'

export type CommentModel = BaseModel & {
    
}

const CommentSchema = sequelize.define('tbl_comment',
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        userId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }, allowNull: false },
        postId: { type: Sequelize.UUID, references: { model: 'tbl_post', key: '_id' }, allowNull: false },
        parentId: { type: Sequelize.UUID, references: { model: 'tbl_comment', key: '_id' }},
        content: { type: Sequelize.TEXT, allowNull: false  },
        attachment: { type: Sequelize.STRING }
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

CommentSchema.associate = (models: any) => {
    CommentSchema.belongsTo(models['User'], {
        foreignKey: 'userId',
        as: 'user'
    });
    models['User'].hasMany(CommentSchema, {
        foreignKey: 'userId',
        as: 'comments'
    });
    CommentSchema.belongsTo(models['Post'], {
        foreignKey: 'postId',
        as: 'post'
    });
    models['Post'].hasMany(CommentSchema, {
        foreignKey: 'postId',
        as: 'comments'
    });
    CommentSchema.belongsTo(models['Comment'], {
        foreignKey: 'parentId',
        as: 'parentComment'
    });
    models['Comment'].hasMany(CommentSchema, {
        foreignKey: 'parentId',
        as: 'childComments'
    });
    
};


export const Comment = CommentSchema