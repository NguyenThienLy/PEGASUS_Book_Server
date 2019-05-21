import * as Sequelize from 'sequelize'
import { sequelize } from './db'
import { BaseModel } from './index'

export type UserFollowModel = BaseModel & {
    
}

const UserFollowSchema = sequelize.define('tbl_user_follow',
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        fromId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }},
        toId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }},
        isAccept: { type: Sequelize.BOOLEAN, defaultValue: false }
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

UserFollowSchema.associate = (models: any) => {
    UserFollowSchema.belongsTo(models['User'], {
        foreignKey: 'fromId',
        as: 'from'
    });
    models['User'].hasMany(UserFollowSchema, {
        foreignKey: 'fromId',
        as: 'flows'
    });
    UserFollowSchema.belongsTo(models['User'], {
        foreignKey: 'toId',
        as: 'to'
    });
    models['User'].hasMany(UserFollowSchema, {
        foreignKey: 'toId',
        as: 'flowBys'
    });
    
};


export const UserFollow = UserFollowSchema