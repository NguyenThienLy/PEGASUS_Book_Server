import { FirebaseAuthInfoMiddleware } from './firebaseAuthMiddleware'
import { AuthInfoMiddleware } from './authMiddleware'
import { QueryInfoMiddleware } from './queryMiddleware'
import { BlockMiddleware } from './blockMiddleware'



const firebaseAuthInfoMiddleware = new FirebaseAuthInfoMiddleware()
const authInfoMiddleware = new AuthInfoMiddleware()
const queryInfoMiddleware = new QueryInfoMiddleware()
const blockMiddleware = new BlockMiddleware()



export {
    firebaseAuthInfoMiddleware,
    authInfoMiddleware,
    queryInfoMiddleware,
    blockMiddleware,


}