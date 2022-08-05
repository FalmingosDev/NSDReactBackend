'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  game.init({
    game_name: DataTypes.STRING,
    category: DataTypes.INTEGER,
    game_url: DataTypes.TEXT,
    game_img: DataTypes.STRING,
    conversion_rate: DataTypes.DECIMAL,
    game_price: DataTypes.INTEGER,
    status: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'game',
  });
  return game;
};