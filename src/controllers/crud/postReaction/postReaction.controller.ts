import { CrudController } from '../../crudController'
import { postReactionService, postReactionErrorService } from '../../../services/crud/postReaction'
import { ICrudOption } from '../../../services/crudService';
import { userService } from '../../../services/crud/user';

import { sequelize } from '../../../models';


export class PostReactionController extends CrudController<typeof postReactionService>{
    constructor() {
        super(postReactionService);
    }
    async create(params: any, option?: ICrudOption) {
        await userService.increaseScore(params.postAuthorId)
        return await this.service.create(params, option)
    }
    async delete(option?: ICrudOption) {
       // return await this.service.delete(option)
        let transaction = await sequelize.transaction()
        try {
            const postReaction = await this.service.model.findOne({ where: option.filter }, transaction)
            await userService.decreaseScore(postReaction.postAuthorId, transaction)
            await this.service.model.destroy({ where: option.filter }, transaction)
            await transaction.commit()
            return postReaction
        } catch (err) {
            console.log("err: ", err)
            await transaction.rollback()
            throw postReactionErrorService.cantUnreactionPost()
        }
    }

}