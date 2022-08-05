'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ott extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ott.init({
    category: DataTypes.INTEGER,
    name: DataTypes.STRING,
    tag_line: DataTypes.STRING,
    season: DataTypes.INTEGER,
    episode: DataTypes.INTEGER,
    media: DataTypes.STRING,
    poster: DataTypes.STRING,
    show_banner: DataTypes.CHAR,
    thumb: DataTypes.STRING,
    synopsis: DataTypes.TEXT,
    stars: DataTypes.TEXT,
    genere: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    certificate: DataTypes.INTEGER,
    watch_coin: DataTypes.INTEGER,
    duration_sec: DataTypes.BIGINT,
    status: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'ott',
  });
  return ott;
};