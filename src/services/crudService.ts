import { BaseModel, sequelize, Model } from '../models'
import * as Sequelize from 'sequelize'

export interface ICrudOption {
    filter?: any
    limit?: number
    offset?: number
    scope?: string[] | string
    order?: any[]
    attributes?: any
    include?: any[]
    distinct?: boolean
    paranoid?: boolean
    transaction?: any

    [key: string]: any
}
export interface ICrudExecOption {
    allowNull?: boolean
}
export class CrudService<T extends Model> {
    constructor(model: T) {
        this.model = model
    }
    model: T

    async exec(promise: Promise<any> | any, option?: ICrudExecOption) {
        try {
            let result;
            if (promise.hasOwnProperty("exec")) {
                result = await promise.exec();
            } else {
                result = await promise;
            }
            if ((result === undefined || result === null))
                console.log("record not found")
            //throw errorService.database.recordNotFound()
            return result;
        } catch (err) {
            console.log("Error: ", err)
            throw err;
            // if (err instanceof BaseError) throw err
            // if (config.server.debug) {
            //     if (err.errors && err.errors[0]) {
            //         throw errorService.database.queryFail(err.errors[0].message)
            //     } else {
            //       throw errorService.database.queryFail(err.message)
            //     }
            // } else {
            //     throw err
            // }
        }
    }
    async getList(option: ICrudOption = {
        filter: {},
        limit: 50,
        offset: 0
    }) {
        const queryScript = this.applyQueryOptions(option)
        let query = this.model.findAndCount(queryScript);
        return await this.exec(query)
    }
    async getItem(option?: ICrudOption) {
       
        const queryScript = this.applyQueryOptions(option)
        let query = this.model.findOne(queryScript)
        return await this.exec(query)
    }
    async create(params: any, option?: ICrudOption) {
        const query = this.model.create(params)
        return await this.exec(query)
    }
    async update(params: any, option?: ICrudOption) {
        // const query = this.model.findOneAndUpdate(option.filter, params, { new: true })
        const query = this.model.update(params, { where: option.filter })
        return await this.exec(query)
    }
    async delete(option?: ICrudOption) {
        let query = this.model.findOne()
        query = this.applyQueryOptions(option)
        const item = await this.exec(query)
        return this.exec(item.destroy())
    }
    async deleteAll(option?: ICrudOption) {
        let query = this.model.destroy(option.filter)
        query = this.applyQueryOptions(option)
        return await this.exec(query)
    }
    async rawQuery(query: string, option?: any) {
        return await sequelize.query(sequelize, option, {})
    }

    applyQueryOptions(option: ICrudOption) {
        
        const query: Sequelize.FindOptions<Model> = {
            where: option.filter,
            limit: option.limit,
            offset: option.offset,
            order: option.order,
            attributes: option.attributes,
            include: option.include,
            paranoid: option.paranoid,
        }
        return query
    }
}