import * as Sequelize from 'sequelize'
import { sequelize } from './db'
import { BaseModel } from './index'

export type PublisherModel = BaseModel & {
    
}

const PublisherSchema = sequelize.define('tbl_publisher',
    {
        _id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        brandName: { type: Sequelize.TEXT, allowNull: false }
    },
    {
        timestamps: true,
        freezeTableName: true,
        paranoid: false,
        defaultScope: { attributes: { exclude: ['deleted_at'] } },
        scopes: { deleted: { where: { deleted_at: { $ne: null } }, paranoid: false } }
    }
)

PublisherSchema.associate = (models: any) => {

};


export const Publisher = PublisherSchema