import * as Sequelize from 'sequelize'
import { sequelize } from './db'
import { BaseModel } from './index'

export type UserSavedModel = BaseModel & {
    
}

const UserSavedSchema = sequelize.define('tbl_user_saved',
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        userId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }},
        type: { type: Sequelize.STRING, defaultValue: "post" },
        
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

UserSavedSchema.associate = (models: any) => {
    UserSavedSchema.belongsTo(models['User'], {
        foreignKey: 'userId',
        as: 'user'
    });
    models['User'].hasMany(UserSavedSchema, {
        foreignKey: 'userId',
        as: 'saveds'
    });
    
};


export const UserSaved = UserSavedSchema