'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class credit_debit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  credit_debit.init({
    credit_debit: DataTypes.STRING,
    credit_debit_short: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'credit_debit',
  });
  return credit_debit;
};