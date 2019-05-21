import { bookRateService } from "../../../services/crud/bookRate";


export class BookChartsHelperController {
    constructor() {

    }
    static instance: BookChartsHelperController
    static getInstance(): BookChartsHelperController {
        if (!this.instance) {
            this.instance = new BookChartsHelperController()
        }
        return this.instance
    }
    async updateBookChart(){

    }
}