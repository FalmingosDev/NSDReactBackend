'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class newo_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  newo_user.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    country_code: DataTypes.STRING,
    password: DataTypes.STRING,
    profile_pic: DataTypes.STRING,
    otp: DataTypes.STRING,
    referral_code: DataTypes.STRING,
    wallet_coin: DataTypes.INTEGER,
    active_date: DataTypes.DATE,
    status: DataTypes.CHAR,
    created_ts: DataTypes.DATE,
    updated_ts: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'newo_user',
  });
  return newo_user;
};