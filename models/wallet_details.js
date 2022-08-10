'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wallet_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  wallet_details.init({
    user_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    category_detail_id: DataTypes.INTEGER,
    wallet_point: DataTypes.INTEGER,
    wallet_action_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'wallet_details',
  });
  return wallet_details;
};