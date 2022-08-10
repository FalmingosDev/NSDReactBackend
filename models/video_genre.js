'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class video_genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  video_genre.init({
    genere_name: DataTypes.STRING,
    genere_status: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'video_genre',
  });
  return video_genre;
};