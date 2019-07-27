import * as Sequelize from 'sequelize'
import { sequelize } from './db'
import { BaseModel } from './index'

export type NotificationModel = BaseModel & {
    userId: string
    type: "react_on_post" | "comment_on_post" | "report_on_post" | "follow" | "unfollow"
    payload: any
}

const NotificationSchema = sequelize.define('tbl_notification',
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        userId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }, allowNull: false  },
        type: { type: Sequelize.STRING, allowNull: false  },
        payload: { type: Sequelize.JSONB, allowNull: false  }
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

NotificationSchema.associate = (models: any) => {
    NotificationSchema.belongsTo(models['User'], {
        foreignKey: 'userId',
        as: 'user'
    });
    models['User'].hasMany(NotificationSchema, {
        foreignKey: 'userId',
        as: 'notifications'
    });
    
};


export const Notification = NotificationSchema