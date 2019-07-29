import * as Sequelize from 'sequelize'
import { sequelize } from './db'
import { BaseModel } from './index'

export type MailRegisterModel = BaseModel & {
    
}

const MailRegisterSchema = sequelize.define('tbl_mail_register',
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        email: { type: Sequelize.STRING, unique: "mail_register_email_index", validate: { isEmail: true, notEmpty: true }, allowNull: false},
        status: { type: Sequelize.STRING, defaultValue: "active" }
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

MailRegisterSchema.associate = (models: any) => {

    
};


export const MailRegister = MailRegisterSchema