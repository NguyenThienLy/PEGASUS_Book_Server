import * as Sequelize from 'sequelize'
import { sequelize } from './db'
import { BaseModel } from './index'

export type MailSchedulerModel = BaseModel & {
    
}

const MailSchedulerSchema = sequelize.define('tbl_mail_scheduler',
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        mailTemplateId: { type: Sequelize.UUID, references: { model: 'tbl_mail_template', key: '_id' }, allowNull: false },
        mailRegisterIds: { type:  Sequelize.ARRAY(Sequelize.TEXT), defaultValue: [] },
        scheduler: { type: Sequelize.STRING }
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

MailSchedulerSchema.associate = (models: any) => {

    
};


export const MailScheduler = MailSchedulerSchema