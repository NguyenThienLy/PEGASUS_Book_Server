export interface ISocketPush {
    channel: "user_notification" | "app_notification" | "news",
    payload: any
}

export interface IUserNotificationPayload {
    type: string
    payload: any
}

export interface IAppNotificationPayload {

}

export interface INewsPayload {
    
}