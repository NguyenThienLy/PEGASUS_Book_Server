import { CrudController } from '../../crudController'
import { postService } from '../../../services/crud/post'
import { ICrudOption } from '../../../services/crudService';
import { postDeletedService } from '../../../services/crud/postDeleted';

import * as _ from 'lodash'
import { sequelize } from '../../../models';
import { postReactionService } from '../../../services/crud/postReaction';

export class PostController extends CrudController<typeof postService>{
    constructor() {
        super(postService);
    }
    async delete(option?: ICrudOption) {
        const post = await postService.getItem(option)
        let transaction = await sequelize.transaction()
        try {
            await postReactionService.model.destroy({ where: { postId: post._id }}, transaction)
            await this.service.model.destroy({ where: { _id: post._id }}, transaction)
            const postDeleted = post.toJSON()
            delete postDeleted._id
            postDeletedService.create(postDeleted)
            await transaction.commit()
            return post
        } catch (err) {
            await transaction.rollback()
            throw err
        }
    }
}