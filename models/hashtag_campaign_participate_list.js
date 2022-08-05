'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hashtag_campaign_participate_list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hashtag_campaign_participate_list.init({
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    campaign_id: DataTypes.INTEGER,
    social_link: DataTypes.STRING,
    mob_no: DataTypes.STRING,
    address: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'hashtag_campaign_participate_list',
  });
  return hashtag_campaign_participate_list;
};