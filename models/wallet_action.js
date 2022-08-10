'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wallet_action extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  wallet_action.init({
    wallet_action: DataTypes.STRING,
    credit_debit_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'wallet_action',
  });
  return wallet_action;
};