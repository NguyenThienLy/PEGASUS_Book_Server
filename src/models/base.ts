import * as Sequelize from 'sequelize'

export type BaseModel = {
    _id: string
    status: "active" | "deactive",
    createdAtt: Date,
    updatedAt: Date
}
export type Model = Sequelize.Model