'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hashtag_social extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hashtag_social.init({
    social_name: DataTypes.STRING,
    social_logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hashtag_social',
  });
  return hashtag_social;
};