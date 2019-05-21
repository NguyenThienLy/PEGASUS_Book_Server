import { BaseController } from "../baseController";

interface SearchOptionInterface {
    includeBook: boolean
    includePost: boolean
    includeUser: boolean
    includeCategory: boolean
    bookCategories: string[]
}

export class SearchController extends BaseController {
    constructor(){
        super()
    }
    async search(query: string, option: SearchOptionInterface){

    }
}