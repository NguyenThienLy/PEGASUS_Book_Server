import * as Sequelize from 'sequelize'
import { sequelize } from './db'
import { BaseModel } from './index'

export type MailTemplateModel = BaseModel & {
    name: string
    content: string
    type: "notification" | "new_post" | "news"
}

const MailTemplateSchema = sequelize.define('tbl_mail_template',
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        name: { type: Sequelize.STRING, allowNull: false },
        content: { type: Sequelize.TEXT, allowNull: false },
        type: { type: Sequelize.STRING, allowNull: false, defaultValue: "notification" }
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

MailTemplateSchema.associate = (models: any) => {

    
};


export const MailTemplate = MailTemplateSchema