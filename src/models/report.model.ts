import * as Sequelize from 'sequelize'
import { sequelize } from './db'
import { BaseModel } from './index'

export type ReportModel = BaseModel & {
    
}

const ReportSchema = sequelize.define('tbl_report',
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        userId: { type: Sequelize.UUID, references: { model: 'tbl_user', key: '_id' }, allowNull: false },
        postId: { type: Sequelize.UUID, references: { model: 'tbl_post', key: '_id' }, allowNull: false },
        reason: { type: Sequelize.TEXT, allowNull: false  },
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

ReportSchema.associate = (models: any) => {
    ReportSchema.belongsTo(models['User'], {
        foreignKey: 'userId',
        as: 'user'
    });
    models['User'].hasMany(ReportSchema, {
        foreignKey: 'userId',
        as: 'reports'
    });
    ReportSchema.belongsTo(models['Post'], {
        foreignKey: 'postId',
        as: 'post'
    });
    models['Post'].hasMany(ReportSchema, {
        foreignKey: 'postId',
        as: 'reports'
    });
    
};


export const Report = ReportSchema