import { PostReactionService } from './postReaction.service'
import { PostReactionErrorService} from './postReaction.error'

const postReactionService = new PostReactionService()
const postReactionErrorService = new PostReactionErrorService()

export {
    postReactionService,
    postReactionErrorService,
    PostReactionService
}
