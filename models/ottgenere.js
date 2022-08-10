'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ottgenere extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ottgenere.init({
    genere_name: DataTypes.STRING,
    genere_status: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'ottgenere',
  });
  return ottgenere;
};