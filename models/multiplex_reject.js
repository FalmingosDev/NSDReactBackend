'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class multiplex_reject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  multiplex_reject.init({
    multiplex_id: DataTypes.INTEGER,
    reject_reason: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'multiplex_reject',
  });
  return multiplex_reject;
};