'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hashtag_steps_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hashtag_steps_master.init({
    campaign_id: DataTypes.INTEGER,
    steps_id: DataTypes.INTEGER,
    steps_heading: DataTypes.STRING,
    steps_details: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'hashtag_steps_master',
  });
  return hashtag_steps_master;
};