import * as Sequelize from 'sequelize'
import { config } from '../config'
import * as _ from 'lodash'


const Op = Sequelize.Op;
const operatorsAliases = {
  $or: Op.or,
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col
};


const option: any = {
    dialect: "postgresql",
    host: config.database.host,
    operatorsAliases
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


export const sequelize = new Sequelize(config.database.name, config.database.user, config.database.pass, option, { operatorsAliases })
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });