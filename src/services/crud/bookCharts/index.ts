import { BookChartsService } from './bookCharts.service'
import { BookChartsHelper } from './bookCharts.helper'
import { BookChartsErrorService } from './bookCharts.error'

const bookChartsService = new BookChartsService()
const bookChartsHelper = new BookChartsHelper()
const bookChartsErrorService = new BookChartsErrorService()

export {
    bookChartsService,
    bookChartsHelper,
    bookChartsErrorService,
    BookChartsService
}
