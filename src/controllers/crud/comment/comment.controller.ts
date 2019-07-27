import { CrudController } from '../../crudController'
import { commentService } from '../../../services/crud/comment'
import { ICrudOption, notificationSystemService } from '../../../services';
import { userService } from '../../../services/crud/user';
import { postService } from '../../../services/crud/post';


export class CommentController extends CrudController<typeof commentService>{
    constructor() {
        super(commentService);
    }
    async create(params: any, option?: ICrudOption) {
        const result = await this.service.create(params, option)
        postService.getItem({ filter: { _id: params.postId } }).then(result => {
            if(result.get("userId") === params.userId) return
            notificationSystemService.tracking({
                type: "comment_on_post",
                toUserId: result.get("userId"),
                fromUserId: params.userId,
                payload: {
                    content: params.content
                }
            })
        })

        return result
    }
}