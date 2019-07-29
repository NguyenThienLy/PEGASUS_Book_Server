export class PostSchema {
    static CreatePostSchema = {
        type: "object",
        properties: {
            title: { type: "string", minLength: 1 },
            slug: { type: "string" },
            thumb: { type: "string", format: "uri", minLength: 1 },
            images: { type: "array", items: { type: "string", format: "uri" } },
            status: { type: "string", enum: ["draft", "publish"] },
            bookId: { type: "string" },
            requestCreateBookId: { type: "string" },
            description: { type: "string" },
            content: { type: "string", minLength: 255 },
            userId: { type: "string" }
        },
        required: ["title", "slug", "thumb", "images", "status", "description", "content", "userId"],
        additionalProperties: false
    }
}