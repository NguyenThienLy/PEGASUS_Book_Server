import { BookCharts } from '../../../models/bookCharts.model'

import * as moment from 'moment'
import { utilService } from '../..';
import { bookRateService } from '../bookRate';
import * as Sequelize from 'sequelize'
import { CONST } from '../../../config/const';
import { bookChartsService } from '.';
import { bookChartsItemService } from '../bookChartsItem';

export class BookChartsHelper {
    constructor() {

    }
    static instance: BookChartsHelper
    static getInstance(): BookChartsHelper {
        if (!this.instance) {
            this.instance = new BookChartsHelper()
        }
        return this.instance
    }
    async updateCharts() {
        const timenow = moment().utcOffset("+07:00")
        this.updateBookChartsOfWeek(timenow)
        this.updateBookChartsOfMonth(timenow)
        this.updateBookChartsOfQuarter(timenow)
        this.updateBookChartOfYear(timenow)

    }
    async updateBookChartsOfWeek(timenow) {
        const startWeek = moment(timenow).startOf("week").format()
        const endWeek = moment(timenow).endOf("week").format()
        this.exec("week", startWeek, endWeek)
    }
    async updateBookChartsOfMonth(timenow) {
        const startMonth = moment(timenow).startOf("month").format()
        const endMonth = moment(timenow).endOf("month").format()
        this.exec("month", startMonth, endMonth)
    }
    async updateBookChartsOfQuarter(timenow) {
        const startQuarter = moment(timenow).startOf("quarter").format()
        const endQuarter = moment(timenow).endOf("quarter").format()
        this.exec("quarter", startQuarter, endQuarter)
    }
    async updateBookChartOfYear(timenow) {
        const startYear = moment(timenow).startOf("year").format()
        const endYear = moment(timenow).endOf("year").format()
        this.exec("year", startYear, endYear)
    }
    async exec(type: string, start: string, end: string){
        let minDenominator = 0
        switch(type){
            case "week":
                minDenominator = CONST.BOOK_CHARTS.DEMINATOR.MIN_WEEK
                break
            case "month":
                minDenominator = CONST.BOOK_CHARTS.DEMINATOR.MIN_MONTH
                break
            case "quarter":
                minDenominator = CONST.BOOK_CHARTS.DEMINATOR.MIN_QUARTER
                break
            case "year":
                minDenominator = CONST.BOOK_CHARTS.DEMINATOR.MIN_YEAR
                break
        }
        const bookCharts = await bookChartsService.model.findOrCreate({
            where: {
                time: { $gte: start, $lte: end },
                type: type,
            },
            defaults: {
                time: start,
                type: type,
            }
        })
        bookRateService.model.findAll({
            where: {
                updatedAt: { $gte: start, $lte: end },
            },
            attributes: [
                "bookId",
                [Sequelize.fn('sum', Sequelize.col('rate')), 'totalScore'],
                [Sequelize.fn('sum', Sequelize.col('influenceScore')), 'totalDenominator'],
            ],
            group: ['bookId']
        }).then(bookRates => {
            for (let bookRate of bookRates) {
                bookRate = bookRate.toJSON()
                if (bookRate.totalDenominator > minDenominator) {
                    bookChartsItemService.model.findOrCreate({
                        where: {
                            bookChartsId: bookCharts[0]._id,
                            bookId: bookRate.bookId
                        },
                        defaults: {
                            bookChartsId: bookCharts[0]._id,
                            bookId: bookRate.bookId
                        }
                    }).then(result => {
                        result[0].update({
                            totalScore: bookRate.totalScore,
                            totalDenominator: bookRate.totalDenominator,
                            averageScore: bookRate.totalScore / bookRate.totalDenominator
                        })
                    }).catch(err => {

                    })
                }
            }
        }).catch(err => {
            console.log("err: ", err)
        })
    }
}