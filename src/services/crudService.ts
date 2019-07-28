import { BaseModel, sequelize, Model } from '../models'
import * as Sequelize from 'sequelize'
import * as dottie from 'dottie'
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
    group?:any[]
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

    // Lấy ra danh sách rows dựa theo filter
    async getList(option: ICrudOption = {
        filter: {},
        limit: 50,
        offset: 0
    }) {
        // Các filter
        const queryScript = this.applyQueryOptions(option)
        // Đưa fiter để query dựa vào model truyền vào
        let query = this.model.findAndCount(queryScript)
        // Thực thi câu query
        return await this.exec(query)
    }

    // Lấy ra một item dựa theo filter
    async getItem(option: ICrudOption = {
        filter: {}
    }) {
        // Các filter
        const queryScript = this.applyQueryOptions(option)
        // Đưa filter để query dựa vào model truyền vào
        let query = this.model.findOne(queryScript)
        // Thực thi câu query
        return await this.exec(query, { allowNull: false })
    }

    // Insert một row vào một bảng dựa vào filter
    async create(params: any, option: ICrudOption = {
        filter: {}
    }) {
        // Các filter
        const queryScript = this.applyQueryOptions(option)
        // Đưa filter để query dựa vào model truyền vào
        const query = this.model.create(params, queryScript)
        // Thực thi câu query
        return await this.exec(query)
    }

    // Update một row vào một bảng dựa filter
    async update(params: any, option: ICrudOption = {
        filter: {}
    }) {
        // Các filter
        const queryScript = this.applyQueryOptions(option)
        // Đưa filter để query dựa vào model truyền vào
        const query = this.model.update(params, queryScript)
        // Thực thi câu query
        await this.exec(query)
        // Trả về dòng mới cập nhật
        return this.exec(this.model.findOne(queryScript))
    }

    // Delete một row trong một bảng dựa vào filter
    async delete(option: ICrudOption = {
        filter: {}
    }) {
        // Các filter
        const queryScript = this.applyQueryOptions(option)
        // Đưa filter để query dựa vào model truyền vào
        let query = this.model.findOne(queryScript)
        // Lấy ra item chuẩn bị delete
        let item = await this.exec(query)
        // Thực thi delete một row
        await this.exec(item.destroy(query, {
            returning: true
        }))
        // Trả về dòng đã xóa
        return item
    }

    // Delete nhiều row trong một bảng dựa vào filter
    async deleteAll(option: ICrudOption = {
        filter: {}
    }) {
        // Các filter
        const queryScript = this.applyQueryOptions(option)
        // Đưa filter để query dựa vào model truyền vào
        let query = this.model.destroy(queryScript)
       
        // Thực thi câu query
        return await this.exec(query)
    }
    async rawQuery(query: string, option?: any) {
        return await sequelize.query(query, option)
    }

    // Chạy câu query vào một bảng
    applyQueryOptions(option: ICrudOption) {
        console.log("option: ", option)
        const query = {
            where: option.filter,
            limit: option.limit,
            offset: option.offset,
            order: option.order,
            attributes: option.attributes,
            include: option.include,
            paranoid: option.paranoid,
            group: option.group,
            transaction: option.transaction
        }
        return query
    }
}