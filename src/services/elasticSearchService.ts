import * as elasticSearch from 'elasticsearch'


export interface ElasticSearchQuery {
    query: {
        match?: any
        wildcard?: any
        regexp?: any
    }
}


export class ElasticSearchService {
    constructor() {
        console.log("elasticsearch: ", elasticSearch)
        this.client = new elasticSearch.Client({
            host: "127.0.0.1:9200",
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
        console.log("item: ", item)
        const data: any = {
            index: index,
            id: item._id,
            type: 'books'
        }
        delete item._id
        data.body = item
        return await this.client.index(data)
    }
    public async delete(index: string, type: string, id: string) {
        return await this.client.delete({ index, type, id })
    }
    public async update(index: string, type: string, id: string, body: any) {
        return await this.client.update({ index, type, id, body })
    }
    public async search(index: string, type: string, body: ElasticSearchQuery) {
        console.log("body: ", body)
        const result = await this.client.search({ index, type, body })
        return result.hits
    }
}