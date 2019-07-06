export interface INotificationTracking {
    toUserId: string
    fromUserId: string
    type: "react_on_post" | "comment_on_post" | "report_on_post" | "follow" | "unfollow",
    payload?: any
}

export interface INotificationWebPushPayload {
    type: "react_on_post" | "comment_on_post" | "report_on_post" | "follow" | "unfollow",
    payload: {
        title: string
        content: string
        fromUserId?: string
    }
}

export interface IReactOnPostPayload {
    title: string
    content: string
}

export interface ICommentOnPostPayload {
    fromUserId: string
    content: string
}

export interface IReportOnPostPayload {
    content: string
    timestamp: string
}

export interface IFollowPayload {
    fromUserId: string
    timestamp: string
}

export interface IUnfollowPayload {
    fromUserId: string
    timestamp: string
}