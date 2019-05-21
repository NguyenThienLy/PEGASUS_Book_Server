import { CrudService } from '../../crudService'
import { Post } from '../../../models/post.model'
import * as Sequelize from 'sequelize'
export class PostService extends CrudService<typeof Post> {
    constructor(){
        super(Post);
    }
    async increaseReactionCount(postId: string, transaction){
  
        return await this.exec(this.model.update({ reaction: Sequelize.literal(`reaction + 1`)}, { where: { _id: postId }}, transaction))
    }
    async decreaseReactionCount(postId: string, transaction?: any){
        return await this.exec(this.model.update({ reactionCount: Sequelize.literal(`reactioncount - 1`)}, { where: { _id: postId }}, transaction))
    }
}