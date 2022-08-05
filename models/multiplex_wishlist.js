'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class multiplex_wishlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  multiplex_wishlist.init({
    user_id: DataTypes.INTEGER,
    multiplex_id: DataTypes.INTEGER,
    wishlist_status: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'multiplex_wishlist',
  });
  return multiplex_wishlist;
};