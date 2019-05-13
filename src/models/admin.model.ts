import * as Sequelize from 'sequelize'
import { sequelize } from './db'
import { BaseModel } from './index'

export type AdminModel = BaseModel & {

}

const AdminSchema = sequelize.define('tbl_admin',
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        firebaseUserUid: { type: Sequelize.String, allowNull: false },
        firstName: { type: Sequelize.String },
        lastName: { type: Sequelize.String },
        role: { type: Sequelize.String, defaultValue: "reporter" }
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

AdminSchema.associate = (models: any) => {


};


export const Admin = AdminSchema