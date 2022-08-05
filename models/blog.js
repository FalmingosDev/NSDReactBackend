'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  blog.init({
    blog_title: DataTypes.STRING,
    blog_author: DataTypes.STRING,
    author_img: DataTypes.STRING,
    blog_date: DataTypes.DATE,
    blog_img: DataTypes.STRING,
    blog_text: DataTypes.TEXT,
    blog_status: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'blog',
  });
  return blog;
};