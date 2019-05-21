import * as Sequelize from 'sequelize'
import { sequelize } from './db'
import { BaseModel } from './index'

export type PostReactionModel = BaseModel & {
    
}

const PostReactionSchema = sequelize.define('tbl_post_reaction',
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        userId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }, alowNull: false, unique: "post_reaction_unique" },
        postId: { type: Sequelize.UUID, references: { model: 'tbl_post', key: '_id' }, alowNull: false, unique: "post_reaction_unique" },
        postAuthorId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }, alowNull: false, unique: "post_reaction_unique" },
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

PostReactionSchema.associate = (models: any) => {
    PostReactionSchema.belongsTo(models['User'], {
        foreignKey: 'userId',
        as: 'user'
    });
    models['User'].hasMany(PostReactionSchema, {
        foreignKey: 'userId',
        as: 'postReactions'
    });
    PostReactionSchema.belongsTo(models['Post'], {
        foreignKey: 'postId',
        as: 'post'
    });
    models['Post'].hasMany(PostReactionSchema, {
        foreignKey: 'postId',
        as: 'postReactions'
    });
    PostReactionSchema.belongsTo(models['User'], {
        foreignKey: 'postAuthorId',
        as: 'postAuthor'
    });
    models['User'].hasMany(PostReactionSchema, {
        foreignKey: 'postAuthorId',
        as: 'reactions'
    });
    
};


export const PostReaction = PostReactionSchema