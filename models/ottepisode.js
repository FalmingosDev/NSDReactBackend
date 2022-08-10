'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ottepisode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ottepisode.init({
    episode_name: DataTypes.STRING,
    episode_status: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'ottepisode',
  });
  return ottepisode;
};