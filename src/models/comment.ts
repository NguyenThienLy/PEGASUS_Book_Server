import * as Sequelize from 'sequelize'
import bcrypt from 'bcryptjs'

import { sequelize } from './db'
import { BaseModel, Post, UserModel, PostModel } from './index'

export type CommentModel = BaseModel & {
    from: string | UserModel
    body: string
    post: string | PostModel
}

const CommentSchema = sequelize.define("tbl_comment",
    {
        _id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        from: {
            type: Sequelize.STRING
        },
        body: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: true,
        
        freezeTableName: true,
        paranoid: false,
        defaultScope: {
            attributes: { exclude: ['deleted_at'] }
        },
        scopes: {
            deleted: {
                where: { deleted_at: { $ne: null } },
                paranoid: false
            }
        }
    }
)
CommentSchema.associate = (models: any[]) => {

}

export const  Comment = CommentSchema