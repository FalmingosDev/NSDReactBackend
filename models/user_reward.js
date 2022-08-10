'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_reward extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_reward.init({
    newo_user_id: DataTypes.INTEGER,
    reward_id: DataTypes.INTEGER,
    apply_date: DataTypes.DATE,
    status: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'user_reward',
  });
  return user_reward;
};