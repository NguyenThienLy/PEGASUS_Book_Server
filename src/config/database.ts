require('dotenv').config();
let development, production;
if (process.env.DB_SSL && process.env.DB_SSL === 'true') {
    development = {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASS,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": "mysql",
        "ssl": true,
        "dialectOptions": {
            "ssl": {
                "require": true
            }
        }
    };
}
else {
    development = {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASS,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": "mysql",
    };
}
if (process.env.PROD_DB_SSL && process.env.PROD_DB_SSL === 'true') {
    production = {
        "username": process.env.PROD_DB_USER,
        "password": process.env.PROD_DB_PASS,
        "database": process.env.PROD_DB_NAME,
        "host": process.env.PROD_DB_HOST,
        "dialect": "mysql",
        "ssl": true,
        "dialectOptions": {
            "ssl": {
                "require": true
            }
        }
    };
}
else {
    production = {
        "username": process.env.PROD_DB_USER,
        "password": process.env.PROD_DB_PASS,
        "database": process.env.PROD_DB_NAME,
        "host": process.env.PROD_DB_HOST,
        "dialect": "mysql"
    };
}
module.exports = {
    "development": development,
    "production": production
};
//# sourceMappingURL=database.js.map