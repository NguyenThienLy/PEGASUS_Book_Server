import { CrudController } from '../../crudController'
import { notificationService, notificationErrorService } from '../../../services/crud/notification'
import { notificationRegisterService } from '../../../services/crud/notificationRegister';
import { notificationSystemService } from '../../../services';


export class NotificationController extends CrudController<typeof notificationService>{
    constructor() {
        super(notificationService);
    }
    async test(id: string){
        const notificationRegister = await notificationRegisterService.model.find({
            where: {
                userId: id
            }
        })
        notificationSystemService.sendNotification(notificationRegister.subscription, {
            type: "react_on_post",
            payload: {
                title: "Vũ Hoài Nam vừa bình luận bài viết",
                content: "Bài viết hay"
            }
        })

    }
    async subscribe(params: {
        user: any,
        subscription: any
    }) {
        const { user, subscription } = params
        const notificationRegister = await notificationRegisterService.model.find({
            where: {
                userId: user._id,
                "subscription.endpoint": {
                    "$eq": subscription.endpoint
                }
            }
        })
        if (notificationRegister) {
            throw notificationErrorService.haveRegisted()
        } else {
            return await notificationRegisterService.create({
                userId: user._id,
                subscription: subscription
            })
        }

    }
}