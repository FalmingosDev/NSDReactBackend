'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Newouser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Newouser.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
  }, 
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    profile_pic: DataTypes.STRING,
    country_code: DataTypes.STRING,
    password: DataTypes.STRING,
    otp: DataTypes.STRING,
    referral_code: DataTypes.STRING,
    wallet_coin: DataTypes.INTEGER,
    active_date: DataTypes.DATE,
    status: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'newo_user',
  });
  return Newouser;
};