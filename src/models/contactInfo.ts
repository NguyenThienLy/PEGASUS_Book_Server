import * as Sequelize from 'sequelize'

import { sequelize } from './db'
import { BaseModel, User, Blog, BlogModel, App, FaqCategory } from './index'

export type ContactInfoModel = BaseModel & {
    title: string
    body: string
    thumb: string
    blogId: string
    blog: BlogModel
}

const ContactInfoSchema = sequelize.define("tbl_contact_info",
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        title: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING, validate: { isEmail: true, notEmpty: false } },
        phones: { type: Sequelize.ARRAY(Sequelize.TEXT)},
        address: { type: Sequelize.ARRAY(Sequelize.TEXT) },
        appId: { type: Sequelize.UUID, references: { model: 'tbl_app', key: '_id' }, alowNull: false }
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

ContactInfoSchema.associate = (models: any) => {
    ContactInfoSchema.belongsTo(models['App'], {
        foreignKey: 'appId',
        as: 'app'
    });
    models['App'].hasOne(ContactInfoSchema, {
        foreignKey: 'appId',
        as: 'contactInfo'
    });
};
export const ContactInfo = ContactInfoSchema