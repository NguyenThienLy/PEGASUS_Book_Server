import * as Sequelize from 'sequelize'
import { sequelize } from './db'
import { BaseModel } from './index'

export type UserSaveCollectionModel = BaseModel & {
    
}

const UserSaveCollectionSchema = sequelize.define('tbl_user_save_collection',
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        userId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' } },
        name: { type: Sequelize.STRING },
        description: { type: Sequelize.TEXT }
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

UserSaveCollectionSchema.associate = (models: any) => {
    UserSaveCollectionSchema.belongsTo(models['User'], {
        foreignKey: 'userId',
        as: 'user'
    });
    models['User'].hasMany(UserSaveCollectionSchema, {
        foreignKey: 'userId',
        as: 'saveCollections'
    });
    
};


export const UserSaveCollection = UserSaveCollectionSchema