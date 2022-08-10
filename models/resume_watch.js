'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class resume_watch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  resume_watch.init({
    video_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    play_time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'resume_watch',
  });
  return resume_watch;
};