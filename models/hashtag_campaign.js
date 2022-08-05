'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hashtag_campaign extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hashtag_campaign.init({
    campaign_category: DataTypes.STRING,
    campaign_name: DataTypes.STRING,
    campaign_objective: DataTypes.TEXT,
    client_id: DataTypes.INTEGER,
    campaign_reward: DataTypes.INTEGER,
    reward_value: DataTypes.STRING,
    campaign_social: DataTypes.STRING,
    campaign_image: DataTypes.STRING,
    campaign_start_date: DataTypes.DATE,
    campaign_end_date: DataTypes.DATE,
    campaign_status: DataTypes.CHAR,
    campaign_spl_note: DataTypes.STRING,
    campaign_hashtag: DataTypes.STRING,
    max_participate: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'hashtag_campaign',
  });
  return hashtag_campaign;
};