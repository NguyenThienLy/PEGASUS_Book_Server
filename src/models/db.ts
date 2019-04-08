import * as Sequelize from 'sequelize'
import { config } from '../config'
import * as _ from 'lodash'


const option: any = {
    dialect: "postgresql",
    host: config.database.host,
}

if (config.database.ssl === 'true' ) {
    _.merge(option, {
        ssl: true,
        dialectOptions: {
            ssl: {
                require: true
            }
        }
    })
}



export const sequelize = new Sequelize(config.database.name, config.database.user, config.database.pass, option)
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });