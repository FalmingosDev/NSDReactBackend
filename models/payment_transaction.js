'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment_transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  payment_transaction.init({
    user_id: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    bank_ref_no: DataTypes.STRING,
    order_id: DataTypes.STRING,
    tracking_id: DataTypes.STRING,
    txn_status: DataTypes.STRING,
    paymode: DataTypes.STRING,
    card_name: DataTypes.STRING,
    txn_date: DataTypes.STRING,
    remarks: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'payment_transaction',
  });
  return payment_transaction;
};