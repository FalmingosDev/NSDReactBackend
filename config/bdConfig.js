module.exports = {
    // HOST: 'localhost',
    // USER: 'root',
    // PASSWORD: '',
    // DB: 'node_sequelize_api_db',
    // dialect: 'mysql',

    HOST: 'dbnewouat.cqtyulrshsvk.ap-southeast-1.rds.amazonaws.com',
    USER: 'newo_uat',
    PASSWORD: 'newouat123',
    DB: 'newo_db_rds',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquerire: 30000,
        idle: 10000
    }
}