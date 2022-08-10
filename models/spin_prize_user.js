'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class spin_prize_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  spin_prize_user.init({
    user_id: DataTypes.INTEGER,
    spin_id: DataTypes.INTEGER,
    spin_prize_id: DataTypes.INTEGER,
    is_claim: DataTypes.CHAR,
    claim_time: DataTypes.DATE,
    is_distributed: DataTypes.CHAR,
    distributed_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'spin_prize_user',
  });
  return spin_prize_user;
};