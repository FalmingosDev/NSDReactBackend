'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class scratch_code extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  scratch_code.init({
    prefix: DataTypes.STRING,
    batch: DataTypes.STRING,
    volume: DataTypes.STRING,
    scratch_code: DataTypes.STRING,
    is_used: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'scratch_code',
  });
  return scratch_code;
};