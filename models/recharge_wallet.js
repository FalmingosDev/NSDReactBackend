'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recharge_wallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  recharge_wallet.init({
    coins: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    type_status: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'recharge_wallet',
  });
  return recharge_wallet;
};