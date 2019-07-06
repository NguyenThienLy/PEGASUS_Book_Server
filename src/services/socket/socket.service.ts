import * as socketio from 'socket.io'
import * as express from 'express'
import * as _ from 'lodash'
import * as moment from 'moment'
import * as redis from 'redis'

import { errorService } from '../index'
import { userService } from '../crud/user';

import { SocketHelper } from './socket.helper'

const socketHelper = new SocketHelper()

export class SocketService {
    constructor() {
        this.redisClient = redis.createClient({
            host: "redis-16806.c62.us-east-1-4.ec2.cloud.redislabs.com",
            port: "16806",
            password: "fJK8ccO8p9I5qJdctGekmTcSf9yDlwZ4"
        })
    }
    io: socketio.Server
    redisClient: redis.Client

    async listen(server: express.Application) {
        this.io = socketio.listen(server, { origins: "https://bookfeeling.herokuapp.com/" })
        this.io.on('connection', async (socket: socketio.Socket) => {
            socket.emit("connect_success", {
                message: "Connect successfully"
            })
            if (socket.handshake.query.userId && socket.handshake.query.token) {
                const user = await socketHelper.getUser(socket.handshake.query.userId, socket.handshake.query.token)
                this.redisClient.set(user._id, socket.id, function (err) {
                })
            }
        })
    }
    async sendSocket(channel: string, payload: any) {
        switch (channel) {
            case "user_notification":
                const socketId = await this.getRedisValue(payload.userId)
                this.io.to(socketId).emit("user_notification", payload)
        }
    }
    async getRedisValue(userId){
        return new Promise( (resolve, reject) => {
            this.redisClient.get(userId, function(err, value){
                if(err){
                    reject(err)
                }
                resolve(value)
            })
        })
    }
    async getUserAccount(userId: string, token: string) {
        return await userService.getItem({ filter: { _id: userId } })

    }



}