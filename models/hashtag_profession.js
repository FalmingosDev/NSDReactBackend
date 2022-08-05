'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hashtag_profession extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hashtag_profession.init({
    profession_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hashtag_profession',
  });
  return hashtag_profession;
};