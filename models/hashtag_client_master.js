'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hashtag_client_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hashtag_client_master.init({
    client_name: DataTypes.STRING,
    client_logo: DataTypes.STRING,
    client_country: DataTypes.INTEGER,
    client_state: DataTypes.STRING,
    client_city: DataTypes.STRING,
    client_pincode: DataTypes.INTEGER,
    client_address: DataTypes.STRING,
    client_details: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hashtag_client_master',
  });
  return hashtag_client_master;
};