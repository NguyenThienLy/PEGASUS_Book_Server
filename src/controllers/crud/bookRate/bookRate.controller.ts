import { CrudController } from '../../crudController'
import { bookRateService } from '../../../services/crud/bookRate'
import { bookService } from '../../../services/crud/book';
import { sequelize } from '../../../models';
import { ICrudOption } from '../../../services';
import { userService } from '../../../services/crud/user';


export class BookRateController extends CrudController<typeof bookRateService>{
    constructor(){
        super(bookRateService);
    }
    async create(params: any, option?: ICrudOption) {
        const user = await userService.model.findOne({ where: { _id: params.userId }})
        params.influenceScore = user.influenceScore
        return await this.service.create(params, option)
    } 
}