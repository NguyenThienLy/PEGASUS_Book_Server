import * as express from "express";
import { CrudRouter } from "../crud";
import { commentController } from "../../controllers/crud/comment";
import { queryInfoMiddleware } from "../../middlewares";
import { Request, Response, BaseRouter } from "../base";
import { SearchController } from "../../controllers/search/search.controller";

export default class ElasticSearchRouter extends BaseRouter {
    constructor() {
        super();
        this.router = express.Router()
        this.router.post("/index", this.route(this.createIndex))
        this.router.get("/search", this.route(this.search))
    }
    router: express.Router
    async search(req: Request, res: Response){
        await this.validateJSON(req.query, {
            type: "object",
            properties: {
                keyword: { type: "string" },
                categories: { type: "string"},
                type: { type: "string" },
                orderBy: { type: "string", enum: ['DESC',"ASC"]},
                limit: { type: "number" },
                offset: { type: "number" }
            },
            required: ["keyword"],
            additionalProperties: false
        })
        console.log("req.query: ", req.query)
        const result = await SearchController.getInstance().search(req.query)
        this.onSuccess(res, result)

    }
    async createIndex(req: Request, res: Response){
        await this.validateJSON(req.body, {
            type: "object",
            properties: {
                name: { type: "string" }
            },
            required: ["name"],
            additionalProperties: false
        })
        const result = await SearchController.getInstance().createIndex(req.body)
        this.onSuccess(res, result)

    }
}
