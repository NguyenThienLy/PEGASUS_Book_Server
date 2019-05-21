export class BookSchema {
    static UpdateBookSchema = {
        type: "object",
        properties: {
            title: { type: "string" },
            thumb: { type: "string" },
            images: { type: "array", items: { type: "string"} },
            status: { type: "string", enum: ["pending","block","update_available"] },
            authorId: { type: "string" },
            publishedId: { type: "string" },
            categoryId: { type: "string" }
        }
    }
}