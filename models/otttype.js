'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class otttype extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  otttype.init({
    type_name: DataTypes.STRING,
    type_status: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'otttype',
  });
  return otttype;
};