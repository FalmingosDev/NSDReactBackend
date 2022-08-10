'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class referral_transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  referral_transaction.init({
    user_id: DataTypes.INTEGER,
    used_by: DataTypes.INTEGER,
    use_date: DataTypes.DATE,
    user_point: DataTypes.STRING,
    referrer_point: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'referral_transaction',
  });
  return referral_transaction;
};