import {  INotificationTracking, INotificationWebPushPayload } from "./notification.interface";
import * as webpush from 'web-push'
import { userService } from "../crud/user";
import { notificationRegisterService } from "../crud/notificationRegister";
import { notificationService } from "../crud/notification";
import { socketService } from "..";

export class NotificationSystemService {
    constructor() {
        this.privateKey = "kL6Yy2Hgj5IZ44I4ISVsK2F-ATseeNQ3K4Lt9ettcgA"
        this.publicKey = "BLL7l3xcJLE-qdzBcy5uGKaDEvZt0hiHG-MwdOQeP27rifGN8HMF8lHhAH673iDdfrKqjSioDlm6PsBZED1V9ik"
        webpush.setVapidDetails('mailto:vunam.cmg@gmail.com', this.publicKey, this.privateKey)
    }
    privateKey: string
    publicKey: string
    public async tracking(params: INotificationTracking) {
        const { toUserId, type, payload, fromUserId } = params
        let pushPayload: INotificationWebPushPayload
        let socketPayload: any
        let fromUser: any = await userService.getItem({
            filter: {
                _id: fromUserId
            },
            attributes: ["firstName", "lastName"]
        })

        fromUser = fromUser.toJSON()
        switch (type) {
            case "react_on_post":
                pushPayload = {
                    type: params.type,
                    payload: {
                        title: `${fromUser.firstName} ${fromUser.lastName} vừa yêu thích bài viết của bạn`,
                        content: ``,
                        fromUserId: fromUserId
                    }
                }
                socketPayload = {
                    userId: toUserId,
                    fromUserId: fromUserId,
                    title: `${fromUser.firstName} ${fromUser.lastName} vừa yêu thích bài viết của bạn`,
                    message: ``,
                    postId: payload.postId
                }
                break
            case "comment_on_post":
                pushPayload = {
                    type: params.type,
                    payload: {
                        title: `${fromUser.firstName} ${fromUser.lastName} vừa bình luận bài viết của bạn`,
                        content: payload.content,
                        fromUserId: fromUserId
                    }
                }
                socketPayload = {
                    userId: toUserId,
                    fromUserId: fromUserId,
                    title: `${fromUser.firstName} ${fromUser.lastName} vừa bình luận bài viết của bạn`,
                    message: payload.content,
                    postId: payload.postId
                }
                break
            case "report_on_post":
                pushPayload = {
                    type: params.type,
                    payload: {
                        title: `${fromUser.firstName} ${fromUser.lastName} vừa báo cáo bài viết của bạn`,
                        content: ``,
                        fromUserId: fromUserId
                    }
                }
                break
            case "follow":
                pushPayload = {
                    type: params.type,
                    payload: {
                        title: `${fromUser.firstName} ${fromUser.lastName} vừa theo dõi bạn`,
                        content: ``,
                        fromUserId: fromUserId
                    }
                }
                socketPayload = {
                    userId: toUserId,
                    fromUserId: fromUserId,
                    title: `${fromUser.firstName} ${fromUser.lastName} vừa theo dõi bạn`,
                    message: ``
                }
                break
        }
        const notificationRegisters = await notificationRegisterService.model.findAll({
            where: {
                userId: toUserId
            },
            attributes: ["subscription"]
        })
        
        notificationService.create({
            userId: toUserId,
            type: type,
            payload: pushPayload.payload
        })
        socketService.sendSocket("user_notification", socketPayload)
        for(const notificationRegister of notificationRegisters){
            this.sendNotification(notificationRegister.toJSON().subscription, pushPayload)
        }
    }
    public sendNotification(subscription: any, payload: any) {
        console.log("send notification: ", payload)
        webpush.sendNotification(subscription, JSON.stringify(payload)).catch(err => {
            console.log("Send notification err: ", err)
        })
    }
}