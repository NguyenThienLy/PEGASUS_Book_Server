import * as express from 'express';
import { CrudRouter } from '../crud';
import { customerController } from '../../controllers'
import { firebaseAuthInfoMiddleware, customerInfoMiddleware, customerAuthMiddleware, queryInfoMiddleware, companyAuthMiddleware } from '../../middlewares'
import { Request, Response } from '../base'

export default class CompanyRouter extends CrudRouter<typeof customerController> {
    constructor() {
        super(customerController);
    }
    customRouter() {
        this.router.get('/me', this.getProfileInfoMiddleware(), this.route(this.getProfile))
        this.router.post('/booking', this.bookingMiddleware(), this.route(this.booking))
        this.router.get('/bookings', this.getBookingsMiddlewares(), this.route(this.getBookings))
        this.router.put('/:_id/companyFollow', this.companyFollowMiddlewares(), this.route(this.companyFollow))
        this.router.put('/:_id/companyUnfollow', this.companyUnfollowMiddlewares(), this.route(this.companyUnfollow))
        this.router.put('/:_id/customerFollow', this.customerFollowMiddlewares(), this.route(this.customerFollow))
        this.router.put('/:_id/customerUnfollow', this.customerUnfollowMiddlewares(), this.route(this.customerUnfollow))
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
        const customerId = req.params._id
        const result = await this.controller.companyFollow({companyFollow,customerId})
        this.onSuccess(res, result)
    }
    async customerFollow(req: Request, res: Response) {
        const customerFollow = req.customerInfo
        const customerId = req.params._id
        const result = await this.controller.customerFollow({customerFollow,customerId})
        this.onSuccess(res, result)
    }
    async companyUnfollow(req: Request, res: Response) {
        const companyUnfollow = req.companyInfo
        const customerId = req.params._id
        const result = await this.controller.companyUnfollow({companyUnfollow,customerId})
        this.onSuccess(res, result)
    }
    async customerUnfollow(req: Request, res: Response) {
        const customerUnfollow = req.customerInfo
        const customerId = req.params._id
        const result = await this.controller.customerUnfollow({customerUnfollow,customerId})
        this.onSuccess(res, result)
    }
    updateMiddlewares(): any[] {
        return [ customerAuthMiddleware.run(),queryInfoMiddleware.run()]
    }
    getProfileInfoMiddleware(): any[] {
       return [ firebaseAuthInfoMiddleware.run(), queryInfoMiddleware.run()]
       //return [ queryInfoMiddleware.run()]
    }
    async getProfile(req: Request, res: Response){
        if(!req.queryInfo.filter) req.queryInfo.filter = {}
        req.queryInfo.filter = {
            uid: req.firebaseUserInfo.uid
        }
        const result = await this.controller.getProfile(req.queryInfo)
        this.onSuccess(res, result)
    }
    async create(req: Request, res: Response) {
        req.body.userInfo = req.firebaseUserInfo
        const result = await this.controller.create(req.body)
        this.onSuccess(res, result)
    }
    bookingMiddleware(): any[] {
        return [
            firebaseAuthInfoMiddleware.run(),
            customerAuthMiddleware.run()
        ]
    }
    async booking(req: Request, res: Response) {
        await this.validateJSON(req.body, {
            type: "object",
            properties: {
                description: { type: "string" },
                lowestPrice: { type: "number" },
                highestPrice: { type: "number" },
                startDate: { type: "string", format: "date-time"},
                endDate: { type: "string", format: "date-time"},
                origin: {
                    type: "object",
                    properties: {
                        address: { type: "string" },
                        coordinates: {
                            type: "object",
                            properties: {
                                lat: { type: "number" },
                                lng: { type: "number" }
                            }
                        }
                    }
                },
                destination: {
                    type: "object",
                    properties: {
                        address: { type: "string" },
                        coordinates: {
                            type: "object",
                            properties: {
                                lat: { type: "number" },
                                lng: { type: "number" }
                            }
                        }
                    }
                },
                required: { type: "string" }
            },
            required: ["lowestPrice","highestPrice","origin","destination","startDate","endDate"],
            additionalProperties: false
        })
        req.body.customer = req.customerInfo
        const result = await this.controller.booking(req.body)
        this.onSuccess(res, result)
    }
    getBookingsMiddlewares(): any[] {
        return [ customerAuthMiddleware.run()]
    }
    async getBookings(req: Request, res: Response){
        const result = await this.controller.getBookings(req.customerInfo)
        this.onSuccess(res, result)
    }
}

