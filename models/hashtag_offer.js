'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hashtag_offer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hashtag_offer.init({
    offer_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hashtag_offer',
  });
  return hashtag_offer;
};