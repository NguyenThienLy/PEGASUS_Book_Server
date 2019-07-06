import { CrudController } from '../../crudController'
import { bookRateService } from '../../../services/crud/bookRate'
import { bookService } from '../../../services/crud/book';
import { sequelize } from '../../../models';
import { ICrudOption } from '../../../services';
import { userService } from '../../../services/crud/user';
import * as Sequelize from 'sequelize'

export class BookRateController extends CrudController<typeof bookRateService>{
    constructor(){
        super(bookRateService);
    }
    async create(params: any, option?: ICrudOption) {
        const user = await userService.model.findOne({ where: { _id: params.userId }})
        params.influenceScore = user.influenceScore
        return await this.service.create(params, option)
    } 
    async getTopBookRate(params: {
        startTime: String,
        endTime: String,
        limit?: number, 
        offset?: number
    }, option?: ICrudOption){
        const { startTime, endTime, limit = 50, offset = 0 } = params
        // if(!option) option = {}
        // option.filter = {
        //     createdAt: { $gte: startTime, $lte: endTime },
        // }
        // option.attributes = [
        //     "bookId",
        //     [Sequelize.fn('sum', Sequelize.col('rate')), 'totalScore'],
        //     [Sequelize.fn('sum', Sequelize.col('influenceScore')), 'totalDenominator'],
        // ]
        // option.group = ['bookId']
        // const result = await bookRateService.getList(option)
        // console.log("result: ", result)
        const result = await bookRateService.model.findAll({
            where: {
                createdAt: { $gte: startTime, $lte: endTime },
            },
            attributes: [
                "bookId",
                [Sequelize.fn('sum', Sequelize.col('rate')), 'totalScore'],
                [Sequelize.fn('sum', Sequelize.col('influenceScore')), 'totalDenominator'],
            ],
            group: ['bookId'],
            limit, offset
        })
        const count = await bookRateService.model.count({
            where: {
                createdAt: { $gte: startTime, $lte: endTime },
            },
            attributes: [
                "bookId",
                [Sequelize.fn('sum', Sequelize.col('rate')), 'totalScore'],
                [Sequelize.fn('sum', Sequelize.col('influenceScore')), 'totalDenominator'],
            ],
            group: ['bookId'],
            limit, offset
        })
        return {
            rows: result,
            count: count.length
        }
    }
    
}