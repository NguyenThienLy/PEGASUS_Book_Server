"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
const index_1 = require("./routers/index");
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
        // const database = new Sequelize('entrepreneu', 'postgres', 'password', {
        //     host: 'localhost',
        //     dialect: 'postgres',
        //     operatorsAliases: false,
        //     pool: {
        //       max: 5,
        //       min: 0,
        //       acquire: 30000,
        //       idle: 10000
        //     },
        //   });
        // Or you can simply use a connection uri
        //const sequelize = new Sequelize('postgres://postgres@localhost:5432/entrepreneu');
        // sequelize
        //     .authenticate()
        //     .then(() => {
        //         console.log('Connection has been established successfully.');
        //     })
        //     .catch(err => {
        //         console.error('Unable to connect to the database:', err);
        //     });
    }
    initExpressMiddleware() {
        app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use(expressValidator());
        app.use(cors());
    }
    initRoute() {
        app.get('/', (req, res) => {
            res.status(200).json('Xin chào');
        });
    }
    initApi() {
        app.use('/api', index_1.default);
    }
    initView() {
        app.set('view engine', 'ejs');
        app.use(express.static('views'));
        app.get('/login', (req, res) => {
            res.render('login.ejs');
        });
    }
    start() {
        app.listen(process.env.PORT, err => {
            if (err) {
                return console.log("Server have some error: ", err);
            }
            return console.log(`Server have been started on ${process.env.PORT}`);
        });
    }
}
const server = new Server();
//# sourceMappingURL=app.js.map