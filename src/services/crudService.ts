import { BaseModel, sequelize, Model } from '../models'
import * as Sequelize from 'sequelize'
import { errorService } from '.';

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
        this.Op = Sequelize.Op
    }
    model: T
    Op: any

    async exec(promise: Promise<any> | any, option?: ICrudExecOption) {
        try {
            let result;
            if (promise.hasOwnProperty("exec")) {
                result = await promise.exec();
            } else {
                result = await promise;
            }
            if ((result === undefined || result === null)){
                throw errorService.database.recordNotFound()
            }
            return result;
        } catch (err) {
            throw err;
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
        return await this.exec(query, { allowNull: false })
    }
    async create(params: any, option?: ICrudOption) {
        const query = this.model.create(params)
        return await this.exec(query)
    }
    async update(params: any, option?: ICrudOption) {
        // const query = this.model.findOneAndUpdate(option.filter, params, { new: true })
        const queryScript = this.applyQueryOptions(option)
        const query = this.model.update(params, { where: option.filter })
        await this.exec(query)
        return this.exec(this.model.findOne(queryScript))
    }
    async delete(option?: ICrudOption) {
        const queryScript = this.applyQueryOptions(option)
        let query = this.model.findOne(queryScript)
        let item = await this.exec(query)
        await this.exec(item.destroy(query, {
            returning: true
        }))
        return item
    }
    async deleteAll(option?: ICrudOption) {
        let query = this.model.destroy(option.filter)
        query = this.applyQueryOptions(option)
        return await this.exec(query)
    }
    async rawQuery(query: string, option?: any) {
        return await sequelize.query(query, option)
    }

    applyQueryOptions(option: ICrudOption) {
        
        const query = {
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