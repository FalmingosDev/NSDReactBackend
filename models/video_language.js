'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class video_language extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  video_language.init({
    language_name: DataTypes.STRING,
    language_status: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'video_language',
  });
  return video_language;
};