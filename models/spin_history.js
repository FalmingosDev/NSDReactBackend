'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class spin_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  spin_history.init({
    user_id: DataTypes.INTEGER,
    spin_id: DataTypes.INTEGER,
    spin_prize_id: DataTypes.INTEGER,
    wallet_transaction_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'spin_history',
  });
  return spin_history;
};