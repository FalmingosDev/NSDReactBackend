'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class multiplex_subscribe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  multiplex_subscribe.init({
    user_id: DataTypes.INTEGER,
    multiplex_id: DataTypes.INTEGER,
    payment_txn_id: DataTypes.INTEGER,
    wallet_txn_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'multiplex_subscribe',
  });
  return multiplex_subscribe;
};