import * as Sequelize from 'sequelize'

import { sequelize } from './db'
import { BaseModel, User, Blog, BlogModel, App, FaqCategory } from './index'

export type ContactModel = BaseModel & {
    title: string
    body: string
    thumb: string
    blogId: string
    blog: BlogModel
}

const ContactSchema = sequelize.define("tbl_contact",
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        fullName: { type: Sequelize.STRING, alowNull: false },
        phone: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING, validate: { isEmail: true, notEmpty: false } },
        body: { type: Sequelize.TEXT },
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

ContactSchema.associate = (models: any[]) => {
    ContactSchema.belongsTo(models['App'], {
        foreignKey: 'appId',
        as: 'app'
    });
    models['App'].hasMany(ContactSchema, {
        foreignKey: 'appId',
        as: 'contacts'
    });
};
export const Contact = ContactSchema