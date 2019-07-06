import { firebaseService } from "..";
import { userService } from "../crud/user";


export class SocketHelper {
    constructor(){

    }

    public async getUser(userId: string, token: string){
        const firebaseUserInfo = await firebaseService.verifyIdToken(token)
        return await userService.getItem({
            filter: {
                _id: userId,
                firebaseUid: firebaseUserInfo.uid
            }
        })
    }
}