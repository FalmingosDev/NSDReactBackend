'use strict';

const fs = require('fs');
const path = require('path');
const {Sequelize, DataTypes} = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'test';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  /*.forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});*/

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.blog = require('./blog')(sequelize, DataTypes)
db.cartification = require('./cartification')(sequelize, DataTypes)
db.country_list = require('./country_list')(sequelize, DataTypes)

db.newo_user = require('./newo_user')(sequelize, DataTypes)
db.referral_transaction = require('./referral_transaction')(sequelize, DataTypes)
db.wallet_detail = require('./wallet_details')(sequelize, DataTypes)
db.user_subscription = require('./user_subscription')(sequelize, DataTypes)

db.reward = require('./reward')(sequelize, DataTypes)
db.user_reward = require('./user_reward')(sequelize, DataTypes)

db.wallet_detail = require('./wallet_details')(sequelize, DataTypes)

// db.category = require('./category.js')(sequelize, DataTypes)
// db.certification = require('./certification.js')(sequelize, DataTypes)
// db.creator = require('./creator.js')(sequelize, DataTypes)


db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync is done')
    })

module.exports = db;
