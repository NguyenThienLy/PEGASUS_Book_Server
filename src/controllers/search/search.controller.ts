import * as _ from 'lodash'

import { BaseController } from "../baseController";
import { ElasticSearchService } from "../../services/elasticSearchService";



interface SearchOptionInterface {
    keyword: string
    type: "book" | "reviewer" | "post" | "author"
    categories: string
    order: "ASC" | "DESC"
    from: number
    size: number
}

export class SearchController extends BaseController {
    constructor() {
        super()
    }
    static instance: SearchController
    static getInstance(): SearchController {
        if (!this.instance) {
            this.instance = new SearchController()
        }
        return this.instance
    }
    async createIndex(params: {
        name: string
    }) {
        const { name } = params
        const result = await ElasticSearchService.getInstance().createIndex(name)
        return result
    }
    async search(option: SearchOptionInterface) {
        const { keyword, type = "post", size = 10, from = 0 } = option
        let searchQuery: any = {}
        switch (type) {
            case "book":
                searchQuery = {
                    query: {
                        wildcard: {
                            title: `*${keyword}*`,
                        }
                    },
                    "highlight": {
                        "fields": {
                            "title": {
                                "fragment_size": 150,
                                "number_of_fragments": 3
                            }
                        }
                    }
                }
                if (option.categories) {
                    searchQuery = {
                        "query": {
                            "bool": {
                                "must": [
                                    { "wildcard": { title: `*${keyword}*` } },
                                    {

                                        "constant_score": {
                                            filter: {
                                                terms: {
                                                    "categoryId": JSON.parse(option.categories)
                                                }
                                            }
                                        }
                                    }
                                ]
                            }
                        }

                    }
                }
                return ElasticSearchService.getInstance().search("book", searchQuery, size, from)
            case "reviewer":
                searchQuery = {
                    query: {
                        wildcard: {
                            name: `*${keyword}*`,
                        }
                    },
                    "highlight": {
                        "fields": {
                            "name": {
                                "fragment_size": 150,
                                "number_of_fragments": 3
                            }
                        }
                    }
                }
                return ElasticSearchService.getInstance().search("user", searchQuery, size, from)
            case "post":
                searchQuery = {
                    query: {
                        wildcard: {
                            name: `*${keyword}*`,
                        }
                    },
                    "highlight": {
                        "fields": {
                            "title": {
                                "fragment_size": 150,
                                "number_of_fragments": 3
                            }
                        }
                    }
                }

                return ElasticSearchService.getInstance().search("post", searchQuery, size, from)
            case "author":
                searchQuery = {
                    query: {
                        wildcard: {
                            name: `*${keyword}*`,
                        }
                    },
                    "highlight": {
                        "fields": {
                            "name": {
                                "fragment_size": 150,
                                "number_of_fragments": 3
                            }
                        }
                    }
                }

                return ElasticSearchService.getInstance().search("author", searchQuery, size, from)
        }
    }
}