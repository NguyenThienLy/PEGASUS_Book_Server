import { CrudController } from '../../crudController'
import { postService } from '../../../services/crud/post'
import { ICrudOption } from '../../../services/crudService';
import { postDeletedService } from '../../../services/crud/postDeleted';

import * as _ from 'lodash'
import { sequelize } from '../../../models';
import { postReactionService } from '../../../services/crud/postReaction';
import { ElasticSearchService } from '../../../services/elasticSearchService';
import { userService } from '../../../services/crud/user';
import { PostSchema } from './post.schema';

export class PostController extends CrudController<typeof postService>{
    constructor() {
        super(postService);
    }
    async create(params: any, option?: ICrudOption) {
        await this.validateJSON(params, PostSchema.CreatePostSchema)
        const post = await this.service.create(params, option)
        const user = await userService.getItem({ filter: { _id: post.userId }, fields: ["firstName", "lastName"] })
        try {
            const result = await ElasticSearchService.getInstance().create("post", {
                _id: post._id,
                title: post.title,
                description: post.description,
                author: user.firstName + " " + user.lastName,
                slug: post.slug,
                thumb: post.thumb,
                reaction: 0,
                comment: 0
            })
            return post
        } catch (err) {
            this.service.delete({ filter: { _id: post._id } })
            throw err
        }
    }

    async update(params: any, option?: ICrudOption) {
        let transaction = await sequelize.transaction()
        try {
            option.transaction = transaction
            const post = await this.service.update(params, option)
            await ElasticSearchService.getInstance().update("post", option.filter._id, post.toJSON())
            await transaction.commit()
            return post
        } catch (err) {
            await transaction.rollback()
            throw err
        }
    }
    async delete(option?: ICrudOption) {
        const post = await postService.getItem(option)
        let transaction = await sequelize.transaction()
        try {
            await postReactionService.model.destroy({ where: { postId: post._id } }, transaction)
            await this.service.model.destroy({ where: { _id: post._id } }, transaction)
            const postDeleted = post.toJSON()
            delete postDeleted._id
            postDeletedService.create(postDeleted)
            await ElasticSearchService.getInstance().delete("post", post._id)
            await transaction.commit()
            return post
        } catch (err) {
            await transaction.rollback()
            throw err
        }
    }
}