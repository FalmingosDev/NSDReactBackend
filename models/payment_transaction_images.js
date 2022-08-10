'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment_transaction_images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  payment_transaction_images.init({
    transaction_id: DataTypes.INTEGER,
    transaction_images: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'payment_transaction_images',
  });
  return payment_transaction_images;
};