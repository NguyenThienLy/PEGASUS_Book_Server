import * as express from 'express';
import { CrudRouter } from '../crud';
import { companyController } from '../../controllers'
import { Request, Response } from '../base'
import { firebaseAuthInfoMiddleware, companyInfoMiddleware, companyAuthMiddleware, queryInfoMiddleware, customerAuthMiddleware, blockMiddleware } from '../../middlewares'
import { Company } from '../../models'

export default class CompanyRouter extends CrudRouter<typeof companyController> {
    constructor() {
        super(companyController);
    }
    customRouter() {
        this.router.get('/me', this.getCompanyInfoMiddleware(), this.route(this.getCompanyInfo))
        this.router.put('/pricing', this.pricingMiddleware(), this.route(this.pricing))
        this.router.put('/editPricing', this.editPricingMiddleware(), this.route(this.editPricing))
        this.router.delete('/exitPricing', this.exitPricingMiddlewares(), this.route(this.exitPricing))
        this.router.put('/addTransport', this.addTransportMiddleware(), this.route(this.addTransport))
        this.router.get('/transports', this.getTransportsMiddlewares(), this.route(this.getTransports))
        this.router.put('/:_id/evaluate', this.evaluateMiddlewares(), this.route(this.evaluate))
        this.router.put('/:_id/companyFollow', this.companyFollowMiddlewares(), this.route(this.companyFollow))
        this.router.put('/:_id/companyUnfollow', this.companyUnfollowMiddlewares(), this.route(this.companyUnfollow))
        this.router.put('/:_id/customerFollow', this.customerFollowMiddlewares(), this.route(this.customerFollow))
        this.router.put('/:_id/customerUnfollow', this.customerUnfollowMiddlewares(), this.route(this.customerUnfollow))
    }
    deleteMiddlewares(): any[] {
        return [blockMiddleware.run()]
    }
    updateMiddlewares(): any[] {
        return [companyAuthMiddleware.run(), queryInfoMiddleware.run()]
    }
    companyFollowMiddlewares(): any[] {
        return [companyAuthMiddleware.run()]
    }
    customerFollowMiddlewares(): any[] {
        return [customerAuthMiddleware.run()]
    }
    companyUnfollowMiddlewares(): any[] {
        return [companyAuthMiddleware.run()]
    }
    customerUnfollowMiddlewares(): any[] {
        return [customerAuthMiddleware.run()]
    }
    async companyFollow(req: Request, res: Response) {
        const companyFollow = req.companyInfo
        const companyId = req.params._id
        const result = await this.controller.companyFollow({companyFollow,companyId})
        this.onSuccess(res, result)
    }
    async customerFollow(req: Request, res: Response) {
        const customerFollow = req.customerInfo
        const companyId = req.params._id
        const result = await this.controller.customerFollow({customerFollow,companyId})
        this.onSuccess(res, result)
    }
    async companyUnfollow(req: Request, res: Response) {
        const companyUnfollow = req.companyInfo
        const companyId = req.params._id
        const result = await this.controller.companyUnfollow({companyUnfollow,companyId})
        this.onSuccess(res, result)
    }
    async customerUnfollow(req: Request, res: Response) {
        const customerUnfollow = req.customerInfo
        const companyId = req.params._id
        const result = await this.controller.customerUnfollow({customerUnfollow,companyId})
        this.onSuccess(res, result)
    }
    getCompanyInfoMiddleware(): any[] {
        //return [firebaseAuthInfoMiddleware.run(), queryInfoMiddleware.run()]
        return [companyAuthMiddleware.run(), queryInfoMiddleware.run()]
    }
    async getCompanyInfo(req: Request, res: Response) {
        if (!req.queryInfo.filter) req.queryInfo.filter = {}
        req.queryInfo.filter = {
            _id: req.headers.company_id
        }
        const result = await this.controller.getCompanyInfo(req.queryInfo)
        this.onSuccess(res, result)
    }
    createMiddlewares(): any[] {
        //return [firebaseAuthInfoMiddleware.run()]
        return []
    }
    async create(req: Request, res: Response) {
        await this.validateJSON(req.body, {
            type: "object",
            properties: {
                info: {
                    type: "object",
                    properties: {
                        phone: { type: "string" },
                        address: { type: "string" },
                        brand: { type: "string" },
                    },
                    required: ["brand", "address", "phone"],
                    additionalProperties: false
                }
            },
            required: ["brand", "info"],
            additionalProperties: false
        })
        //req.body.userInfo = req.firebaseUserInfo
        req.body.userInfo = { uid: "123"}
        const result = await this.controller.create(req.body)
        this.onSuccess(res, result)
    }
    pricingMiddleware(): any[] {
        return [
            companyAuthMiddleware.run()
        ]
    }
    async pricing(req: Request, res: Response) {
        await this.validateJSON(req.body, {
            type: "object",
            properties: {
                bookingId: { type: "string" },
                price: { type: "number" },
                transport: { type: "string" }
            },
            required: ["bookingId", "price", "transport"]
        })
        req.body.company = req.companyInfo
        const result = await this.controller.pricing(req.body)
        this.onSuccess(res, result)
    }
    editPricingMiddleware(): any[] {
        return [
            companyAuthMiddleware.run()
        ]
    }
    async editPricing(req: Request, res: Response) {
        await this.validateJSON(req.body, {
            type: "object",
            properties: {
                bookingId: { type: "string" },
                price: { type: "number" },
                transport: { type: "string" }
            },
            required: ["bookingId"]
        })
        req.body.company = req.companyInfo
        const result = await this.controller.editPricing(req.body)
        this.onSuccess(res, result)
    }
    exitPricingMiddlewares(): any[] {
        return [companyAuthMiddleware.run()]
    }
    async exitPricing(req: Request, res: Response) {
        await this.validateJSON(req.body, {
            type: "object",
            properties: {
                bookingId: { type: "string" }
            },
            required: ["bookingId"],
            additionalProperties: false
        })
        req.body.companyInfo = req.companyInfo
        const result = await this.controller.exitPricing(req.body)
        this.onSuccess(res, result)
    }
    addTransportMiddleware(): any[] {
        return [
            companyAuthMiddleware.run(),
        ]
    }
    async addTransport(req: Request, res: Response) {
        await this.validateJSON(req.body, {
            type: "object",
            properties: {
                type: { type: "string" },
                licensePlate: { type: "string" }
            },
            required: ["type", "licensePlate"]
        })
        req.body.company = req.companyInfo
        const result = await this.controller.addTransport(req.body)
        this.onSuccess(res, result)
    }
    getTransportsMiddlewares(): any[] {
        return [
            companyAuthMiddleware.run()
        ]
    }
    async getTransports(req: Request, res: Response) {
        const result = await this.controller.getTransports(req.companyInfo)
        this.onSuccess(res, result)
    }
    evaluateMiddlewares(): any[] {
        return [companyInfoMiddleware.run(), customerAuthMiddleware.run()]
    }
    async evaluate(req: Request, res: Response) {
        await this.validateJSON(req.body, {
            type: "object",
            properties: {
                text: { type: "string" },
                rate: { type: "number" }
            },
            required: ["text", "rate"]
        })
        req.body.customer = req.customerInfo
        req.body.company = req.companyInfo
        const result = await this.controller.evaluate(req.body)
        this.onSuccess(res, result)
    }
}

