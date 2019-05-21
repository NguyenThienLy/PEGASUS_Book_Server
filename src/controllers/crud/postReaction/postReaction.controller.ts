import * as _ from "lodash"

import { CrudController } from '../../crudController'
import { postReactionService, postReactionErrorService } from '../../../services/crud/postReaction'
import { ICrudOption } from '../../../services/crudService';
import { userService } from '../../../services/crud/user';

import { sequelize } from '../../../models';
import { postService } from '../../../services/crud/post';


export class PostReactionController extends CrudController<typeof postReactionService>{
    constructor() {
        super(postReactionService);
    }
    async create(params: any, option?: ICrudOption) {
        let transaction = await sequelize.transaction()
        try {
            await userService.increaseScore(params.postAuthorId, transaction)
            await postService.increaseReactionCount(params.postId, transaction)
            const postReaction = await this.service.create(params, _.merge(option, { transaction }))
            await transaction.commit()
            return postReaction
        } catch (err) {
            console.log("err: ", err)
            await transaction.rollback()
            throw postReactionErrorService.cantUnreactionPost()
        }
    }
    async delete(option?: ICrudOption) {
        // return await this.service.delete(option)
        let transaction = await sequelize.transaction()
        try {
            const postReaction = await this.service.model.findOne({ where: option.filter }, transaction)
            await userService.decreaseScore(postReaction.postAuthorId, transaction)
            // await postService.decreaseReactionCount(postReaction.postId, transaction)
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