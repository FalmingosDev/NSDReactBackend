'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ottseason extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ottseason.init({
    season_name: DataTypes.STRING,
    season_status: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'ottseason',
  });
  return ottseason;
};