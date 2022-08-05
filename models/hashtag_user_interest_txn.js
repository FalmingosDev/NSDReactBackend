'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hashtag_user_interest_txn extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hashtag_user_interest_txn.init({
    user_id: DataTypes.INTEGER,
    subscriber_id: DataTypes.INTEGER,
    hashtag_interest: DataTypes.STRING,
    social_link1: DataTypes.STRING,
    social_link2: DataTypes.STRING,
    social_link3: DataTypes.STRING,
    social_link4: DataTypes.STRING,
    social_link5: DataTypes.STRING,
    social_link6: DataTypes.STRING,
    social_link7: DataTypes.STRING,
    social_link8: DataTypes.STRING,
    active_inactive: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'hashtag_user_interest_txn',
  });
  return hashtag_user_interest_txn;
};