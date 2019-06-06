import * as elasticSearch from 'elasticsearch'
import { config } from '../config';
import * as Request from 'request-promise'

export interface ElasticSearchQuery {
    query: {
        match?: any
        wildcard?: any
        regexp?: any
    }
}


export class ElasticSearchService {
    constructor() {
        this.client = new elasticSearch.Client({
            host: config.elastic.uri,
            log: "error"
        })
    }
    client: elasticSearch.Client;
    static instance: ElasticSearchService

    public static getInstance() {
        if (!this.instance) {
            this.instance = new ElasticSearchService()
        }
        return this.instance
    }
    async exec(promise: Request.RequestPromise) {
        try {
            return await promise
        } catch (error) {
            console.log("ERR : ", error)
            throw error
        }
    }
    public async createIndex(name: string) {
        return await this.client.create({ index: name })
    }
    public async deleteIndex(name: string) {
        return await this.client.delete({ index: name })
    }
    public async count(index: string, type: string) {
        return await this.client.count(index, type)
    }
    public async create(index: string, item: any) {
        const data: any = {
            index: index,
            id: item._id,
            // type: 'books'
        }
        delete item._id
        data.body = item
        return await this.client.index(data)
    }
    public async delete(index: string, id: string) {
        return await this.client.delete({ index, id })
    }
    public async update(index: string, id: string, body: any) {
        delete body._id
        delete body.createdAt
        delete body.updatedAt
        const options: Request.Options = {
            uri: `${config.elastic.uri}/${index}/_doc/${id}`,
            method: "POST",
            body: body,
            json: true
        }
        return await this.exec(Request(options))
        //return await this.client.update({ index, id, type: "_doc", body })
    }
    public async search(index: string, body: any, size: number, from: number) {
        const result = await this.client.search({ index, body, size, from })
        return result.hits
    }
}