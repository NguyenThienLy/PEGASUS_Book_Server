import * as Sequelize from 'sequelize'
import { sequelize } from './db'
import { BaseModel } from './index'

export type NotificationRegisterModel = BaseModel & {
    
}

const NotificationRegisterSchema = sequelize.define('tbl_notification_register',
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        userId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' } },
        subscription: { type: Sequelize.JSONB }
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

NotificationRegisterSchema.associate = (models: any) => {
        
};


export const NotificationRegister = NotificationRegisterSchema