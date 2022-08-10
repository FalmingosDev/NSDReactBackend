'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reward extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reward.init({
    rewards_title: DataTypes.STRING,
    rewards_desc: DataTypes.STRING,
    reward_coin: DataTypes.STRING,
    user_active_date: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    status: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'reward',
  });
  return reward;
};