'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class country_list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  country_list.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    ISD: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'country_list',
  });
  return country_list;
};