import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as Sequelize from 'sequelize'
import * as bodyParser from 'body-parser';
import * as request from 'request-promise';
import * as cors from 'cors'
import * as expressValidator from 'express-validator'
import router from './routers/index';
import { config } from './config';
import { sequelize } from './models/db'
const webpush = require('web-push');
import * as http from 'http'

const app = express();
const appServer = new http.Server(app);
import { socketService } from './services'

class Server {
    constructor() {
        this.initDB();
        this.initExpressMiddleware();
        this.initRoute();
        this.initWebPush();
        this.initApi();
        this.initView();
        this.start();
    }
    initDB() {

    }
    initExpressMiddleware() {
        app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use(expressValidator())
        app.use(cors())
        app.use(function (req, res, next) {
            res.setHeader('X-Frame-Options', `allow-from http://localhost:3000`)
            res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.setHeader('Access-Control-Allow-Headers', "Origin, Content-Type, Authorization, X-Requested-With, Accept");
            res.setHeader("Access-Control-Allow-Origin", "*")
            res.setHeader("Access-Control-Allow-Credentials", "true")

            res.removeHeader('X-Xss-Protection')
            next()
        })
    }
    initRoute() {
        app.get('/', (req, res) => {
            res.status(200).json('Xin chào');
        })
    }
    initWebPush(){
        const privateKey = "kL6Yy2Hgj5IZ44I4ISVsK2F-ATseeNQ3K4Lt9ettcgA"
        const publicKey = "BLL7l3xcJLE-qdzBcy5uGKaDEvZt0hiHG-MwdOQeP27rifGN8HMF8lHhAH673iDdfrKqjSioDlm6PsBZED1V9ik"
        webpush.setVapidDetails('mailto:vunam.cmg@gmail.com',publicKey, privateKey)
        app.post('/webPush/subscribe', (req, res) => {
            const subscription = req.body
            res.status(200).json({})
            const payload = JSON.stringify({
                type: "user_notification_like",
                payload: {
                    title: "Vũ Hoài Nam vừa bình luận bài viết",
                }
            })
            webpush.sendNotification(subscription, payload).catch(err => {
                console.log("Send notification err: ", err)
            })
        })
        app.get('/webPush/test', (req, res) => {
            const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/fQeZiHyFpn0:APA91bEqHX7v6j791bFL0xWQzWxYZn5kt-aaMWTUImd7ykIFmsDIjYaneZZM2KTAIcC7jRG1wrrX9KHXVdsPGJSoFKUI1ZSYR-lZ95ltWqGK-qzl-WvU0tCZWmsN9s7IwgaOZXMgC96w","expirationTime":null,"keys":{"p256dh":"BDxThRV_OA7Umy1C4rHGKjEnJVWBiS1FsR-UPB9xFT33A5o6BZsvskjwr1bBk0Ph9mfGvJ5bTyNbBpnUFq3IFIY","auth":"eInjP9QyeD5DcCBJ13fRtA"}}
            const payload = JSON.stringify({
                type: "user_notification_like",
                payload: {
                    title: "Vũ Hoài Nam vừa bình luận bài viết",
                }
            })
            webpush.sendNotification(pushSubscription, payload).catch(err => {
                console.log("Send notification err: ", err)
            })
            res.status(200).json({})

        })
    }
    initApi() {
        app.use('/api', router)
    }
    initView() {
        app.set('view engine', 'ejs');
        app.use(express.static('views'));
        app.get('/login', (req, res) => {
            res.render('login.ejs')
        })
    }
    start() {
        // app.listen(process.env.PORT, (err: any) => {
        //     if (err) {
        //         return console.log("Server have some error: ", err);
        //     }
        //     return console.log(`Server have been started on ${process.env.PORT}`);
        // })
        appServer.listen(process.env.PORT || 4000, (err: any) => {
            if (err) {
                return console.log("Server have some error: ", err);
            }
            return console.log(`Server have been started on ${process.env.PORT}`);
        })
        socketService.listen(appServer as any)
    }
}

const server = new Server();

