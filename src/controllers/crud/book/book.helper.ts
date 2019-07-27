import { bookRateService } from "../../../services/crud/bookRate";


export class BookHelper {
    constructor() {

    }
    static instance: BookHelper
    static getInstance(): BookHelper {
        if (!this.instance) {
            this.instance = new BookHelper()
        }
        return this.instance
    }
    async calculateBookRate(book: any): Promise<any> {
        const bookRates = await bookRateService.model.findAll({ where: { bookId: book._id } })
        let sumScore = 0
        let sumDenominator = 0
        for (const bookRate of bookRates) {
            sumScore += bookRate.rate * bookRate.influenceScore
            sumDenominator += bookRate.influenceScore
        }
        return {
            score: sumScore,
            denominator: sumDenominator
        }
    }
}