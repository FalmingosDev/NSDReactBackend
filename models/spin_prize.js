'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class spin_prize extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  spin_prize.init({
    spin_id: DataTypes.INTEGER,
    prize_name: DataTypes.STRING,
    encode_prize: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    picture: DataTypes.STRING,
    newocoin_prize: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'spin_prize',
  });
  return spin_prize;
};