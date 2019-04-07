import * as Sequelize from 'sequelize'
import bcrypt from 'bcryptjs'

import { sequelize } from './db'
import { BaseModel, User, UserModel, App } from './index'

export type BlogModel = BaseModel & {
    name: string
    description: string
    userId: string
    user?: UserModel
}

const BlogSchema = sequelize.define("tbl_blog",
    {
        _id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        name: {
            type: Sequelize.TEXT
        },
        description: {
            type: Sequelize.TEXT
        },
        appId: {
            type: Sequelize.UUID,
            references: {
                model: 'tbl_app',
                key: '_id'
            }
        },
        userId: {
            type: Sequelize.UUID,
            references: {
                model: 'tbl_user',
                key: '_id'
            }
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

BlogSchema.associate = (User) => {
    BlogSchema.belongsTo(User, {
        foreignKey: 'userId',
        as: 'user'
    });
    User.hasMany(BlogSchema, {
        foreignKey: 'userId',
        as: 'blogs'
    });
    BlogSchema.belongsTo(App, {
        foreignKey: 'appId',
        as: 'app'
    });
    App.hasMany(BlogSchema, {
        foreignKey: 'appId',
        as: 'blogs'
    });
};
BlogSchema.associate(User)

export const Blog = BlogSchema