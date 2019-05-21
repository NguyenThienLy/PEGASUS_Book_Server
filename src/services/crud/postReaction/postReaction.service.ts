import { CrudService } from '../../crudService'
import { PostReaction } from '../../../models/postReaction.model'

export class PostReactionService extends CrudService<typeof PostReaction> {
    constructor(){
        super(PostReaction);
    }
}