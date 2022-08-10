'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class spin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  spin.init({
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    use_coin: DataTypes.INTEGER,
    use_coin_2nd_time: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'spin',
  });
  return spin;
};