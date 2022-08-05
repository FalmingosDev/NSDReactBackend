'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hashtag_bank_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hashtag_bank_info.init({
    user_id: DataTypes.INTEGER,
    bank_name: DataTypes.STRING,
    bank_ifsc: DataTypes.STRING,
    bank_account_number: DataTypes.INTEGER,
    bank_account_holder: DataTypes.STRING,
    upi_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hashtag_bank_info',
  });
  return hashtag_bank_info;
};