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
import * as compression from 'compression'

const app = express();

class Server {
    constructor() {
        this.initDB();
        this.initExpressMiddleware();
        this.initRoute();
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
        app.use(compression())
    }
    initRoute() {
        app.get('/', (req, res) => {
            res.status(200).json('Xin chào');
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
        app.listen(process.env.PORT, (err: any) => {
            if (err) {
                return console.log("Server have some error: ", err);
            }
            return console.log(`Server have been started on ${process.env.PORT}`);
        })
    }
}

const server = new Server();

