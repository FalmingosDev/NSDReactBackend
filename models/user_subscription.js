'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_subscription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_subscription.init({
    newo_user_id: DataTypes.INTEGER,
    subscription_start_date: DataTypes.DATE,
    subscription_end_date: DataTypes.DATE,
    subscription_type: DataTypes.CHAR,
    coupon_code: DataTypes.STRING,
    subscription_status: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'user_subscription',
  });
  return user_subscription;
};