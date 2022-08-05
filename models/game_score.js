'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game_score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  game_score.init({
    user_id: DataTypes.INTEGER,
    game_id: DataTypes.INTEGER,
    score: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'game_score',
  });
  return game_score;
};