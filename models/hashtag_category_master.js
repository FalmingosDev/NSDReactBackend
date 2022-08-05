'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hashtag_category_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hashtag_category_master.init({
    category_name: DataTypes.STRING,
    category_description: DataTypes.STRING,
    category_image: DataTypes.STRING,
    active_inactive: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hashtag_category_master',
  });
  return hashtag_category_master;
};